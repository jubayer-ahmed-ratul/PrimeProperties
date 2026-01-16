'use client'

import Navbar from '../Component/Navbar/Page'
import Footer from '../Component/Footer/page'

export default function ContactPage() {
  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
      <Navbar />
      <section className="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">Contact Us</h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Get in touch with us for any inquiries about properties or our services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-black rounded-lg shadow-lg p-8 transition-colors duration-300 border border-transparent dark:border-gray-800">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <i className="fas fa-phone text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">Phone</h3>
                    <a href="tel:01863483503" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                      01863483503
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <i className="fas fa-envelope text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">Email</h3>
                    <a href="mailto:info@primeproperties.com" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                      info@primeproperties.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <i className="fas fa-map-marker-alt text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">Office Address</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      123 Real Estate Avenue<br />
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <i className="fas fa-clock text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">Business Hours</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Saturday - Thursday: 9:00 AM - 6:00 PM<br />
                      Friday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
                    <i className="fab fa-facebook-f text-xl"></i>
                  </a>
                  <a href="#" className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a href="#" className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                  <a href="#" className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
                    <i className="fab fa-linkedin-in text-xl"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-black rounded-lg shadow-lg p-8 transition-colors duration-300 border border-transparent dark:border-gray-800">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Why Choose Us?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                    <i className="fas fa-award text-primary text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">25+ Years Experience</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Trusted expertise in the real estate industry since 1998
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 dark:bg-orange-900 p-3 rounded-lg">
                    <i className="fas fa-users text-secondary text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Professional Team</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Certified agents dedicated to finding your perfect property
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                    <i className="fas fa-handshake text-green-600 dark:text-green-400 text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Customer Satisfaction</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      98% client satisfaction rate with personalized service
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                    <i className="fas fa-home text-purple-600 dark:text-purple-400 text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">500+ Properties</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Wide selection of residential and commercial properties
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary rounded-lg text-white">
                <h3 className="text-xl font-bold mb-2">Ready to Get Started?</h3>
                <p className="mb-4 opacity-90">
                  Call us now or visit our office to discuss your property needs
                </p>
                <a href="tel:01863483503" className="inline-block bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  <i className="fas fa-phone mr-2"></i>
                  Call Now
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden transition-colors duration-300 border border-transparent dark:border-gray-800">
            <div className="h-96 bg-gray-300 dark:bg-gray-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38703692693!2d90.25446309999999!3d23.780573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale dark:brightness-75"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
