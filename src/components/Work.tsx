import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with seamless user experience",
    tags: ["React", "TypeScript", "Node.js", "MongoDB"],
    link: "#",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Brand Identity System",
    description: "Complete visual identity design for tech startup",
    tags: ["Branding", "UI/UX", "Figma"],
    link: "#",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Mobile App Design",
    description: "iOS and Android app design for productivity platform",
    tags: ["Mobile", "UI/UX", "Prototyping"],
    link: "#",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Corporate Website",
    description: "Responsive website design for consulting firm",
    tags: ["Web Design", "CMS", "SEO"],
    link: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    title: "SaaS Dashboard",
    description: "Data visualization dashboard for analytics platform",
    tags: ["Dashboard", "Data Viz", "React"],
    link: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "Personal portfolio for creative professional",
    tags: ["Portfolio", "Creative", "Animation"],
    link: "#",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop"
  }
]

export default function Work() {
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
        Work
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id} 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group cursor-pointer"
          >
            <div className="bg-gray-100 aspect-[4/3] rounded-lg mb-4 overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-gray-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm mb-3 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-16 p-8 bg-gray-50 rounded-lg"
      >
        <h3 className="text-xl font-semibold mb-4">Selected Clients</h3>
        <div className="flex flex-wrap gap-4 text-gray-600">
          <span>Microsoft</span>
          <span>•</span>
          <span>Adobe</span>
          <span>•</span>
          <span>Shopify</span>
          <span>•</span>
          <span>Airbnb</span>
          <span>•</span>
          <span>Stripe</span>
          <span>•</span>
          <span>Figma</span>
          <span>•</span>
          <span>Notion</span>
          <span>•</span>
          <span>Webflow</span>
        </div>
      </motion.div>
    </motion.section>
  )
}
