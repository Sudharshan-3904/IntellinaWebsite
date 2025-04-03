import React from "react";
import { ChevronRight, Mail, Phone, MapPin } from "lucide-react";
import { Instagram, Linkedin } from 'lucide-react';
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "About", href: "/about" },
        { name: "Events", href: "/events" },
        { name: "Team", href: "/team" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-neon-blue" />,
      title: "Email",
      details: "secretaryb.techai.ds@gmail.com",
      link: "mailto:secretaryb.techai.ds@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-neon-blue" />,
      title: "Phone",
      details: "+91 9944211304",
      link: "tel:+919944211304",
    },
    {
      icon: <MapPin className="h-5 w-5 text-neon-blue" />,
      title: "Location",
      details: "Coimbatore Institute of Technology",
      link: "https://maps.app.goo.gl/8bPoikSz1V9U9vc68",
    },
  ];

  return (
    <footer className="bg-dark-tertiary/50 pt-6 pb-3">
      <div className="container mx-auto px-4">
        
        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Brand Description */}
          <div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-white">
                INTEL<span className="text-neon-blue">LINA</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              The most innovative technical symposium bringing together the brightest minds in technology.
            </p>
          </div>
  
          {/* Quick Links */}
<div>
  <h3 className="text-lg font-future font-semibold mb-4">Quick <span className="text-neon-blue">Links</span></h3>
  <ul className="space-y-2">
    {footerLinks[0].links.map((link, index) => (
      <li key={index}>
        <Link
          to={link.href} // Use `to` instead of `href`
          className="text-gray-400 hover:text-neon-blue transition-colors duration-300 flex items-center"
        >
          <ChevronRight className="h-4 w-4 mr-1" />
          {link.name}
        </Link>
      </li>
    ))}
  </ul>
</div>
  
          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-future font-semibold mb-4">
              Contact <span className="text-neon-blue">Us</span>
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="p-2 rounded-full bg-dark-tertiary/70 mr-3">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300">
                      {item.title}
                    </h4>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
                    >
                      {item.details}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        {/* Mobile View */}
<div className="md:hidden flex flex-col text-center space-y-4 mb-4">
  {/* Brand Section */}
  <div>
    <span className="text-xl font-bold text-white">
      INTEL<span className="text-neon-blue">LINA</span>
    </span>
    <p className="text-gray-400 mt-1 text-xs px-4">
      The most innovative technical symposium bringing together the brightest minds in technology.
    </p>
  </div>

{/* Mobile Quick Links */}
<div className="md:hidden flex flex-col text-center space-y-4 mb-4">
  <div>
    <h3 className="text-base font-future font-semibold mb-2">Quick <span className="text-neon-blue">Links</span></h3>
    <ul className="flex justify-center space-x-4">
      {footerLinks[0].links.map((link, index) => (
        <li key={index}>
          <Link
            to={link.href} // Use `to` for routing
            className="text-gray-400 hover:text-neon-blue transition-colors duration-300 flex items-center text-sm"
          >
            <ChevronRight className="h-4 w-4 mr-1" />
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
</div>

  {/* Contact Info */}
  <div>
    <h3 className="text-base font-future font-semibold mb-2">
      Contact <span className="text-neon-blue">Us</span>
    </h3>
    <ul className="space-y-2">
      {contactInfo.map((item, index) => (
        <li key={index} className="flex flex-col items-center">
          <div className="p-2 rounded-full bg-dark-tertiary/70 mb-1">
            {item.icon}
          </div>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-xs"
          >
            {item.details}
          </a>
        </li>
      ))}
    </ul>
  </div>
</div>

{/* Bottom Section */}
<div className="border-t border-gray-800 pt-2 flex flex-col md:flex-row justify-between items-center text-xs">
  <p className="text-gray-400 mb-2 md:mb-0">&copy; {currentYear} Intellina.</p>

  {/* Social Media Links */}
  <div className="flex space-x-3">
    <a
      href="https://www.instagram.com/intellina?igsh=dzl2YXNmN2xkamJl"
      className="text-white hover:text-neon-blue transition-colors duration-300"
    >
      <Instagram className="h-5 w-5" />
    </a>

    <a
      href="https://www.linkedin.com/company/intellina"
      className="text-white hover:text-neon-blue transition-colors duration-300"
    >
      <Linkedin className="h-5 w-5" />
    </a>
  </div>
</div>

      </div>
    </footer>
  );
}  

export default Footer;
