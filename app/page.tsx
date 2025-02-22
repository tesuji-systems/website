"use client";

import Image from "next/image"
import { Shield, Zap, LightbulbIcon } from "lucide-react"
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="K_NKpBUCFcigj5t4tMr9s";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();`;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up the script on component unmount
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-blue-100">
      <header className="py-8 px-6 bg-gray-800 border-b border-blue-500">
        <div className="container mx-auto flex justify-center items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EyaXzico9fceu8K9VUZSK9jjgjIiKb.png"
            alt="Tesuji Systems Ltd Logo"
            width={224}
            height={224}
            className="rounded-full"
            priority
          />
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4 text-blue-300">Tesuji Systems Ltd</h1>
            <p className="text-2xl mb-4 text-blue-200">Decentralized Validation & Network Services</p>
            <h2 className="text-4xl font-bold mb-4 text-blue-300">Welcome</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              We specialize in trustless validation and decentralized network solutions. Our mission is to enable
              seamless, secure, and efficient blockchain-based applications through reliable RPC services and
              distributed networks validation services.
            </p>
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-blue-300">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Validation Nodes",
                  description: "Scalable validator nodes for secure, trustless consensus.",
                  icon: Shield,
                },
                {
                  title: "RPC Endpoints",
                  description: "Resilient and fast interfaces connecting dApps to blockchain networks.",
                  icon: Zap,
                },
                {
                  title: "Consulting",
                  description: "Strategy guidance for scalable, decentralized adoption.",
                  icon: LightbulbIcon,
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="relative bg-gray-700 p-6 rounded-lg transition-all duration-300 hover:bg-gray-600 hover:shadow-lg hover:-translate-y-1 cursor-pointer border border-blue-400 group overflow-hidden"
                >
                  <div className="relative z-10">
                    <div className="flex justify-center mb-4">
                      <div className="relative w-24 h-24">
                        <div className="absolute inset-0 bg-blue-500 shield-shape opacity-25 animate-pulse"></div>
                        <div className="relative flex items-center justify-center w-full h-full bg-gray-800 shield-shape">
                          <service.icon className="w-16 h-16 text-blue-400 group-hover:text-blue-300 transition-colors duration-300 animate-float" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-blue-300 text-center">{service.title}</h3>
                    <p className="text-blue-100 text-center">{service.description}</p>
                  </div>
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-blue-500 shield-shape opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-blue-500 shield-shape opacity-0 group-hover:opacity-10 transition-opacity duration-300 animate-ping"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-blue-300">About Us</h2>
            <p className="max-w-2xl mx-auto text-center text-xl text-blue-100">
              Tesuji Systems Ltd unites cryptographic expertise with operational excellence. We believe decentralized
              infrastructures will transform how systems collaborate, share data, and establish consensus.
            </p>
          </div>
        </section>
      </main>

      <footer className="py-6 px-6 bg-gray-800 border-t border-blue-500">
        <div className="container mx-auto text-center">
          <p className="mb-2 text-blue-200">&copy; 2025 Tesuji Systems Ltd. All rights reserved.</p>
          <p className="text-sm text-blue-300">Empowering the future of decentralized networks.</p>
        </div>
      </footer>
    </div>
  )
}

