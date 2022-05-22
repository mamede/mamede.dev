// REACT
import React from 'react';

import { SocialMedia } from '../SocialMedia';
import { Content } from './Content';

export function Profile() {
  return (
    <div
      className="w-96 bg-gray-800 overflow-hidden shadow-lg 
      pt-16 pr-8 pb-11 pl-8"
    >
      <Content />
      <div
        className="flex flex-col items-center justify-start 
    p-1 m-0 font-display"
      >
        <h2 className="text-3xl font-semibold	text-neutral-100 my-0 mt-1 mb-2">
          Felipe Mamede
        </h2>
        <h4 className="text-lg font-light text-[#bbb] my-1 mx-0">
          Desenvolvedor Front end e Mobile
        </h4>
      </div>
      <SocialMedia />
      <div className=" text-[#bbb] text-xs text-center">
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </div>
  );
}
