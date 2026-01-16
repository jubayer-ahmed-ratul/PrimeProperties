'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = () => {
      const authCookie = document.cookie.split('; ').find(row => row.startsWith('auth='))
      setIsLoggedIn(authCookie?.split('=')[1] === 'true')
    }
    
    checkAuth()
    // Check auth status periodically
    const interval = setInterval(checkAuth, 1000)
    return () => clearInterval(interval)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleLogout = () => {
    // Clear auth cookies
    document.cookie = 'auth=; path=/; max-age=0'
    document.cookie = 'userEmail=; path=/; max-age=0'
    setIsLoggedIn(false)
    router.push('/')
  }

  return (
    <nav className="navbar-shadow bg-white dark:bg-black sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-primary p-2 rounded-md">
              <i className="fas fa-home text-white text-xl"></i>
            </div>
            <span className="text-2xl font-bold text-primary">
              Prime<span className="text-secondary">Properties</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-primary font-medium transition-colors duration-300">Home</a>
            <a href="/items" className="text-gray-700 dark:text-gray-300 hover:text-primary font-medium transition-colors duration-300">Properties</a>
            <a href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-primary font-medium transition-colors duration-300">Blog</a>
            <a href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-primary font-medium transition-colors duration-300">Contact</a>
            {isLoggedIn ? (
              <button 
                onClick={handleLogout}
                className="bg-red-600 text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition-colors duration-300"
              >
                <i className="fas fa-sign-out-alt mr-2"></i>
                Logout
              </button>
            ) : (
              <a href="/login" className="btn-primary text-white px-6 py-2 rounded-md font-medium">Login</a>
            )}
          </div>

          <button onClick={toggleMobileMenu} className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none">
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        <div className={`mobile-menu md:hidden mt-2 ${mobileMenuOpen ? 'active' : ''}`}>
          <div className="flex flex-col space-y-3 py-4">
            <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-primary font-medium py-2 px-2 rounded hover:bg-blue-50 dark:hover:bg-gray-800">Home</a>
            <a href="/items" className="text-gray-700 dark:text-gray-300 hover:text-primary font-medium py-2 px-2 rounded hover:bg-blue-50 dark:hover:bg-gray-800">Properties</a>
            <a href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-primary font-medium py-2 px-2 rounded hover:bg-blue-50 dark:hover:bg-gray-800">Blog</a>
            <a href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-primary font-medium py-2 px-2 rounded hover:bg-blue-50 dark:hover:bg-gray-800">Contact</a>
            {isLoggedIn ? (
              <button 
                onClick={handleLogout}
                className="bg-red-600 text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition-colors duration-300 w-32"
              >
                <i className="fas fa-sign-out-alt mr-2"></i>
                Logout
              </button>
            ) : (
              <a href="/login" className="btn-primary text-white px-6 py-2 rounded-md font-medium w-32">Login</a>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
