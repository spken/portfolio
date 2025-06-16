import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header, Hero, Work, About, Contact } from "./components";

function App() {
  const [activeSection, setActiveSection] = useState("work");

  const renderSection = () => {
    switch (activeSection) {
      case "work":
        return <Work />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Work />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="container mx-auto px-6 py-8 max-w-6xl">
        <Hero />
        <AnimatePresence>
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
