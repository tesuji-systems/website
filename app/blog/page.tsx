import Link from 'next/link'
import { BookOpen, Cpu, BarChart } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "The Power of Tesuji Thinking in Business",
    excerpt: "Learn how applying Tesuji principles can lead to breakthrough innovations in your organization.",
    date: "2023-05-15",
    Icon: BookOpen
  },
  {
    id: 2,
    title: "Navigating Digital Transformation with Tesuji Systems",
    excerpt: "Discover how our approach to digital transformation can help your business stay ahead of the curve.",
    date: "2023-05-01",
    Icon: Cpu
  },
  {
    id: 3,
    title: "Case Study: Revolutionizing Supply Chain Management",
    excerpt: "Read about how we helped a major retailer optimize their supply chain using innovative Tesuji techniques.",
    date: "2023-04-20",
    Icon: BarChart
  }
]

export default function Blog() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Tesuji Systems Blog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <Link href={`/blog/${post.id}`} key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="p-4 bg-orange-100 flex justify-center">
                <div className="bg-orange-500 rounded-full p-4">
                  <post.Icon size={48} className="text-white" />
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

