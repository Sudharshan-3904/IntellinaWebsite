import React from "react";
import { motion } from "framer-motion";

const sponsors = [
  {
    title: "Our Title Sponsor",
    logo: "https://res.cloudinary.com/dxcctqlbr/image/upload/v1741365672/images_1_evvm9l.jpg",
    description: (
      <>
        TITLE SPONSOR{" "}
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="text-neon-blue hover:underline"
        >
          sponsor_site
        </a>
        .
      </>
    ),
    details:
      "",
  },
  {
    title: "Co-Sponsored By",
    logo: "https://res.cloudinary.com/dxcctqlbr/image/upload/v1741365672/images_ahjrej.jpg",
    description: (
      <>
        Visit{" "}
        <a
          href="https://dsignzmedia.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neon-blue hover:underline"
        >
          Dsignz Media
        </a>
        .
      </>
    ),
    details:
      "An innovative web development company providing unique solutions for innovations in Web Development, Web Design, Brand Design and Software Development.",
  },
];

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-10 bg-dark-bg text-white">
      <div className="container mx-auto px-6">
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={index}
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false }}
          >
            <h2 className="text-4xl font-bold text-center text-neon-blue uppercase mb-6">
              {sponsor.title}
            </h2>
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto p-8 rounded-lg shadow-lg mb-12">
              <motion.img
                src={sponsor.logo}
                alt={sponsor.title}
                className="w-400 md:w-52 lg:w-60 mb-4 rounded-md shadow-md"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: false }}
              />
              <p className="text-lg">{sponsor.description}</p>
              <p className="text-gray-400 mt-4 text-sm md:text-base">
                {sponsor.details}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
