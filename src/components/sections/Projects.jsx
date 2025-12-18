import { motion } from 'framer-motion';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { projects } from '../../data/portfolio';

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <SectionTitle
          title="Featured Projects"
          subtitle="Some of my recent work"
          gradient
        />

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.15 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }
              }}
            >
              <Card className="h-full group overflow-hidden">
                {/* Project Image with enhanced hover */}
                <div className="relative w-full h-48 mb-6 -mx-6 -mt-6 overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent 
                                opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                  
                  {/* Hover action buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/95 dark:bg-gray-800/95 rounded-full shadow-lg
                               hover:bg-white dark:hover:bg-gray-700 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <HiCode className="text-2xl text-gray-900 dark:text-white" />
                    </motion.a>
                    {project.demo !== '#' && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/95 dark:bg-gray-800/95 rounded-full shadow-lg
                                 hover:bg-white dark:hover:bg-gray-700 transition-colors"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <HiExternalLink className="text-2xl text-gray-900 dark:text-white" />
                      </motion.a>
                    )}
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <motion.div 
                      className="absolute top-4 right-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Badge variant="tech">Featured</Badge>
                    </motion.div>
                  )}
                </div>

                {/* Project Info */}
                <motion.h3 
                  className="text-2xl font-bold mb-3 text-gray-900 dark:text-white 
                             group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack with animations */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <Badge variant="tech">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    href={project.github}
                    className="flex-1"
                    icon={<HiCode />}
                  >
                    Code
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    href={project.demo}
                    className="flex-1"
                    icon={<HiExternalLink />}
                  >
                    Live Demo
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
