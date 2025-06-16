import { motion } from "framer-motion";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    id: 1,
    title: "Brand Identity for Local Cafe",
    description:
      "Complete visual identity including logo, packaging, and signage design",
    tags: ["Branding", "Logo Design", "Packaging", "Adobe Illustrator"],
    link: "#",
    image:
      "https://images.unsplash.com/photo-1559526324-c1f275fbfa32?w=400&h=300&fit=crop",
    slides: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1559526324-c1f275fbfa32?w=800&h=600&fit=crop",
        title: "Brand Overview",
        description:
          "Initial concept and brand strategy for the local cafe project",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop",
        title: "Logo Development",
        description: "Logo design process and iterations",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        title: "Packaging Design",
        description: "Complete packaging system for coffee products",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        title: "Signage Implementation",
        description: "Storefront and interior signage design",
      },
    ],
  },
  {
    id: 2,
    title: "Editorial Design Project",
    description:
      "Magazine layout design exploring typography and visual hierarchy",
    tags: ["Editorial", "Typography", "InDesign", "Layout"],
    link: "#",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    slides: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        title: "Magazine Cover Design",
        description: "Cover concepts and typography exploration",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
        title: "Editorial Layouts",
        description: "Interior page layouts and grid systems",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop",
        title: "Typography System",
        description: "Font selection and hierarchy development",
      },
    ],
  },
  {
    id: 3,
    title: "Social Impact Poster Series",
    description: "Awareness campaign addressing environmental sustainability",
    tags: ["Poster Design", "Social Impact", "Photoshop", "Print"],
    link: "#",
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
    slides: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
        title: "Campaign Concept",
        description: "Environmental awareness poster series concept",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
        title: "Visual Development",
        description: "Color palette and visual style exploration",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1569163139394-de44ede62a27?w=800&h=600&fit=crop",
        title: "Final Poster Designs",
        description: "Complete poster series for print and digital use",
      },
    ],
  },
  {
    id: 4,
    title: "Exhibition Design Concept",
    description:
      "Spatial design and wayfinding system for art gallery exhibition",
    tags: ["Exhibition Design", "Wayfinding", "3D Visualization"],
    link: "#",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    slides: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        title: "Exhibition Layout",
        description: "Spatial planning and visitor flow design",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        title: "Wayfinding System",
        description: "Signage and navigation design for the gallery",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
        title: "3D Visualization",
        description: "Virtual walkthrough and spatial rendering",
      },
    ],
  },
  {
    id: 5,
    title: "Illustration Series",
    description:
      "Digital illustrations exploring contemporary themes and storytelling",
    tags: ["Illustration", "Digital Art", "Procreate", "Storytelling"],
    link: "#",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
    slides: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
        title: "Character Studies",
        description: "Digital character illustrations and concept development",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        title: "Storytelling Elements",
        description:
          "Narrative illustration and visual storytelling techniques",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop",
        title: "Final Illustrations",
        description: "Completed illustration series with contemporary themes",
      },
    ],
  },
  {
    id: 6,
    title: "Wood Design Exploration",
    description:
      "Handcrafted wooden objects exploring form, function, and texture",
    tags: ["Wood Design", "Craftsmanship", "3D Design", "Sustainable"],
    link: "#",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    slides: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
        title: "Material Studies",
        description: "Wood selection and material properties exploration",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&h=600&fit=crop",
        title: "Design Process",
        description: "Sketching, prototyping, and iterative design development",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        title: "Final Pieces",
        description: "Completed wooden design objects and their applications",
      },
    ],
  },
];

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <motion.section
        id="work"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen py-20 px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold mb-12"
        >
          Selected Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center"></div>
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
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 bg-gray-50 rounded-lg"
        >
          <h3 className="text-lg font-semibold mb-4">
            Academic Journey & Aspirations
          </h3>
          <div className="flex flex-wrap gap-4 text-gray-600">
            <span>Universidad Europea Madrid</span>
            <span>•</span>
            <span>Design Student</span>
            <span>•</span>
            <span>Class of 2028</span>
            <span>•</span>
            <span>Seeking Internships</span>
            <span>•</span>
            <span>Available for Freelance</span>
            <span>•</span>
            <span>Creative Collaborations</span>
          </div>
        </motion.div>
      </motion.section>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
