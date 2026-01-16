export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Properties', href: '/items' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ]

  const propertyTypes = [
    { name: 'Apartments', href: '/items' },
    { name: 'Villas', href: '/items' },
    { name: 'Houses', href: '/items' },
    { name: 'Condos', href: '/items' }
  ]

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary p-2 rounded-md">
                <i className="fas fa-home text-white text-xl"></i>
              </div>
              <span className="text-2xl font-bold">
                Prime<span className="text-secondary">Properties</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Your trusted partner in finding the perfect property. We've been helping families find their dream homes since 1998.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 mb-2">
              <i className="fas fa-phone text-primary"></i>
              <a href="tel:01863483503" className="hover:text-white transition-colors">
                01863483503
              </a>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <i className="fas fa-envelope text-primary"></i>
              <a href="mailto:info@primeproperties.com" className="hover:text-white transition-colors">
                info@primeproperties.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform"></i>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Property Types</h3>
            <ul className="space-y-3">
              {propertyTypes.map((type, index) => (
                <li key={index}>
                  <a 
                    href={type.href} 
                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform"></i>
                    {type.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get the latest property updates and news.
            </p>
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email"
                className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} PrimeProperties. All rights reserved.</p>
            </div>

            <div className="flex space-x-6 text-gray-400 text-sm">
              <a href="/contact" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="/contact" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
