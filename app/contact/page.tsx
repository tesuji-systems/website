'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Sending email to: info@tesujisystems.com')
    console.log('Form data:', formData)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            {isSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Thank you!</strong>
                <span className="block sm:inline"> Your message has been sent to Tesuji Systems. We will get back to you soon!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-orange-500 transition-colors"
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-orange-500 transition-colors"
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-orange-500 transition-colors"
                    id="message"
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  ></textarea>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="bg-gray-100 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="mb-4">We'd love to hear from you. Feel free to reach out with any questions or inquiries.</p>
              <div className="mb-4">
                <h3 className="font-bold">Address:</h3>
                <p>123 Innovation Street, Techville, TX 12345</p>
              </div>
              <div className="mb-4">
                <h3 className="font-bold">Phone:</h3>
                <p>(123) 456-7890</p>
              </div>
              <div className="mb-4">
                <h3 className="font-bold">Email:</h3>
                <p>info@tesujisystems.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

