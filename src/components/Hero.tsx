import { motion } from 'framer-motion'

export default function Hero() {
  const titleWords = [
    { text: "CARLOTA VAQUER RODEMANN", color: "text-black" },
    { text: "is a", color: "text-gray-500" },
    { text: "DESIGNER", color: "text-black" },
    { text: "for", color: "text-gray-500" },
    { text: "WEBSITES", color: "text-black" },
    { text: "and", color: "text-gray-500" },
    { text: "DIGITAL PRODUCTS", color: "text-black" }
  ]

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-4xl">
        <motion.h1 
          className="text-4xl lg:text-6xl font-bold leading-tight mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {titleWords.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`${word.color} inline-block mr-3`}
            >
              {word.text}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-lg text-gray-600 max-w-2xl leading-relaxed"
        >
          With 5+ years of professional experience in designing and developing 
          interfaces, I combine visual and interactive design to create digital 
          experiences that seamlessly balance aesthetics and functionality.
        </motion.p>
      </div>    </section>
  )
}
