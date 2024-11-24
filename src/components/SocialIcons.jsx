import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const SocialIcons = () => {
  return (
    <div className="flex gap-6 mt-4">
      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/giovanni-raffa-045482321/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-500 transform transition-transform duration-300 hover:scale-125"
      >
        <FaLinkedin size={32} />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/gianni28"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transform transition-transform duration-300 hover:scale-125"
      >
        <FaGithub size={32} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/573004689809"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-green-500 transform transition-transform duration-300 hover:scale-125"
      >
        <FaWhatsapp size={32} />
      </a>

      {/* Gmail */}
      <a
        href="mailto:giovarafi@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-red-500 transform transition-transform duration-300 hover:scale-125"
      >
        <SiGmail size={32} />
      </a>
    </div>
  );
};

export default SocialIcons;
