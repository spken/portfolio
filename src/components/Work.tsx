import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
    {
        id: 1,
        title: "Brand Identity for Local Cafe",
        description: "Complete visual identity including logo, packaging, and signage design",
        tags: ["Branding", "Logo Design", "Packaging", "Adobe Illustrator"],
        link: "#",
        image: "https://images.unsplash.com/photo-1559526324-c1f275fbfa32?w=400&h=300&fit=crop"
    },
    {
        id: 2,
        title: "Editorial Design Project",
        description: "Magazine layout design exploring typography and visual hierarchy",
        tags: ["Editorial", "Typography", "InDesign", "Layout"],
        link: "#",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    },
    {
        id: 3,
        title: "Social Impact Poster Series",
        description: "Awareness campaign addressing environmental sustainability",
        tags: ["Poster Design", "Social Impact", "Photoshop", "Print"],
        link: "#",
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop"
    },
    {
        id: 4,
        title: "Exhibition Design Concept",
        description: "Spatial design and wayfinding system for art gallery exhibition",
        tags: ["Exhibition Design", "Wayfinding", "3D Visualization"],
        link: "#",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
    },
    {
        id: 5,
        title: "Illustration Series",
        description: "Digital illustrations exploring contemporary themes and storytelling",
        tags: ["Illustration", "Digital Art", "Procreate", "Storytelling"],
        link: "#",
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop"
    },
    {
        id: 6,
        title: "Experimental Typography",
        description: "Exploration of letterforms and typographic expression",
        tags: ["Typography", "Experimental", "Hand Lettering", "Design Research"],
        link: "#",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop"
    }
]

export default function Work() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="py-12"
        >            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
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
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ 
                            delay: index * 0.1, 
                            duration: 0.6,
                            ease: [0.25, 0.46, 0.45, 0.94]
                        }}
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
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="mt-16 p-8 bg-gray-50 rounded-lg"
            >
                <h3 className="text-xl font-semibold mb-4">Academic Projects & Collaborations</h3>
                <div className="flex flex-wrap gap-4 text-gray-600">
                    <span>University Design Department</span>
                    <span>•</span>
                    <span>Local Art Gallery</span>
                    <span>•</span>
                    <span>Student Design Collective</span>
                    <span>•</span>
                    <span>Community Arts Center</span>
                    <span>•</span>
                    <span>Design Competition Winner</span>
                    <span>•</span>
                    <span>Freelance Projects</span>
                </div>
            </motion.div>
        </motion.section>
    )
}
