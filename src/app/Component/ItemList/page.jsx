'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ItemList() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/items.json')
      .then(response => response.json())
      .then(data => {
        // Show only first 3 items on home page
        setItems(data.slice(0, 3))
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching items:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-xl text-gray-600">Loading properties...</p>
      </div>
    )
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Featured Properties</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Discover your dream home from our exclusive collection</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map(item => (
            <div key={item.id} className="bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-transparent dark:border-gray-800">
              <div className="relative h-64 bg-gray-300 dark:bg-gray-700">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%239ca3af"%3EProperty Image%3C/text%3E%3C/svg%3E'
                  }}
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-bold">
                  {item.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{item.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
                
                <div className="flex justify-between items-center text-gray-700 dark:text-gray-300 mb-4">
                  <div className="flex items-center space-x-1">
                    <i className="fas fa-bed"></i>
                    <span>{item.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <i className="fas fa-bath"></i>
                    <span>{item.bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <i className="fas fa-ruler-combined"></i>
                    <span>{item.area}</span>
                  </div>
                </div>
                
                <Link href={`/items/${item.id}`}>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/items">
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold">
              View All Properties
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
