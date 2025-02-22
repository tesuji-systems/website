import { Lightbulb, Rocket, Cpu, BarChart } from 'lucide-react'

const services = [
  {
    title: "Strategic Consulting",
    description: "Our strategic consulting service helps businesses navigate complex challenges and make informed decisions. We provide expert analysis, market insights, and actionable recommendations to drive your organization forward.",
    Icon: Lightbulb
  },
  {
    title: "Innovation Workshops",
    description: "Our innovation workshops are designed to spark creativity and foster a culture of innovation within your organization. Through collaborative exercises and guided ideation, we help teams generate breakthrough ideas and solutions.",
    Icon: Rocket
  },
  {
    title: "Technology Solutions",
    description: "We offer cutting-edge technology solutions tailored to your business needs. From AI and machine learning implementations to custom software development, we help you leverage technology to gain a competitive edge.",
    Icon: Cpu
  },
  {
    title: "Process Optimization",
    description: "Our process optimization service helps businesses streamline operations and improve efficiency. We analyze your current processes, identify bottlenecks, and implement data-driven solutions to enhance productivity.",
    Icon: BarChart
  }
]

export default function Services() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>
        
        {services.map((service, index) => (
          <div key={index} className={`flex flex-wrap items-center mb-20 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
              <div className="bg-orange-100 rounded-full p-8 transition-transform duration-300 hover:scale-110">
                <service.Icon size={100} className="text-orange-500" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:px-12">
              <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
              <p className="mb-6">{service.description}</p>
              {/* Learn More button removed */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

