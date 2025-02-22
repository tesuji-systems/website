"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Send, X, MessageCircle, Loader2, Trash2 } from "lucide-react"

type Message = {
  text: string
  isUser: boolean
  timestamp: Date
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [scrollToBottom])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        text: "Hello! I'm the Tesuji Systems assistant. How can I help you learn more about our company and services?",
        isUser: false,
        timestamp: new Date(),
      }
      setMessages([welcomeMessage])
    }
  }, [isOpen, messages.length])

  const handleSendMessage = useCallback(async () => {
    if (inputMessage.trim() === "") return

    const userMessage: Message = {
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    }
    setMessages((prevMessages) => [...prevMessages, userMessage])
    setInputMessage("")
    setIsTyping(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputMessage, conversation: messages }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error(`HTTP error! status: ${response.status}, body: ${errorText}`)
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      if (!data.message) {
        console.error("Invalid API response:", data)
        throw new Error("No message received from the server")
      }

      const aiResponse: Message = {
        text: data.message,
        isUser: false,
        timestamp: new Date(),
      }
      setMessages((prevMessages) => [...prevMessages, aiResponse])
    } catch (error) {
      console.error("Error in handleSendMessage:", error)
      let errorMessage = "An unknown error occurred. Please try again later."
      if (error instanceof Error) {
        errorMessage = error.message
      }
      const errorResponse: Message = {
        text: `I'm sorry, I encountered an error: ${errorMessage}`,
        isUser: false,
        timestamp: new Date(),
      }
      setMessages((prevMessages) => [...prevMessages, errorResponse])
    } finally {
      setIsTyping(false)
    }
  }, [inputMessage, messages])

  const clearChat = useCallback(() => {
    setMessages([])
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center space-x-2"
        >
          <MessageCircle size={20} />
          <span>Chat with Us</span>
        </button>
      )}
      {isOpen && (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-96 flex flex-col h-[32rem] overflow-hidden border border-blue-500">
          <div className="bg-blue-600 dark:bg-gray-800 text-white py-3 px-4 flex justify-between items-center border-b border-blue-500">
            <h2 className="text-lg font-semibold">Tesuji Systems Assistant</h2>
            <div className="flex items-center space-x-2">
              <button onClick={clearChat} className="text-white hover:text-blue-200 p-1">
                <Trash2 size={20} />
              </button>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-blue-200">
                <X size={24} />
              </button>
            </div>
          </div>
          <div className="flex-grow overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[75%] p-3 rounded-lg ${
                    message.isUser
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-blue-100"
                  }`}
                >
                  <div>{message.text}</div>
                  <div className="text-xs opacity-70 mt-1">{message.timestamp.toLocaleTimeString()}</div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-blue-100 p-3 rounded-lg flex items-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Assistant is typing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="border-t border-blue-500 p-4 flex items-center space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-grow bg-white dark:bg-gray-800 text-gray-900 dark:text-blue-100 border border-blue-500 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-300"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

