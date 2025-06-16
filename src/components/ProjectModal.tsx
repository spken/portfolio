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

  if (!project) return null;
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white font-mono overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 pb-4">
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-medium text-black truncate">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {project.description}
                </p>
              </div>
              <button
                onClick={onClose}
                className="ml-4 p-2 hover:bg-gray-100 transition-colors rounded-full cursor-pointer"
              >
                <X size={18} className="text-gray-700" />
              </button>
            </div>
            <div className="relative px-6">
              <div className="aspect-video relative overflow-hidden bg-gray-50">
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
                  className="w-full h-full object-cover"
                />

                {project.slides.length > 1 && (
                  <>
                    <button
                      onClick={previousSlide}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white/90 transition-all rounded-full cursor-pointer"
                    >
                      <ChevronLeft size={16} className="text-gray-700" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white/90 transition-all rounded-full cursor-pointer"
                    >
                      <ChevronRight size={16} className="text-gray-700" />
                    </button>
                  </>
                )}
              </div>

              {project.slides[currentSlide].title && (
                <div className="py-4">
                  <h3 className="text-sm font-medium text-black mb-1">
                    {project.slides[currentSlide].title}
                  </h3>
                  {project.slides[currentSlide].description && (
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {project.slides[currentSlide].description}
                    </p>
                  )}
                </div>
              )}
            </div>
            <div className="px-6 pb-6">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs text-gray-600 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {project.slides.length > 1 && (
              <div className="absolute bottom-4 right-6">
                <span className="text-xs text-gray-400 font-mono">
                  {currentSlide + 1}/{project.slides.length}
                </span>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
