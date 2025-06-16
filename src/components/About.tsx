import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold mb-12"
      >
        About
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold mb-6">Passion</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            My passion for design started with sketching and painting as a
            child, evolving into a deep appreciation for both traditional and
            digital art forms. Currently pursuing my Bachelor's degree in Design
            at Universidad Europea in Madrid since September 2024, I'm
            fascinated by the intersection of natural materials like wood and
            digital mediums, constantly exploring how tactile craftsmanship can
            merge with contemporary digital design.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            Through my studies at Universidad Europea, I've been developing
            skills that bridge traditional art practices with modern design
            principles. From wood design and sculpture to digital illustration
            and painting, I believe in the power of working across mediums to
            create authentic, meaningful design solutions that connect people
            with both nature and technology.
          </p>

          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-6">Creative Interests</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Wood Design & Craftsmanship</li>
              <li>• Digital Drawing & Illustration</li>
              <li>• Traditional Painting Techniques</li>
              <li>• Mixed Media Art</li>
              <li>• Sustainable Design Materials</li>
              <li>• Handmade & Digital Fusion</li>
              <li>• Natural Texture Studies</li>
              <li>• Contemporary Art Practices</li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-6">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-base font-medium">
                  Bachelor's Degree in Design
                </h4>
                <p className="text-gray-600 text-sm">
                  Universidad Europea, Madrid • September 2024 - Present
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Specializing in visual communication and contemporary design
                  practices
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-6">Current Focus</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-base font-medium">Design Student</h4>
                <p className="text-gray-600 text-sm">
                  Universidad Europea, Madrid • September 2024 - Present
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Exploring the intersection of traditional crafts, digital art,
                  and contemporary design
                </p>
              </div>
              <div>
                <h4 className="text-base font-medium">Artistic Practice</h4>
                <p className="text-gray-600 text-sm">
                  Wood Design, Digital Drawing & Painting • Ongoing
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Developing a personal style that bridges tactile and digital
                  mediums
                </p>
              </div>
              <div>
                <h4 className="text-base font-medium">Seeking Opportunities</h4>
                <p className="text-gray-600 text-sm">
                  Internships & Creative Collaborations • Available
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Looking for projects involving sustainable materials and
                  innovative design approaches
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Goals & Aspirations</h3>
            <div className="space-y-2 text-gray-700">
              <p>• Mastering traditional wood crafting techniques</p>
              <p>• Advancing digital drawing and painting skills</p>
              <p>• Exploring sustainable design and natural materials</p>
              <p>• Creating art that bridges analog and digital worlds</p>
              <p>• Contributing to eco-conscious creative projects</p>
              <p>• Developing a unique artistic voice and style</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
