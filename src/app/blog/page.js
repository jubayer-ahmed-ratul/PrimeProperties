'use client'

import Navbar from '../Component/Navbar/page'
import Footer from '../Component/Footer/page'
import Link from 'next/link'

export default function BlogPage() {
  const blogs = [
    {
      id: 1,
      title: '10 Tips for First-Time Home Buyers',
      excerpt: 'Buying your first home can be overwhelming. Here are essential tips to help you navigate the process smoothly and make informed decisions.',
      date: 'January 10, 2026',
      author: 'Sarah Johnson',
      category: 'Home Buying',
      image: '/blog-1.jpg',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Real Estate Investment Strategies for 2026',
      excerpt: 'Discover the most effective real estate investment strategies for the current market. Learn how to maximize returns and minimize risks.',
      date: 'January 8, 2026',
      author: 'Michael Chen',
      category: 'Investment',
      image: '/blog-2.jpg',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'How to Increase Your Property Value',
      excerpt: 'Simple renovations and improvements that can significantly boost your property value. Get expert advice on what works best.',
      date: 'January 5, 2026',
      author: 'Emily Rodriguez',
      category: 'Property Tips',
      image: '/blog-3.jpg',
      readTime: '6 min read'
    }
  ]

  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
      <Navbar />
      <section className="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">Our Blog</h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Stay updated with the latest real estate news, tips, and insights from our experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map(blog => (
              <article key={blog.id} className="bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-transparent dark:border-gray-800">
                <div className="relative h-48 bg-gray-300 dark:bg-gray-700">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%239ca3af"%3EBlog Image%3C/text%3E%3C/svg%3E'
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {blog.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <i className="far fa-calendar mr-2"></i>
                    <span>{blog.date}</span>
                    <span className="mx-2">•</span>
                    <i className="far fa-clock mr-2"></i>
                    <span>{blog.readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 hover:text-primary transition-colors">
                    {blog.title}
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3">
                        {blog.author.charAt(0)}
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                        {blog.author}
                      </span>
                    </div>
                    
                    <button className="text-primary hover:text-blue-700 font-semibold flex items-center">
                      Read More
                      <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white dark:bg-black rounded-lg shadow-lg p-8 max-w-2xl mx-auto border border-transparent dark:border-gray-800">
              <i className="fas fa-envelope text-primary text-4xl mb-4"></i>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Get the latest real estate tips and market insights delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
