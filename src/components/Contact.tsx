import { motion } from "framer-motion";
import { Mail, MapPin, ExternalLink, GraduationCap } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/carlota-vaquer-rodemann-290177352/",
      icon: ExternalLink,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/carlota.vaquer/",
      icon: ExternalLink,
    },
    {
      label: "Pinterest",
      href: "https://es.pinterest.com/Carlotavaquer/",
      icon: ExternalLink,
    },
  ];

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-20 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to collaborate on meaningful projects and explore creative opportunities together
          </p>
        </motion.div>        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl"></div>
            <div className="relative p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                <h3 className="text-xl font-semibold text-gray-900">Let's Work Together</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                I'm passionate about collaborating with creative minds and bringing
                ideas to life through thoughtful design. Whether you're a brand
                looking for a fresh visual identity, a publication in need of
                compelling layouts, or simply someone who shares a love for good
                design, I'd love to connect.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Currently studying Design at Universidad Europea in Madrid since
                September 2024. I'm actively seeking opportunities to contribute to
                meaningful projects while continuing to grow as a designer.
                Available for freelance projects, internships, and collaborative
                opportunities.
              </p>
            </div>
          </div>
        </motion.div>        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl"></div>
            <div className="relative p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"></div>
                <h3 className="text-xl font-semibold text-gray-900">Connect With Me</h3>
              </div>
              <div className="space-y-4 mb-8">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      delay: 0.1 + index * 0.1,
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="flex items-center justify-between p-4 bg-white/70 rounded-xl backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200 group"
                    whileHover={{ x: 4 }}
                  >
                    <span className="font-medium text-gray-900">{link.label}</span>
                    <link.icon
                      size={16}
                      className="text-gray-600 group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-200"
                    />
                  </motion.a>
                ))}
              </div>              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="p-4 bg-white/70 rounded-xl backdrop-blur-sm shadow-sm"
              >
                <h4 className="text-base font-semibold text-gray-900 mb-3">Let's Collaborate</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  I'm always excited about new creative challenges and learning
                  opportunities. Whether you have a project idea, internship
                  opportunity, or just want to connect with a fellow design
                  enthusiast, I'd love to hear from you!
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
        </div>        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl"></div>
          <div className="relative p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 bg-gradient-to-r from-green-600 to-green-400 rounded-full"></div>
              <h3 className="text-xl font-semibold text-gray-900">Get In Touch</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex flex-col items-center text-center p-6 bg-white/70 rounded-xl backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                  <Mail size={20} className="text-blue-600" />
                </div>
                <h4 className="text-base font-semibold text-gray-900 mb-2">Email</h4>
                <a
                  href="mailto:carlotastar@icloud.com"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                >
                  carlotastar@icloud.com
                </a>
              </motion.div>              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex flex-col items-center text-center p-6 bg-white/70 rounded-xl backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                  <MapPin size={20} className="text-green-600" />
                </div>
                <h4 className="text-base font-semibold text-gray-900 mb-2">Location</h4>
                <p className="text-gray-600 text-sm font-medium">Madrid, Spain</p>
              </motion.div>              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex flex-col items-center text-center p-6 bg-white/70 rounded-xl backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                  <GraduationCap size={20} className="text-purple-600" />
                </div>
                <h4 className="text-base font-semibold text-gray-900 mb-2">Education</h4>
                <p className="text-gray-600 text-sm font-medium mb-1">Design Student</p>
                <p className="text-xs text-gray-500">Universidad Europea, Madrid</p>
                <p className="text-xs text-gray-500">Since Sept 2024</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
