import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, Cpu, Globe, Code, AlertTriangle, BrainCircuit, X } from 'lucide-react';

const Events = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 6,
      title: 'GPTathon',
      icon: <BrainCircuit className="h-6 w-6" />,
      description: 'Challenging participants in prompt engineering to generate high-quality AI responses.',
      detailedDescription: 'GPTathon is an online hackathon hosted on Unstop, designed to challenge participants in the art of prompt engineering. Competitors will navigate a multi-stage competition, refining their ability to craft precise and effective prompts to generate high-quality AI responses. The event promotes creativity, efficiency, and problem-solving through AI-driven tools',
      date: 'April 5',
      image: 'https://res.cloudinary.com/dqjrizifp/image/upload/v1741054409/download_1_bcbah7.jpg',
      rules: [],
      registrationLink: 'https://unstop.com/p/gptathon-intellina-2k25-coimbatore-institute-of-technology-cit-coimbatore-1416167'
    },
    {
      id: 1,
      title: 'Hackathon',
      icon: <Cpu className="h-6 w-6" />,
      description: '24-hour coding challenge to build innovative solutions for real-world problems.',
      detailedDescription: 'Join us for an insightful session where industry experts discuss the ethical challenges and opportunities presented by AI and automation. This event will feature a panel discussion, interactive Q&A, and networking opportunities.',
      date: 'April 4',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1170&q=80',
      rules: ['Maximum team size: 4', 'No pre-built projects allowed', 'Judging based on innovation and execution'],
    },
    {
      id: 2,
      title: 'Paper presentation',
      icon: <FileText className="h-6 w-6" />,
      description: 'Learn about the latest advancements in artificial intelligence and machine learning.',
      detailedDescription: 'Paper Presentation Competition, a platform for students to present their research, insights, and innovative ideas in various technical and academic fields. This event encourages participants to explore cutting-edge topics, refine their presentation skills, and engage in intellectual discussions',
      date: 'April 4',
      image: 'https://res.cloudinary.com/dqjrizifp/image/upload/v1741056308/download_4_a6citp.jpg',
      rules: ['Team Size: Solo or teams of up to 4.', 'Originality: Papers must be unpublished and original.', 'Mandatory Attendance: Presentation at the allotted time is required.','Topics: Must align with approved academic/technical domains.','Judging Criteria: Clarity, research depth, innovation, and presentation.','Final Decision: Judge\'s decisions are final.'],
    },
    {
      id: 3,
      title: 'Run Run Run - Snippet coding',
      icon: <Code className="h-6 w-6" />,
      description: 'Compete to build the most innovative and responsive web application.',
      detailedDescription: 'RRR (Run Run Run) is a coding challenge that pushes participants to their limits. This event consists of two intense rounds, testing debugging skills and coding efficiency. Sharpen your problem-solving skills and compete against the best minds in a high-pressure coding battle. Only the most efficient and accurate coders will emerge victorious!',
      date: 'April 4',
      image: 'https://res.cloudinary.com/dqjrizifp/image/upload/v1741056308/marmoset-1549624316170_ok1ile.png',
      rules: ['Participation: Solo only.', 'ID Card: Mandatory.', 'Round 1: Debugging (40 Qs, 40 mins, Pen & Paper).','Round 2: Coding (1 hour, HackerRank).','Qualification: Top 30 advance to Round 2.','E-certificates: For all,Winners: Announced at valediction'],
    },
    {
      id: 4,
      title: 'Web Design',
      icon: <Globe className="h-6 w-6" />,
      description: 'Compete in thrilling gaming battles and claim the championship title.',
      detailedDescription: 'Join us for an insightful session where industry experts discuss the ethical challenges and opportunities presented by AI and automation. This event will feature a panel discussion, interactive Q&A, and networking opportunities.',
      date: 'April 4',
      image: 'https://res.cloudinary.com/dqjrizifp/image/upload/v1741056307/download_5_hyjohw.jpg',
      rules: ['Solo or squad participation', 'Fair play is mandatory', 'Game-specific rules apply'],
    },
    {
      id: 5,
      title: 'Worst UI ',
      icon: <AlertTriangle className="h-6 w-6" />,
      description: 'Industry experts share insights on the latest trends in technology.',
      detailedDescription: 'In this challenge, teams will design a UI that functions correctly but is intentionally frustrating, confusing, or inefficient for its intended purpose. The goal is not to create an ugly design but to make interaction difficult, counterintuitive, or misleading while still ensuring the functionality remains intact.',
      date: 'April 5',
      image: 'https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=1170&q=80',
      rules: ['Functionality: UI must work correctly (e.g., login must function).', 'Usability Disaster: Design should intentionally frustrate users (e.g., hidden buttons, misleading labels).', 'Visual Chaos: Focus on bad usability, not just bad aesthetics.','Submission: Include a brief explanation of design choices.'],
    },
  ];

  return (
    <section id="events" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          Featured <span className="text-neon-blue">Events</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <motion.div
              key={event.id}
              className="glass-card overflow-hidden group cursor-pointer"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-full bg-dark-tertiary/70 mr-3">{event.icon}</div>
                  <h3 className="text-xl font-future font-semibold">{event.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-dark-bg p-6 rounded-lg shadow-lg max-w-lg w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-white">{selectedEvent.title}</h2>
                <button onClick={() => setSelectedEvent(null)} className="text-white">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-48 object-cover rounded mb-4" />
              <p className="text-gray-300 mb-4">{selectedEvent.description}</p>
              <div className="text-sm text-gray-400 mb-4">📅 {selectedEvent.date}</div>
              <h3 className="text-lg font-semibold text-white mb-2">Detailed Description:</h3>
              <p className="text-gray-300 mb-4">{selectedEvent.detailedDescription}</p>
              <h3 className="text-lg font-semibold text-white mb-2">Rules:</h3>
              <ul className="list-disc list-inside text-gray-300">
                {selectedEvent.rules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
              {selectedEvent.registrationLink && (
                <a
                  href={selectedEvent.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full py-2 block text-center bg-neon-blue text-dark-bg rounded hover:bg-neon-blue/80"
                >
                  Register Now
                </a>
              )}
              <button
                className="mt-4 w-full py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
                onClick={() => setSelectedEvent(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Events;