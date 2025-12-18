import { motion } from 'framer-motion';
import { skills } from '../../data/portfolio';
import { FiBriefcase } from 'react-icons/fi';
import { 
  SiReact, SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiBootstrap,
  SiNodedotjs, SiExpress, SiMysql, SiMongodb,
  SiGit, SiGithub, SiVisualstudiocode, SiPostman, SiFigma
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';

const SkillsExperience = () => {
  // Icon mapping for each skill
  const skillIcons = {
    'HTML': SiHtml5,
    'CSS': SiCss3,
    'JavaScript': SiJavascript,
    'React.js': SiReact,
    'Tailwind CSS': SiTailwindcss,
    'Bootstrap': SiBootstrap,
    'Node.js': SiNodedotjs,
    'Express.js': SiExpress,
    'MySQL': SiMysql,
    'MongoDB': SiMongodb,
    'REST APIs': SiNodedotjs,
    'Java': DiJava,
    'Git': SiGit,
    'GitHub': SiGithub,
    'VS Code': SiVisualstudiocode,
    'Postman': SiPostman,
    'Figma': SiFigma,
  };

  // Color mapping for each skill
  const skillColors = {
    'HTML': 'from-orange-500 to-red-500',
    'CSS': 'from-blue-500 to-cyan-500',
    'JavaScript': 'from-yellow-400 to-yellow-600',
    'React.js': 'from-cyan-400 to-blue-500',
    'Tailwind CSS': 'from-teal-400 to-cyan-500',
    'Bootstrap': 'from-purple-500 to-violet-600',
    'Node.js': 'from-green-500 to-emerald-600',
    'Express.js': 'from-gray-600 to-gray-800',
    'MySQL': 'from-blue-600 to-cyan-700',
    'MongoDB': 'from-green-600 to-teal-600',
    'REST APIs': 'from-indigo-500 to-purple-600',
    'Java': 'from-red-600 to-orange-700',
    'Git': 'from-orange-600 to-red-600',
    'GitHub': 'from-gray-700 to-slate-900',
    'VS Code': 'from-blue-600 to-cyan-600',
    'Postman': 'from-orange-500 to-orange-600',
    'Figma': 'from-purple-500 to-pink-500',
  };

  // Combine all skills
  const allSkills = [
    ...skills.frontend,
    ...skills.backend,
    ...skills.tools
  ];

  const experiences = [
    {
      title: "Hackathon Participation",
      organization: "Sathyabama College",
      location: "Chennai",
      date: "2024",
      description: "Participated in project hackathon, showcasing innovative solutions",
      icon: "🏆"
    },
    {
      title: "Project Presentation",
      organization: "Sona College",
      location: "Salem",
      date: "2024",
      description: "Presented technical project demonstrating full-stack capabilities",
      icon: "🎤"
    }
  ];

  return (
    <section id="skills" className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-blue-300 text-sm font-medium mb-4"
          >
            🛠️ Skills & Experience
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Skills Grid - All Combined */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {allSkills.map((skill, index) => {
              const Icon = skillIcons[skill.name];
              const colorGradient = skillColors[skill.name] || 'from-purple-500 to-pink-500';
              
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative"
                >
                  <div className="relative h-full rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-6 transition-all duration-300 hover:border-blue-500/50 hover:bg-white/10 cursor-pointer">
                    {/* Glow Effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-r ${colorGradient} opacity-0 group-hover:opacity-20 transition-opacity blur-xl`}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.2 }}
                    />
                    
                    {/* Icon */}
                    <motion.div
                      className="relative flex flex-col items-center justify-center gap-3"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {Icon && (
                        <motion.div
                          className={`p-3 rounded-lg bg-gradient-to-r ${colorGradient}`}
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                      )}
                      
                      {/* Skill Name */}
                      <span className="text-gray-200 font-medium text-center text-sm group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>

                    {/* Floating Particles */}
                    <motion.div
                      className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-400/50"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.1
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="flex items-center gap-3 mb-8 justify-center">
            <motion.div 
              className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <FiBriefcase className="w-6 h-6 text-white" />
            </motion.div>
            <h3 className="text-3xl font-bold text-white">Experience & Events</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                <div className="relative h-full rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden">
                  {/* Background Gradient on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  
                  {/* Content */}
                  <div className="relative">
                    {/* Icon Badge */}
                    <motion.div 
                      className="text-5xl mb-4"
                      whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {exp.icon}
                    </motion.div>
                    
                    <h4 className="text-xl font-bold text-white mb-2">{exp.title}</h4>
                    <div className="flex items-center gap-2 text-blue-300 mb-3">
                      <span className="font-medium">{exp.organization}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400">{exp.location}</span>
                    </div>
                    <p className="text-gray-400 mb-3">{exp.description}</p>
                    <motion.div 
                      className="inline-block px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      {exp.date}
                    </motion.div>
                  </div>

                  {/* Bottom Accent */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-b-2xl"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsExperience;
