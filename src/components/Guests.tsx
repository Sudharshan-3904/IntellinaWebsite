import React from "react";
import { motion } from "framer-motion";

const chiefGuests = [
  {
    name: "Selvaraaju Murugesan",
    image: "https://res.cloudinary.com/dxcctqlbr/image/upload/v1741370614/WhatsApp_Image_2025-03-07_at_22.48.18_5ebb04b9_ilud3r.jpg",
    description:
      "Business Strategy | Innovation | Data Science | AI",
    linkedin: "https://www.linkedin.com/in/selvaraaju/",
  },
];

const speakers = [
  {
    name: "Dinesh Chidambaram",
    image: "https://res.cloudinary.com/dxcctqlbr/image/upload/v1743324990/1625454106573_wiyjun.jpg",
    description: "Co-Founder - Dsignz Media",
    linkedin: "https://www.linkedin.com/in/dinesh-chidambaram-06142177/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Selvakumar D",
    image: "https://res.cloudinary.com/dxcctqlbr/image/upload/v1743324990/1737657555548_l8fazg.jpg",
    description: "Co-Founder - Dsignz Media",
    linkedin: "https://www.linkedin.com/in/dselva/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Veera Sundari Mani",
    image: "https://res.cloudinary.com/dxcctqlbr/image/upload/v1743324990/1654488582686_bmrpsv.jpg",
    description: "Co-Founder - Pro Secure Labs",
    linkedin: "https://www.linkedin.com/in/veera-sundari-mani-800928228/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Marimuthu Mantharasalam",
    image: "https://res.cloudinary.com/dqjrizifp/image/upload/v1743524744/1628280902038_thj2n9.jpg",
    description: "Director - Upskill Labs",
    linkedin: "https://www.linkedin.com/in/marimuthu-mantharasalam-62923057?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

const Guests = () => {
  return (
    <section id="guests" className="py-8 bg-dark-bg text-white">
      <div className="container mx-auto px-6">

        {/* Chief Guests Section */}
        <h2 className="text-4xl font-bold text-center text-white uppercase mb-6">
          Our <span className="text-neon-blue">Chief Guest</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          {chiefGuests.map((guest, index) => (
            <motion.div
              key={index}
              className="bg-dark-tertiary p-6 rounded-lg shadow-lg text-center w-80 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              <img
                src={guest.image}
                alt={guest.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-neon-blue shadow-md mx-auto mb-4"
              />
              <h4 className="text-xl font-bold">{guest.name}</h4>
              <p className="text-gray-400 text-sm mt-2">{guest.description}</p>
              <a
                href={guest.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
            </svg>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Speakers Section */}
        <h2 className="text-4xl font-bold text-center text-white uppercase mt-16 mb-6">
          Our <span className="text-neon-blue">Esteemed Judges</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              className="bg-dark-tertiary p-6 rounded-lg shadow-lg text-center w-80 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-neon-blue shadow-md mx-auto mb-4"
              />
              <h4 className="text-xl font-bold">{speaker.name}</h4>
              <p className="text-gray-400 text-sm mt-2">{speaker.description}</p>
              <a
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
            </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guests;
