// REACT
import React from 'react';

import { ContentContainer } from '../../../components/ContentContainer';
import { TopNavigation } from '../../../components/ContentContainer/TopNavigation';

export function Projects() {
  return (
    <ContentContainer>
      <TopNavigation title="Portfolio" />
      <div className="flex flex-col items-center w-full m-0 p-6 h-[calc(100vh-64px)]">
        <div className="relative w-full min-h-1 px-4">
          <div className="block">
            <div className="grid w-full justify-center gap-10 grid-cols-portfolio auto-cols-portfolio ">
              <div
                className="top-0 left-0 p-2"
                data-groups='["category_all", "category_detailed"]'
              >
                <div className="border-4 border-solid border-white w-60 h-60">
                  <a href="#asdada">
                    <img
                      src="https://lmpixels.com/demo/breezycv/darkfw/1/img/portfolio/2.jpg"
                      alt="Media Project 2"
                      title=""
                      className="relative block w-full"
                    />
                  </a>
                </div>

                <h4 className="block py-4 px-0 text-base relative text-white font-semibold font-display">
                  Detailed Project 2
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
}
