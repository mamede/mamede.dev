// REACT
import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import { ContentContainer } from '../../components/ContentContainer';
import { TopNavigation } from '../../components/ContentContainer/TopNavigation';

export function Portfolio() {
  return (
    <ContentContainer>
      <TopNavigation title="Portfolio" />
      <div className="flex flex-col items-center w-full m-0 p-6 h-[calc(100vh-64px)]">
        <div className="relative w-full min-h-1 px-4">
          <div className="block">
            <Tabs>
              <TabList className="mb-8 list-none">
                <Tab className="inline-block mr-4 text-sm opacity-70 active:opacity-100 text-gray-400 active:text-green-500 hover:text-green-500">
                  All
                </Tab>
                <Tab className="inline-block mr-4 text-sm opacity-70 active:opacity-100 text-gray-400 active:text-green-500 hover:text-green-500">
                  Web
                </Tab>
                <Tab className="inline-block mr-4 text-sm opacity-70 active:opacity-100 text-gray-400 active:text-green-500 hover:text-green-500">
                  Mobile
                </Tab>
              </TabList>
              <TabPanel>
                <div className="grid w-full justify-center gap-10 grid-cols-portfolio auto-cols-portfolio">
                  <div className="top-0 left-0 p-2">
                    <div className="border-4 border-solid border-white w-60 h-60">
                      <Link to="/portfolio/projects/teste">
                        <img
                          src="https://lmpixels.com/demo/breezycv/darkfw/1/img/portfolio/2.jpg"
                          alt="Media Project 2"
                          title=""
                          className="relative block w-full"
                        />
                      </Link>
                    </div>

                    <h4 className="block py-4 px-0 text-base relative text-white font-semibold font-display">
                      All
                    </h4>
                  </div>
                  <div className="top-0 left-0 p-2">
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
                      All
                    </h4>
                  </div>
                  <div className="top-0 left-0 p-2">
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
                      All
                    </h4>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid w-full justify-center gap-10 grid-cols-portfolio auto-cols-portfolio">
                  <div className="top-0 left-0 p-2">
                    <div className="border-4 border-solid border-white w-60 h-60">
                      <Link to="/portfolio/projects/teste">
                        <img
                          src="https://lmpixels.com/demo/breezycv/darkfw/1/img/portfolio/2.jpg"
                          alt="Media Project 2"
                          title=""
                          className="relative block w-full"
                        />
                      </Link>
                    </div>

                    <h4 className="block py-4 px-0 text-base relative text-white font-semibold font-display">
                      Web
                    </h4>
                  </div>
                  <div className="top-0 left-0 p-2">
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
                      Web
                    </h4>
                  </div>
                  <div className="top-0 left-0 p-2">
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
                      Web
                    </h4>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid w-full justify-center gap-10 grid-cols-portfolio auto-cols-portfolio">
                  <div className="top-0 left-0 p-2">
                    <div className="border-4 border-solid border-white w-60 h-60">
                      <Link to="/portfolio/projects/teste">
                        <img
                          src="https://lmpixels.com/demo/breezycv/darkfw/1/img/portfolio/2.jpg"
                          alt="Media Project 2"
                          title=""
                          className="relative block w-full"
                        />
                      </Link>
                    </div>

                    <h4 className="block py-4 px-0 text-base relative text-white font-semibold font-display">
                      Mobile
                    </h4>
                  </div>
                  <div className="top-0 left-0 p-2">
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
                      Mobile
                    </h4>
                  </div>
                  <div className="top-0 left-0 p-2">
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
                      Mobile
                    </h4>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
}
