import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  // Separate refs for each section
  const [refIntellina, inViewIntellina] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [refCollege, inViewCollege] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [refDepartment, inViewDepartment] = useInView({ triggerOnce: false, threshold: 0.2 });
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
      {/* Intellina Section */}
      <section id="about" ref={refIntellina} className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Mobile: Header -> Content -> Image */}
            <div className="md:hidden text-center">
              <motion.h2 className="section-heading">
                About <span className="text-neon-blue">Intellina</span>
              </motion.h2>
              <motion.p className="text-lg text-gray-300 mb-6">
              Welcome to INTELLINA 2K25, a National Level Technical Fest by the Department of AI & Data Science. Experience hackathons, workshops, and expert sessions, bridging academia and industry. Join us to innovate, compete, and shape the future of technology!              </motion.p>
              <motion.div className="relative overflow-hidden rounded-xl mx-auto">
                <img
                  src="https://res.cloudinary.com/dqjrizifp/image/upload/v1741027208/photo_2025-03-04_00-09-50_pujkfn.jpg"
                  alt="Intellina Event"
                  className="w-full h-[400px] object-cover rounded-xl"
                />
              </motion.div>
            </div>

            {/* Desktop: Image Left, Content Right */}
            <motion.div className="hidden md:block relative overflow-hidden rounded-xl mx-auto">
              <img
                src="https://res.cloudinary.com/dqjrizifp/image/upload/v1741027208/photo_2025-03-04_00-09-50_pujkfn.jpg"
                alt="Intellina Event"
                className="w-full h-[400px] object-cover rounded-xl"
              />
            </motion.div>

            <motion.div className="hidden md:block">
              <h2 className="section-heading">
                About <span className="text-neon-blue">Intellina</span>
              </h2>
              <p className="text-lg text-gray-300">
              Welcome to INTELLINA 2K25, a National Level Technical Fest by the Department of AI & Data Science. Experience hackathons, workshops, and expert sessions, bridging academia and industry. Join us to innovate, compete, and shape the future of technology!              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* College Section */}
      <section id="college" ref={refCollege} className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Mobile: Header -> Content -> Image */}
            <div className="md:hidden text-center">
              <motion.h2 className="section-heading">
                About <span className="text-neon-blue">College</span>
              </motion.h2>
              <motion.p className="text-lg text-gray-300 mb-6">
              The V. Rangasamy Naidu Educational Trust devoted to the cause of promoting technical and scientific literacy, established Coimbatore Institute of Technology (CIT) in Coimbatore, Tamil Nadu, South India in 1956. CIT is one of the most reputed and prestigious educational institutions in India. The Institute backed by World Class research and development over the years attained autonomous status in 1987.              </motion.p>
              <motion.div className="relative overflow-hidden rounded-xl mx-auto">
                <img
                  src="https://res.cloudinary.com/dqjrizifp/image/upload/v1740997907/cit-hm-1_kikoxq.jpg"
                  alt="College Campus"
                  className="w-full h-[400px] object-cover rounded-xl"
                />
              </motion.div>
            </div>

            {/* Desktop: Content Left, Image Right */}
            <motion.div className="hidden md:block">
              <h2 className="section-heading">
                About <span className="text-neon-blue">College</span>
              </h2>
              <p className="text-lg text-gray-300">
              The V. Rangasamy Naidu Educational Trust devoted to the cause of promoting technical and scientific literacy, established Coimbatore Institute of Technology (CIT) in Coimbatore, Tamil Nadu, South India in 1956. CIT is one of the most reputed and prestigious educational institutions in India. The Institute backed by World Class research and development over the years attained autonomous status in 1987.              </p>
            </motion.div>

            <motion.div className="hidden md:block relative overflow-hidden rounded-xl mx-auto">
              <img
                src="https://res.cloudinary.com/dqjrizifp/image/upload/v1740997907/cit-hm-1_kikoxq.jpg"
                alt="College Campus"
                className="w-full h-[400px] object-cover rounded-xl"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Department Section */}
      <section id="department" ref={refDepartment} className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Mobile: Header -> Content -> Image */}
            <div className="md:hidden text-center">
              <motion.h2 className="section-heading">
                About <span className="text-neon-blue">Department</span>
              </motion.h2>
              <motion.p className="text-lg text-gray-300 mb-6">
              The Artificial Intelligence & Data Science Department fosters innovation, research, and excellence by integrating AI with real-world applications. With expertise in machine learning, deep learning, and big data, we equip students to lead in academia, industry, and research through hands-on projects and collaborations.              
              </motion.p>
              <motion.div className="relative overflow-hidden rounded-xl mx-auto">
                <img
                  src="https://res.cloudinary.com/dxcctqlbr/image/upload/v1741275836/asslogo_bx7zxf.png"
                  alt="Department"
                  className="w-full h-[400px] object-cover rounded-xl"
                />
              </motion.div>
            </div>

            {/* Desktop: Image Left, Content Right */}
            <motion.div className="hidden md:block relative overflow-hidden rounded-xl mx-auto">
              <img
                src="https://res.cloudinary.com/dxcctqlbr/image/upload/v1741275836/asslogo_bx7zxf.png"
                alt="Department"
                className="w-full h-[400px] object-cover rounded-xl"
              />
            </motion.div>

            <motion.div className="hidden md:block">
              <h2 className="section-heading">
                About <span className="text-neon-blue">Department</span>
              </h2>
              <p className="text-lg text-gray-300">
              The Artificial Intelligence & Data Science Department fosters innovation, research, and excellence by integrating AI with real-world applications. With expertise in machine learning, deep learning, and big data, we equip students to lead in academia, industry, and research through hands-on projects and collaborations.              </p>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;
