import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
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
            About Me
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A passionate design student exploring the intersection of traditional craftsmanship and digital innovation
          </p>
        </motion.div>        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl"></div>
            <div className="relative p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full"></div>
                <h3 className="text-xl font-semibold text-gray-900">Passion</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                My passion for design started with sketching and painting as a
                child, evolving into a deep appreciation for both traditional and
                digital art forms. Currently pursuing my Bachelor's degree in Design
                at Universidad Europea in Madrid since September 2024, I'm
                fascinated by the intersection of natural materials like wood and
                digital mediums, constantly exploring how tactile craftsmanship can
                merge with contemporary digital design.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Through my studies at Universidad Europea, I've been developing
                skills that bridge traditional art practices with modern design
                principles. From wood design and sculpture to digital illustration
                and painting, I believe in the power of working across mediums to
                create authentic, meaningful design solutions that connect people
                with both nature and technology.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl"></div>
            <div className="relative p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                <h3 className="text-xl font-semibold text-gray-900">Creative Interests</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Wood Design & Craftsmanship",
                  "Digital Drawing & Illustration", 
                  "Traditional Painting Techniques",
                  "Mixed Media Art",
                  "Sustainable Design Materials",
                  "Handmade & Digital Fusion",
                  "Natural Texture Studies",
                  "Contemporary Art Practices"
                ].map((interest, index) => (
                  <motion.div
                    key={interest}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-2 p-3 bg-white/70 rounded-xl backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-blue-400 transition-colors duration-200"></div>
                    <span className="text-sm font-medium text-gray-700">{interest}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl"></div>
            <div className="relative p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-gradient-to-r from-green-600 to-green-400 rounded-full"></div>
                <h3 className="text-xl font-semibold text-gray-900">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-white/70 rounded-xl backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h4 className="text-base font-semibold text-gray-900 mb-2">
                    Bachelor's Degree in Design
                  </h4>
                  <p className="text-gray-600 text-sm mb-1">
                    Universidad Europea, Madrid • September 2024 - Present
                  </p>
                  <p className="text-gray-500 text-xs">
                    Specializing in visual communication and contemporary design practices
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl"></div>
            <div className="relative p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"></div>
                <h3 className="text-xl font-semibold text-gray-900">Current Focus</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-white/70 rounded-xl backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h4 className="text-base font-semibold text-gray-900 mb-2">Design Student</h4>
                  <p className="text-gray-600 text-sm mb-1">
                    Universidad Europea, Madrid • September 2024 - Present
                  </p>
                  <p className="text-gray-500 text-xs">
                    Exploring the intersection of traditional crafts, digital art, and contemporary design
                  </p>
                </div>
                <div className="p-4 bg-white/70 rounded-xl backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h4 className="text-base font-semibold text-gray-900 mb-2">Artistic Practice</h4>
                  <p className="text-gray-600 text-sm mb-1">
                    Wood Design, Digital Drawing & Painting • Ongoing
                  </p>
                  <p className="text-gray-500 text-xs">
                    Developing a personal style that bridges tactile and digital mediums
                  </p>
                </div>
                <div className="p-4 bg-white/70 rounded-xl backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h4 className="text-base font-semibold text-gray-900 mb-2">Seeking Opportunities</h4>
                  <p className="text-gray-600 text-sm mb-1">
                    Internships & Creative Collaborations • Available
                  </p>
                  <p className="text-gray-500 text-xs">
                    Looking for projects involving sustainable materials and innovative design approaches
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl"></div>
            <div className="relative p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full"></div>
                <h3 className="text-xl font-semibold text-gray-900">Goals & Aspirations</h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Mastering traditional wood crafting techniques",
                  "Advancing digital drawing and painting skills",
                  "Exploring sustainable design and natural materials",
                  "Creating art that bridges analog and digital worlds",
                  "Contributing to eco-conscious creative projects",
                  "Developing a unique artistic voice and style"
                ].map((goal, index) => (
                  <motion.div
                    key={goal}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-3 p-3 bg-white/70 rounded-xl backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="w-2 h-2 bg-orange-400 rounded-full group-hover:bg-orange-500 transition-colors duration-200"></div>
                    <span className="text-sm font-medium text-gray-700">{goal}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
