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
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-4xl max-h-[85vh] bg-white border border-gray-200 shadow-xl font-mono overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-medium text-black truncate">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{project.description}</p>
              </div>
              <button
                onClick={onClose}
                className="ml-4 p-1 hover:bg-gray-200 transition-colors"
              >
                <X size={20} className="text-gray-600" />
              </button>
            </div>            <div className="relative">
              <div className="aspect-video relative overflow-hidden bg-gray-100">
                <motion.img
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  src={project.slides[currentSlide].image}
                  alt={
                    project.slides[currentSlide].title ||
                    `Slide ${currentSlide + 1}`
                  }
                  className="w-full h-full object-contain"
                />

                {project.slides.length > 1 && (
                  <>
                    <button
                      onClick={previousSlide}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white border border-gray-200 shadow-sm transition-all"
                    >
                      <ChevronLeft size={18} className="text-black" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white border border-gray-200 shadow-sm transition-all"
                    >
                      <ChevronRight size={18} className="text-black" />
                    </button>
                  </>
                )}

                <div className="absolute bottom-3 right-3 px-2 py-1 bg-white/90 text-black text-xs border border-gray-200 font-mono">
                  {currentSlide + 1}/{project.slides.length}
                </div>
              </div>

              {project.slides[currentSlide].title && (
                <div className="p-4 border-b border-gray-200">
                  <h3 className="text-sm font-medium text-black mb-1">
                    {project.slides[currentSlide].title}
                  </h3>
                  {project.slides[currentSlide].description && (
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {project.slides[currentSlide].description}
                    </p>
                  )}
                </div>
              )}
            </div>            {project.slides.length > 1 && (
              <div className="p-3 border-b border-gray-200 bg-gray-50">
                <div className="flex gap-2 overflow-x-auto">
                  {project.slides.map((slide, index) => (
                    <button
                      key={slide.id}
                      onClick={() => goToSlide(index)}
                      className={`flex-shrink-0 w-12 h-8 overflow-hidden border transition-all ${
                        index === currentSlide
                          ? "border-black"
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

            <div className="p-4">
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-black text-xs font-mono"
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
