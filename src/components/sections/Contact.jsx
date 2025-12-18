import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import Button from '../common/Button';
import { personalInfo, socialLinks } from '../../data/portfolio';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ 
          type: 'success', 
          message: data.message
        });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus({ type: 'error', message: data.message });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please make sure the server is running.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    { icon: HiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: HiPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: HiLocationMarker, label: 'Location', value: personalInfo.location },
  ];

  const socialMedia = [
    { icon: FaGithub, label: 'GitHub', href: socialLinks.github },
    { icon: FaLinkedin, label: 'LinkedIn', href: socialLinks.linkedin },
    { icon: SiLeetcode, label: 'LeetCode', href: socialLinks.leetcode },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Let's Connect"
          subtitle="I'd love to hear from you"
          gradient
        />

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="group"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-start gap-4 p-5 rounded-2xl bg-slate-800/50 backdrop-blur-sm
                               border border-slate-700/50 hover:border-purple-500/50
                               transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                    >
                      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 
                                    text-white group-hover:scale-110 transition-transform duration-300
                                    shadow-lg shadow-purple-500/30">
                        <item.icon className="text-2xl" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
                          {item.label}
                        </p>
                        <p className="font-semibold text-white text-base group-hover:text-purple-400 transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-800/50 backdrop-blur-sm
                                  border border-slate-700/50 hover:border-purple-500/50
                                  transition-all duration-300">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 
                                    text-white shadow-lg shadow-purple-500/30">
                        <item.icon className="text-2xl" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
                          {item.label}
                        </p>
                        <p className="font-semibold text-white text-base">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50"
            >
              <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                Connect With Me
              </h3>
              <div className="flex gap-3">
                {socialMedia.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.15, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 p-4 rounded-xl bg-slate-700/50 border border-slate-600/50
                             hover:border-purple-500/50 text-gray-300 hover:text-white
                             transition-all duration-300 flex items-center justify-center
                             hover:shadow-lg hover:shadow-purple-500/20 group"
                    aria-label={social.label}
                  >
                    <social.icon className="text-2xl group-hover:text-purple-400 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50
                          shadow-xl shadow-purple-500/10">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                <span className="w-10 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-600/50
                               bg-slate-900/50 text-white placeholder-gray-500
                               focus:ring-2 focus:ring-purple-500 focus:border-transparent
                               transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-600/50
                               bg-slate-900/50 text-white placeholder-gray-500
                               focus:ring-2 focus:ring-purple-500 focus:border-transparent
                               transition-all outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-slate-600/50
                             bg-slate-900/50 text-white placeholder-gray-500
                             focus:ring-2 focus:ring-purple-500 focus:border-transparent
                             transition-all outline-none resize-none"
                    placeholder="Tell me about your project or just say hi..."
                  />
                </div>

                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl border ${
                      status.type === 'success'
                        ? 'bg-green-500/10 border-green-500/30 text-green-400'
                        : 'bg-red-500/10 border-red-500/30 text-red-400'
                    }`}
                  >
                    <p className="font-medium">{status.message}</p>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500
                           text-white font-semibold text-lg
                           hover:shadow-lg hover:shadow-purple-500/50
                           disabled:opacity-50 disabled:cursor-not-allowed
                           transition-all duration-300 flex items-center justify-center gap-3"
                >
                  {isLoading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <HiPaperAirplane className="text-xl" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
