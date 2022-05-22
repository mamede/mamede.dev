// REACT
import React from 'react';

import { ContentContainer } from '../../components/ContentContainer';
import { TopNavigation } from '../../components/ContentContainer/TopNavigation';

export function Portfolio() {
  return (
    <ContentContainer>
      <TopNavigation title="Portfolio" />
      <div className="flex flex-col items-center h-full w-full mt-0 ml-0 mx-auto p-6 min-h-screen">
        <div className="relative w-full min-h-1 px-4">
          {/* Portfolio Content */}
          <div className="block">
            <ul className="mb-8 list-none">
              <li className="inline-block mr-4 text-sm opacity-70 active:opacity-100">
                <a
                  className="text-gray-400 active:text-green-500 hover:text-green-500"
                  data-group="category_all"
                >
                  All
                </a>
              </li>
              <li className="inline-block mr-4 text-sm opacity-70 active:opacity-100">
                <a
                  className="text-gray-400 active:text-green-500 hover:text-green-500"
                  data-group="category_web"
                >
                  Web
                </a>
              </li>
              <li className="inline-block mr-4 text-sm opacity-70 active:opacity-100">
                <a
                  className="text-gray-400 active:text-green-500 hover:text-green-500"
                  data-group="category_mobile"
                >
                  Mobile
                </a>
              </li>
            </ul>

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
              </div>{' '}
            </div>
          </div>
          {/*  End of Portfolio Content */}
        </div>
      </div>
    </ContentContainer>
  );
}
