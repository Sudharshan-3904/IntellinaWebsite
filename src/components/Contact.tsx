import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-neon-blue" />,
      title: 'Email',
      details: 'secretaryb.techai.ds@gmail.com',
      link: 'mailto:secretaryb.techai.ds@gmail.com',
    },
    {
      icon: <Phone className="h-6 w-6 text-neon-blue" />,
      title: 'Phone',
      details: '+91 9876543210',
      link: 'tel:+919876543210',
    },
    {
      icon: <MapPin className="h-6 w-6 text-neon-blue" />,
      title: 'Location',
      details: 'College Campus',
      link: 'https://maps.app.goo.gl/8bPoikSz1V9U9vc68',
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          Contact <span className="text-neon-blue">Us</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-future font-semibold mb-6">Get in Touch</h3>
            <p className="text-gray-300 mb-8">
              Have questions about Intellina? Reach out to us and our team will get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="p-3 rounded-full bg-dark-tertiary/70 mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-future font-medium mb-1">{item.title}</h4>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-neon-blue transition-colors duration-300 flex items-center"
                    >
                      {item.details}
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
