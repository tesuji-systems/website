import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Tesuji Systems Ltd.</h3>
            <p className="mb-4">Unlocking Innovation Through Tesuji Systems</p>
            <p>© 2023 Tesuji Systems Ltd. All rights reserved.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p className="mb-2">123 Innovation Street</p>
            <p className="mb-2">Techville, TX 12345</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p>Email: info@tesujisystems.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

