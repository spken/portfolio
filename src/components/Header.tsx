import { motion } from "framer-motion";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({
  activeSection,
  setActiveSection,
}: HeaderProps) {
  const navigationItems = [
    { id: "work", label: "WORK" },
    { id: "about", label: "ABOUT" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="border-b border-gray-200 bg-white sticky top-0 z-50 backdrop-blur-sm bg-white/95"
    >
      <div className="container mx-auto px-6 py-4 max-w-6xl">
        <div className="flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold tracking-tight cursor-pointer"
            onClick={() => setActiveSection("work")}
          >
            CARLOTA VAQUER RODEMANN
          </motion.h1>
          <nav className="flex space-x-8">
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                onClick={() => setActiveSection(item.id)}
                className={`text-sm font-bold transition-all duration-200 hover:text-gray-600 relative ${
                  activeSection === item.id ? "text-black" : "text-gray-500"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-4 left-0 right-0 h-0.5 bg-black"
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
