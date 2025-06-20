import React, { useState } from 'react'
import { Menu, X, BookOpen } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Internships', href: '#internships' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <header className="bg-black/30 backdrop-blur-sm shadow-sm fixed w-full top-0 z-50">
      <nav
        className="w-full"
        style={{
          paddingLeft: '60px',
          paddingRight: '60px'
        }}
      >
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-500">ZiyaAcademy</h1>
              <p className="text-sm text-green-500">KEY TO SUCCESS</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-blue-400 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <button className="bg-primary-500 hover:bg-primary-600 text-white text-sm px-4 py-2 rounded-md">
              Join Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-400"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1 bg-black/50 border-t border-white/10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-white hover:text-blue-400 font-medium"
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full mt-4 bg-primary-500 hover:bg-primary-600 text-white text-sm px-4 py-2 rounded-md">
                Join Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
