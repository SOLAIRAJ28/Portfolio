import { motion } from 'framer-motion';
import { about } from '../../data/portfolio';
import { personalInfo } from '../../data/portfolio';
import { FiAward, FiBook, FiHeart } from 'react-icons/fi';

const AboutNew = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            👤 About Me
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Get To Know Me
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Profile & Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Profile Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8">
                <div className="flex items-center gap-6 mb-6">
                  {/* Avatar */}
                  <div className="relative">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.7, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white/20">
                      <img
                        src={personalInfo.avatar}
                        alt={personalInfo.name}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: 'center 20%' }}
                      />
                    </div>
                  </div>

                  {/* Name & Title */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{personalInfo.name}</h3>
                    <p className="text-purple-300">{personalInfo.title}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {about.description}
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500">
                  <FiBook className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              <div className="space-y-6">
                {about.education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-6 border-l-2 border-purple-500/30"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                    <h4 className="text-lg font-semibold text-white mb-1">{edu.degree}</h4>
                    <p className="text-purple-300 text-sm mb-1">{edu.institution}</p>
                    <p className="text-gray-400 text-sm mb-2">{edu.year}</p>
                    <p className="text-gray-300 text-sm font-medium">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Interests & Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Interests */}
            <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
                  <FiAward className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Interests</h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {about.interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all cursor-pointer group"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 group-hover:scale-150 transition-transform"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{interest}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500">
                  <FiHeart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Soft Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {about.softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-center group cursor-pointer"
                  >
                    <span className="text-purple-200 font-medium group-hover:text-white transition-colors">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutNew;
