import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function SocialMedia() {
  return (
    <div className="mt-5 mx-auto flex w-20 justify-between items-center text-white">
      <a
        href="https://www.linkedin.com/in/felipemamede/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin size={32} />
      </a>
      <a href="https://github.com/mamede" target="_blank" rel="noreferrer">
        <FaGithub size={32} />
      </a>
    </div>
  );
}
