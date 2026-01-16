'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Navbar from '../../Component/Navbar/page'
import Footer from '../../Component/Footer/page'

export default function ItemDetails() {
  const params = useParams()
  const router = useRouter()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/items.json')
      .then(response => response.json())
      .then(data => {
        const foundItem = data.find(i => i.id === parseInt(params.id))
        setItem(foundItem)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching item:', error)
        setLoading(false)
      })
  }, [params.id])

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center min-h-screen">
          <p className="text-xl text-gray-600">Loading property details...</p>
        </div>
        <Footer />
      </>
    )
  }

  if (!item) {
    return (
      <div className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center min-h-screen">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Property Not Found</h1>
          <button 
            onClick={() => router.push('/items')}
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Back to Properties
          </button>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
      <Navbar />
      <section className="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
        <div className="container mx-auto px-4">
          <button 
            onClick={() => router.back()}
            className="mb-6 text-primary hover:underline flex items-center"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Properties
          </button>

          <div className="bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden transition-colors duration-300 border border-transparent dark:border-gray-800">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative h-96 lg:h-full bg-gray-300 dark:bg-gray-700">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect width="800" height="600" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="32" fill="%239ca3af"%3EProperty Image%3C/text%3E%3C/svg%3E'
                  }}
                />
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">{item.name}</h1>
                  <div className="text-3xl font-bold text-primary">{item.price}</div>
                </div>

                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Description</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                </div>

                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Property Details</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-transparent dark:border-gray-800">
                      <i className="fas fa-bed text-primary text-2xl"></i>
                      <div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Bedrooms</div>
                        <div className="font-bold text-gray-800 dark:text-white">{item.bedrooms}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-transparent dark:border-gray-800">
                      <i className="fas fa-bath text-primary text-2xl"></i>
                      <div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Bathrooms</div>
                        <div className="font-bold text-gray-800 dark:text-white">{item.bathrooms}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-transparent dark:border-gray-800">
                      <i className="fas fa-ruler-combined text-primary text-2xl"></i>
                      <div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Area</div>
                        <div className="font-bold text-gray-800 dark:text-white">{item.area}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-transparent dark:border-gray-800">
                      <i className="fas fa-hashtag text-primary text-2xl"></i>
                      <div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Property ID</div>
                        <div className="font-bold text-gray-800 dark:text-white">#{item.id}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold">
                    <i className="fas fa-phone mr-2"></i>
                    Contact Agent
                  </button>
                  <button className="w-full bg-secondary text-white py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300 font-semibold">
                    <i className="fas fa-calendar mr-2"></i>
                    Schedule Viewing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
