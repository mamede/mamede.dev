// REACT
import React from 'react';

import { ContentContainer } from '../../components/ContentContainer';
import { TopNavigation } from '../../components/ContentContainer/TopNavigation';
import { SocialMedia } from '../../components/SocialMedia';

export function Home() {
  return (
    <ContentContainer>
      <TopNavigation title="Home" />
      <div className="flex flex-col w-full my-0 mx-auto pt-48 p-6 h-[calc(100vh-64px)]">
        <div className="relative w-44 mt-0 mx-auto mb-8 z-10">
          <img
            className="max-w-full border-4 border-transparent border-0 block rounded-animated animate-avatar"
            src="https://github.com/mamede.png"
            alt="Felipe Mamede"
          />
          <div className="absolute rounded-animated animate-avatar top-0 bottom-0 left-0 right-0 shadow-animate" />
        </div>
        <div className="flex flex-col items-center justify-start  p-1 m-0 font-display">
          <h2 className="text-3xl font-semibold	text-neutral-100 my-0 mt-1 mb-2">
            Felipe Mamede
          </h2>
          <h4 className="text-lg font-light text-[#bbb] my-1 mx-0">
            Desenvolvedor Front end e Mobile
          </h4>
        </div>
        <SocialMedia />
        <div className="text-[#bbb] text-xs text-center mt-auto">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </ContentContainer>
  );
}
