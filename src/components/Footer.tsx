import { motion } from "framer-motion";
import { Linkedin, Mail, ExternalLink, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/carlota-vaquer-rodemann-290177352/",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/carlota.vaquer/",
      icon: Instagram,
    },
    {
      name: "Email",
      href: "mailto:carlotastar@icloud.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto py-8 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-start">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="text-lg font-medium text-black mb-2"
            >
              Interested? I'm right here!
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-sm text-gray-500 font-mono"
            >
              Always open to new opportunities and conversations.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-150 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <link.icon size={16} />
                <span className="text-sm font-mono">{link.name}</span>{" "}
                <ExternalLink
                  size={12}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 pt-6 border-t border-gray-100 text-center"
        >
          <p className="text-xs text-gray-400 font-mono">
            © {currentYear} Carlota Vaquer Rodemann. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
