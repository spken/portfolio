import { motion } from 'framer-motion'

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
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold mb-12"
      >
        About
      </motion.h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="text-gray-700 leading-relaxed mb-8">
            From drawing comics as a child to creating digital experiences, my journey into 
            design began early. At the age of 16, I got into website creation, and soon after, 
            began building sites for local businesses. As my interest in interfaces grew, it 
            naturally expanded into digital products and applications of all kinds.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-8">
            A strong fascination with typography and user experience led me to pursue studies 
            in design, where I funded my education through commissioned development work. 
            Over the years, I've worked with a diverse range of clients, from early-stage 
            startups to global brands.
          </p>

          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Digital Art Direction</li>
              <li>• Website Design</li>
              <li>• Digital Product & App Design</li>
              <li>• UI & Interaction Design</li>
              <li>• Wireframing & Prototyping</li>
              <li>• Frontend Development</li>
              <li>• Design Consulting</li>
              <li>• Workshops & Mentoring</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-6">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Design Institute</h4>
                <p className="text-gray-600 text-sm">Master of Arts, Digital Design</p>
              </div>
              <div>
                <h4 className="font-medium">University of Design</h4>
                <p className="text-gray-600 text-sm">Bachelor of Arts, Communication Design</p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-6">Experience</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Senior Designer</h4>
                <p className="text-gray-600 text-sm">Design Agency • 2020 - Present</p>
              </div>
              <div>
                <h4 className="font-medium">Product Designer</h4>
                <p className="text-gray-600 text-sm">Tech Startup • 2018 - 2020</p>
              </div>
              <div>
                <h4 className="font-medium">Freelance Designer</h4>
                <p className="text-gray-600 text-sm">Independent • 2016 - 2018</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Features & Recognition</h3>
            <div className="space-y-2 text-gray-700">
              <p>• Featured in Design Magazine</p>
              <p>• Awwwards Site of the Day</p>
              <p>• CSS Design Awards</p>
              <p>• Dribbble Top Shot</p>
              <p>• Behance Featured Project</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
