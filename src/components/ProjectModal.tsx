import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface Slide {
  id: number;
  image: string;
  title?: string;
  description?: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  slides: Slide[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (project) {
      setCurrentSlide(0);
    }
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !project) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        previousSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, project, currentSlide]);

  const nextSlide = () => {
    if (!project) return;
    setCurrentSlide((prev) =>
      prev === project.slides.length - 1 ? 0 : prev + 1,
    );
  };

  const previousSlide = () => {
    if (!project) return;
    setCurrentSlide((prev) =>
      prev === 0 ? project.slides.length - 1 : prev - 1,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {project.title}
                </h2>
                <p className="text-gray-600 mt-1">{project.description}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            <div className="relative bg-gray-50">
              <div className="aspect-video relative overflow-hidden">
                <motion.img
                  key={currentSlide}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  src={project.slides[currentSlide].image}
                  alt={
                    project.slides[currentSlide].title ||
                    `Slide ${currentSlide + 1}`
                  }
                  className="w-full h-full object-contain bg-white"
                />

                {project.slides.length > 1 && (
                  <>
                    <button
                      onClick={previousSlide}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/20 hover:bg-black/40 rounded-full transition-colors backdrop-blur-sm"
                    >
                      <ChevronLeft size={24} className="text-white" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/20 hover:bg-black/40 rounded-full transition-colors backdrop-blur-sm"
                    >
                      <ChevronRight size={24} className="text-white" />
                    </button>
                  </>
                )}

                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 text-white text-sm rounded-full backdrop-blur-sm">
                  {currentSlide + 1} / {project.slides.length}
                </div>
              </div>

              {project.slides[currentSlide].title && (
                <div className="p-6 bg-white border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {project.slides[currentSlide].title}
                  </h3>
                  {project.slides[currentSlide].description && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.slides[currentSlide].description}
                    </p>
                  )}
                </div>
              )}
            </div>

            {project.slides.length > 1 && (
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {project.slides.map((slide, index) => (
                    <button
                      key={slide.id}
                      onClick={() => goToSlide(index)}
                      className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-all ${
                        index === currentSlide
                          ? "border-black shadow-md"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <img
                        src={slide.image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="px-6 pb-6">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
