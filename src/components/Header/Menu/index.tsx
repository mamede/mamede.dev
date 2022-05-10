import { House, Kanban, PaperPlaneTilt, User } from 'phosphor-react';
import React from 'react';

export function Menu() {
  return (
    <ul className="absolute py-4 w-[86px] left-0 right-auto bg-stone-800 top-0 bottom-0 rounded-none shadow-2xl">
      <li className="list-item items-center text-center">
        <a
          href="#home"
          className="text-green-700 hover:text-green-700 border-b	border-neutral-600 block relative p-2 transition-all duration-500 ease-in-out"
        >
          {/* Arrumar o is active */}
          <span className="block my-0 mx-auto text-center">
            <House size={32} style={{ margin: '0 auto' }} />
          </span>
          <span className="relative left-0 right-0 opacity-100 text-[#eee] text-xs pt-2 pt-1 transparent shadow-none font-display">
            Home
          </span>
        </a>
      </li>
      <li className="list-item items-center text-center">
        <a
          href="#about-me"
          className="text-[#535353] text-green-700 hover:text-green-700 border-b	border-neutral-600 block relative p-2 transition-all duration-500 ease-in-out"
        >
          <span className="block my-0 mx-auto text-center">
            <User size={32} style={{ margin: '0 auto' }} />
          </span>
          <span className="relative left-0 right-0 opacity-100 text-[#eee] text-xs pt-2 pt-1 transparent shadow-none font-display">
            About Me
          </span>
        </a>
      </li>
      <li className="list-item items-center text-center">
        <a
          href="#portfolio"
          className="text-[#535353] text-green-700 hover:text-green-700 border-b	border-neutral-600 block relative p-2 transition-all duration-500 ease-in-out"
        >
          <span className="block my-0 mx-auto text-center">
            <Kanban size={32} style={{ margin: '0 auto' }} />
          </span>
          <span className="relative left-0 right-0 opacity-100 text-[#eee] text-xs pt-2 pt-1 transparent shadow-none font-display">
            Portfolio
          </span>
        </a>
      </li>
      <li className="list-item items-center text-center">
        <a
          href="#contact"
          className="text-[#535353] text-green-700 hover:text-green-700 border-b	border-neutral-600 block relative p-2 transition-all duration-500 ease-in-out"
        >
          <span className="block my-0 mx-auto text-center">
            <PaperPlaneTilt size={32} style={{ margin: '0 auto' }} />
          </span>
          <span className="relative left-0 right-0 opacity-100 text-[#eee] text-xs pt-2 pt-1 transparent shadow-none font-display">
            Contact
          </span>
        </a>
      </li>
    </ul>
  );
}
