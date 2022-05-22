// REACT
import React from 'react';

import { SocialMedia } from '../SocialMedia';
import { Content } from './Content';

export function Profile() {
  return (
    <div
      className="w-96 min-w-fit min-h-screen m-0 ml-16 bg-gray-800
    overflow-hidden shadow-lg pt-16 pr-8 pb-11 pl-8 shadow-lg"
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
      <div
        className="w-96 absolute bottom-0 left-0 text-[#bbb]
      px-3 pt-1 pb-4 text-xs text-center ml-16
      "
      >
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </div>
  );
}
