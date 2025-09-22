import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-red-900/20 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-red-600">KenyaFlix</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Celebrating the best of Kenyan cinema and storytelling. Stream authentic African content that reflects our
              rich culture and heritage.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/movies" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Movies
                </Link>
              </li>
              <li>
                <Link href="/search" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Search
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  My List
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Recently Added
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Drama
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Comedy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Action
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Romance
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Documentary
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail size={16} />
                <span>info@kenyaflix.co.ke</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone size={16} />
                <span>+254 700 123 456</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <MapPin size={16} />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Movies Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="text-white font-semibold text-lg mb-4">Featured Kenyan Cinema</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/movie/click-click-bang" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
              Click Click Bang
            </Link>
            <Link href="/movie/kampuni" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
              Kampuni
            </Link>
            <Link
              href="/movie/nairobi-half-life"
              className="text-gray-400 hover:text-red-600 transition-colors text-sm"
            >
              Nairobi Half Life
            </Link>
            <Link href="/movie/rafiki" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
              Rafiki
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Help Center
            </Link>
          </div>
          <div className="text-sm text-gray-400">© 2024 KenyaFlix. All rights reserved. Made with ❤️ in Kenya.</div>
        </div>

        {/* Kenyan Flag Colors Accent */}
        <div className="mt-8 h-1 bg-gradient-to-r from-black via-red-600 via-green-600 to-white rounded-full opacity-60"></div>
      </div>
    </footer>
  )
}
