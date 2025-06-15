import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, ExternalLink } from 'lucide-react'

export default function Contact() {
  const socialLinks = [
    { label: 'LinkedIn', href: '#', icon: ExternalLink },
    { label: 'Twitter', href: '#', icon: ExternalLink },
    { label: 'Instagram', href: '#', icon: ExternalLink },
    { label: 'Dribbble', href: '#', icon: ExternalLink },
    { label: 'Behance', href: '#', icon: ExternalLink },
    { label: 'GitHub', href: '#', icon: ExternalLink }
  ]

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-12"
    >
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold mb-12"
      >
        Contact
      </motion.h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Interested in working together?
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Let's get in touch!
          </p>
          
          <div className="space-y-6 text-gray-700">
            <div className="flex items-center space-x-3">
              <Mail size={20} className="text-gray-500" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a 
                  href="mailto:hello@yourname.com" 
                  className="hover:text-black transition-colors"
                >
                  hello@yourname.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <MapPin size={20} className="text-gray-500" />
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p>New York, NY</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Clock size={20} className="text-gray-500" />
              <div>
                <h3 className="font-semibold mb-1">Availability</h3>
                <p>Open for new projects</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold mb-6">Connect</h3>
          <div className="space-y-4 mb-12">
            {socialLinks.map((link, index) => (
              <motion.a 
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors group"
              >
                <span>{link.label}</span>
                <link.icon size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="p-6 bg-gray-50 rounded-lg"
          >
            <h4 className="font-semibold mb-3">Let's work together</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              I'm always interested in new opportunities and collaborations. 
              Whether you need help with a specific project or want to discuss 
              a long-term partnership, feel free to reach out.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
