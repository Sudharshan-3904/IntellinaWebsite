import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Users, Trophy, Lightbulb } from 'lucide-react';

const About = () => {
  // Separate refs for each section
  const [refIntellina, inViewIntellina] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [refCollege, inViewCollege] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <>
      {/* Intellina Section */}
      <section id="about" ref={refIntellina} className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={inViewIntellina ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="section-heading text-center"
          >
            About <span className="text-neon-blue">Intellina</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inViewIntellina ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-center text-gray-300 mb-8"
          >
            Intellina is a premier technical symposium that brings together students, academics, and industry
            professionals to explore the cutting edge of technology and innovation.
          </motion.p>

          {/* Image with Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inViewIntellina ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative overflow-hidden rounded-xl mx-auto max-w-4xl"
          >
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Intellina Event"
              className="w-full h-[400px] object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* College Section */}
      <section id="college" ref={refCollege} className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={inViewCollege ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="section-heading text-center"
          >
            About<span className="text-neon-blue">College</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inViewCollege ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-center text-gray-300 mb-8"
          >
            The V. Rangasamy Naidu Educational Trust devoted to the cause of promoting technical and scientific literacy, established Coimbatore Institute of Technology (CIT) in Coimbatore, Tamil Nadu, South India in 1956.
            CIT is one of the most reputed and prestigious educational institutions in India. The Institute backed by World Class research and development over the years attained autonomous status in 1987.
          </motion.p>

          {/* Image with Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inViewCollege ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative overflow-hidden rounded-xl mx-auto max-w-4xl"
          >
            <img
              src="https://res.cloudinary.com/dqjrizifp/image/upload/v1740997907/cit-hm-1_kikoxq.jpg"
              alt="College Campus"
              className="w-full h-[400px] object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent"></div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
