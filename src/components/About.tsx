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
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold mb-12"
      >
        About
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-700 leading-relaxed mb-8">
            My passion for design started with sketching and drawing as a child,
            evolving into a deep appreciation for visual communication and
            problem-solving. Currently pursuing my degree in Design, I'm
            constantly exploring new ways to merge creativity with functionality
            across various mediums and disciplines.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            Through my studies, I've developed a strong foundation in design
            principles while exploring diverse areas from brand identity to
            editorial design. I believe great design has the power to
            communicate, inspire, and create meaningful connections between
            people and ideas.
          </p>

          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-6">Design Interests</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Brand Identity & Logo Design</li>
              <li>• Editorial & Publication Design</li>
              <li>• Typography & Lettering</li>
              <li>• Poster & Print Design</li>
              <li>• Illustration & Digital Art</li>
              <li>• Exhibition & Spatial Design</li>
              <li>• Social Impact Design</li>
              <li>• Design Research & Theory</li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-6">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Bachelor of Arts in Design</h4>
                <p className="text-gray-600 text-sm">
                  University • 2022 - Present
                </p>
              </div>
              <div>
                <h4 className="font-medium">Foundation in Art & Design</h4>
                <p className="text-gray-600 text-sm">
                  Art School • 2021 - 2022
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-6">Experience</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Design Intern</h4>
                <p className="text-gray-600 text-sm">
                  Local Design Studio • Summer 2024
                </p>
              </div>
              <div>
                <h4 className="font-medium">Freelance Designer</h4>
                <p className="text-gray-600 text-sm">
                  Small Business Projects • 2023 - Present
                </p>
              </div>
              <div>
                <h4 className="font-medium">Teaching Assistant</h4>
                <p className="text-gray-600 text-sm">
                  University Design Department • 2024
                </p>
              </div>
            </div>
          </div>{" "}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Achievements & Recognition
            </h3>
            <div className="space-y-2 text-gray-700">
              <p>• Dean's List Student</p>
              <p>• University Design Competition Winner</p>
              <p>• Student Exhibition Participant</p>
              <p>• Design Society Member</p>
              <p>• Community Arts Award Recipient</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
