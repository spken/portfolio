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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-2xl font-bold mb-12"
      >
        Contact
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-6">Find me</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            I'm passionate about collaborating with creative minds and bringing
            ideas to life through thoughtful design. Whether you're a brand
            looking for a fresh visual identity, a publication in need of
            compelling layouts, or simply someone who shares a love for good
            design, I'd love to connect.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            Currently studying Design at Universidad Europea in Madrid since
            September 2024. I'm actively seeking opportunities to contribute to
            meaningful projects while continuing to grow as a designer.
            Available for freelance projects, internships, and collaborative
            opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold mb-6">Connect</h3>
          <div className="space-y-4 mb-12">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.4 + index * 0.1,
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors group"
              >
                <span>{link.label}</span>
                <link.icon
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h4 className="text-base font-semibold mb-3">Let's collaborate</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              I'm always excited about new creative challenges and learning
              opportunities. Whether you have a project idea, internship
              opportunity, or just want to connect with a fellow design
              enthusiast, I'd love to hear from you!
            </p>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg"
          >
            <Mail size={24} className="text-gray-500 mb-4" />
            <h3 className="text-base font-semibold mb-2">Email</h3>
            <a
              href="mailto:carlotastar@icloud.com"
              className="hover:text-black transition-colors text-sm"
            >
              carlotastar@icloud.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg"
          >
            <MapPin size={24} className="text-gray-500 mb-4" />
            <h3 className="text-base font-semibold mb-2">Location</h3>
            <p className="text-sm">Madrid, ES</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg"
          >
            <GraduationCap size={24} className="text-gray-500 mb-4" />
            <h3 className="text-base font-semibold mb-2">Education</h3>
            <p className="text-sm">Design Student</p>
            <p className="text-xs text-gray-500 mt-1">
              Universidad Europea, Madrid
            </p>
            <p className="text-xs text-gray-500">Since Sept 2024</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
