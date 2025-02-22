import Image from 'next/image'
import { Target, Lightbulb, Zap, Shield, Users, RefreshCwIcon as Refresh, Heart, User } from 'lucide-react'

export default function About() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">About Tesuji Systems Ltd.</h1>
        
        <div className="flex flex-wrap items-center mb-16">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
            <div className="bg-orange-100 rounded-full p-8 transition-all duration-300 hover:scale-110 hover:shadow-lg">
              <Target size={100} className="text-orange-500" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-12">
            <h2 className="text-2xl font-bold mb-4 transition-colors duration-300 hover:text-orange-500">Our Mission</h2>
            <p className="mb-6 transition-colors duration-300 hover:text-gray-700">
              At Tesuji Systems Ltd., our mission is to revolutionize problem-solving and decision-making in the business world. 
              We strive to empower organizations with innovative strategies and cutting-edge technologies that drive growth, 
              efficiency, and competitive advantage.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center mb-16">
          <div className="w-full lg:w-1/2 lg:pr-12 order-2 lg:order-1">
            <h2 className="text-2xl font-bold mb-4 transition-colors duration-300 hover:text-orange-500">Our Approach</h2>
            <p className="transition-colors duration-300 hover:text-gray-700">
              We combine the ancient wisdom of Tesuji - a term from the game of Go meaning a clever and skillful move - 
              with modern analytical techniques and emerging technologies. This unique approach allows us to identify 
              unexpected yet highly effective solutions to complex business challenges.
            </p>
          </div>
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center order-1 lg:order-2">
            <div className="bg-orange-100 rounded-full p-8 transition-all duration-300 hover:scale-110 hover:shadow-lg">
              <Lightbulb size={100} className="text-orange-500" />
            </div>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mb-8 text-center transition-colors duration-300 hover:text-orange-500">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { title: "Innovation", description: "We constantly push the boundaries of what's possible.", Icon: Zap },
            { title: "Integrity", description: "We uphold the highest standards of honesty and ethics.", Icon: Shield },
            { title: "Collaboration", description: "We believe in the power of teamwork and partnership.", Icon: Users },
            { title: "Excellence", description: "We strive for exceptional quality in everything we do.", Icon: Target },
            { title: "Adaptability", description: "We embrace change and evolve with the dynamic business landscape.", Icon: Refresh },
            { title: "Client-Centric", description: "Our clients' success is at the heart of our work.", Icon: Heart },
          ].map((value, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-800">
              <div className="bg-orange-500 rounded-full p-4 mb-4 shadow-lg">
                <value.Icon size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
        
        <h2 className="text-3xl font-bold mb-8 text-center transition-colors duration-300 hover:text-orange-500">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Jane Doe", title: "CEO & Founder", image: "/placeholder.svg?height=300&width=300&text=Jane+Doe" },
            { name: "John Smith", title: "Chief Innovation Officer", image: "/placeholder.svg?height=300&width=300&text=John+Smith" },
            { name: "Emily Brown", title: "Head of Consulting", image: "/placeholder.svg?height=300&width=300&text=Emily+Brown" },
          ].map((member, index) => (
            <div key={index} className="text-center transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Image src={member.image} alt={member.name} width={300} height={300} className="rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold transition-colors duration-300 hover:text-orange-500">{member.name}</h3>
              <p className="transition-colors duration-300 hover:text-gray-700">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

