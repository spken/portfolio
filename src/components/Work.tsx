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
      {" "}
      <motion.section
        id="work"
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
              Selected Work
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A curated collection of design projects showcasing creative
              problem-solving and visual storytelling
            </p>
          </motion.div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openModal(project)}
                whileHover={{ y: -8 }}
              >
                <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-xl bg-gray-100 shadow-md group-hover:shadow-xl transition-all duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <svg
                      className="w-4 h-4 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold group-hover:text-gray-600 transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors duration-200 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>{" "}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mt-20 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl"></div>
            <div className="relative p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full"></div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Academic Journey & Aspirations
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-600">
                <div className="flex items-center gap-3 p-4 bg-white/70 rounded-xl backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="font-medium">
                    Universidad Europea Madrid
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/70 rounded-xl backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="font-medium">Design Student</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/70 rounded-xl backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="font-medium">Class of 2028</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/70 rounded-xl backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="font-medium">Seeking Internships</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/70 rounded-xl backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="font-medium">Available for Freelance</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/70 rounded-xl backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="font-medium">Creative Collaborations</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
