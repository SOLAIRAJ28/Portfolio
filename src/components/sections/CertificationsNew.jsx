import { motion } from 'framer-motion';
import { achievements } from '../../data/portfolio';
import { FiAward, FiStar, FiTarget, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';

const CertificationsNew = () => {
  const iconMap = [FiAward, FiCheckCircle, FiStar, FiTrendingUp, FiTarget];
  
  const getIconColor = (index) => {
    const colors = [
      'from-yellow-400 to-orange-500',
      'from-green-400 to-emerald-500',
      'from-blue-400 to-cyan-500',
      'from-purple-400 to-pink-500',
      'from-red-400 to-rose-500',
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900">
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
            🏆 Achievements
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Certifications & Achievements
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Recognition and credentials that validate my expertise
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[index % iconMap.length];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative h-full rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20">
                  {/* Icon Badge */}
                  <motion.div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${getIconColor(index)} mb-4 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-7 h-7 text-white drop-shadow-lg" />
                  </motion.div>

                  {/* Year Badge */}
                  <div className="absolute top-6 right-6">
                    <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium">
                      {achievement.year}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Decorative Element */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-b-2xl"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                  />

                  {/* Shine Effect on Hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
                      backgroundSize: '200% 200%',
                    }}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsNew;
