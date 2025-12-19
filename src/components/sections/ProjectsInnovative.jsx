import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import { projects } from '../../data/portfolio';

const ProjectCard = ({ project, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
    >
      <div className="relative h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 
                    backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden
                    shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-500">
        
        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                        translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </div>

        {/* Image Container with 3D depth */}
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain p-6"
            style={{ transformStyle: "preserve-3d", translateZ: "50px" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
          
          {/* Floating action buttons */}
          <div className="absolute inset-0 flex items-center justify-center gap-3 
                        opacity-0 group-hover:opacity-100 transition-all duration-300
                        bg-slate-900/80 backdrop-blur-sm">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-slate-800 border border-cyan-500/50 text-white rounded-lg 
                       flex items-center gap-2 hover:bg-cyan-500 transition-colors shadow-lg
                       hover:shadow-cyan-500/50"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d", translateZ: "75px" }}
            >
              <HiCode className="text-lg" />
              <span className="text-sm font-medium">Code</span>
            </motion.a>
            
            {project.demo !== '#' && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white 
                         rounded-lg flex items-center gap-2 hover:from-cyan-600 hover:to-blue-600 
                         transition-all shadow-lg hover:shadow-cyan-500/50"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: "preserve-3d", translateZ: "75px" }}
              >
                <HiExternalLink className="text-lg" />
                <span className="text-sm font-medium">Demo</span>
              </motion.a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6" style={{ transformStyle: "preserve-3d" }}>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 
                       transition-colors" style={{ translateZ: "30px" }}>
            {project.title}
          </h3>
          
          <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed" 
             style={{ translateZ: "20px" }}>
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2" style={{ translateZ: "10px" }}>
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-cyan-300 
                         border border-cyan-500/30 rounded-md hover:bg-slate-700 
                         hover:border-cyan-500/60 transition-all"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500/20 
                             to-blue-500/20 text-cyan-300 border border-cyan-500/50 rounded-md">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* 3D depth highlight */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>
    </motion.div>
  );
};

const ProjectsInnovative = () => {
  return (
    <section id="projects" className="relative section-padding overflow-hidden bg-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 
                         bg-clip-text text-transparent animate-gradient">
              Featured Projects
            </span>
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Building innovative solutions with cutting-edge technologies
          </motion.p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsInnovative;
