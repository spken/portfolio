import { motion } from 'framer-motion'
import { useScrollAnimation, staggerContainer, fadeInUp } from '../hooks/useScrollAnimation'

export default function Hero() {
    const titleWords = [
        { text: "CARLOTA VAQUER RODEMANN", color: "text-black" },
        { text: "is a", color: "text-gray-500" },
        { text: "DESIGN STUDENT", color: "text-black" },
        { text: "passionate about", color: "text-gray-500" },
        { text: "WOOD WORK", color: "text-black" },
        { text: "and", color: "text-gray-500" },
        { text: "DIGITAL DESIGN", color: "text-black" }
    ]

    const { ref: titleRef, isInView: titleInView } = useScrollAnimation()
    const { ref: textRef, isInView: textInView } = useScrollAnimation()

    return (
        <section className="py-16 lg:py-24">
            <div className="max-w-4xl">
                <motion.div
                    ref={titleRef}
                    variants={staggerContainer}
                    initial="hidden"
                    animate={titleInView ? "visible" : "hidden"}
                >
                    <motion.h1
                        className="text-4xl lg:text-5xl font-bold leading-tight mb-8"
                        variants={fadeInUp}
                    >
                        {titleWords.map((word, index) => (
                            <motion.span
                                key={index}                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { 
                                        opacity: 1, 
                                        y: 0,
                                        transition: { 
                                            delay: index * 0.1, 
                                            duration: 0.5,
                                            ease: [0.25, 0.46, 0.45, 0.94] as const
                                        }
                                    }
                                }}
                                className={`${word.color} inline-block mr-3`}
                            >
                                {word.text}
                            </motion.span>
                        ))}
                    </motion.h1>
                </motion.div>
                
                <motion.p
                    ref={textRef}
                    variants={fadeInUp}
                    initial="hidden"
                    animate={textInView ? "visible" : "hidden"}
                    className="text-lg text-gray-600 max-w-2xl leading-relaxed"
                >
                    Currently pursuing a degree in Design, I explore the intersection of creativity
                    and problem-solving through various mediums. From brand identity to print design,
                    I'm passionate about creating meaningful visual experiences that communicate effectively
                    and inspire audiences.
                </motion.p>
            </div></section>
    )
}
