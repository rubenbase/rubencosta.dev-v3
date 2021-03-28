import React from 'react'

import styles from './BlogSnippet.module.css'
import Link from 'next/link'

const BlogSnippet: React.FC<{ articles?: unknown[] }> = ({ articles }) => {
  return (
    <div className="text-white relative">
      <div className="max-w-2xl mx-auto absolute inset-0 -top-14 rounded-xl">
        <div className="text-center">
          {/* <h1 className="text-black py-2 text-3xl font-bold tracking-tighter">
            Join the newsletter!
          </h1>
        </div>
        <div>
    */}

          <div aria-hidden="true" className="hidden sm:block">
            <svg
              className="absolute -top-12 right-1/2 -ml-3"
              width="380"
              height="292"
              opacity=".1"
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-800"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="392"
                fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
              />
            </svg>
          </div>
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative rounded-2xl px-6 py-8 bg-blue-50 overflow-hidden shadow-xl sm:px-12 sm:py-14">
              <div
                aria-hidden="true"
                className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 1463 360"
                >
                  <path
                    className="text-blue-200 text-opacity-40"
                    fill="currentColor"
                    d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                  />
                  <path
                    className="text-blue-300 text-opacity-40"
                    fill="currentColor"
                    d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                  />
                </svg>
              </div>
              <div className="relative">
                <div className="sm:text-center">
                  <h2 className="text-3xl font-extralight text-gray-800 tracking-tight sm:text-4xl">
                    Sign up for the newsletter
                  </h2>
                </div>
                <form action="#" className="mt-8 sm:mx-auto sm:max-w-lg sm:flex">
                  <div className="min-w-0 flex-1">
                    <label for="cta_email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="cta_email"
                      type="email"
                      className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      disabled
                      className="cursor-not-allowed block w-full rounded-md border border-transparent px-5 py-3 bg-gray-800 text-base font-medium text-white shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-500 sm:px-10"
                    >
                      {/* Notify me */}
                      Coming soon
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.svgContainerBg}>
        <svg className="block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
          <path
            fill="#040d21"
            fillOpacity="1"
            d="M0,128L120,112C240,96,480,64,720,64C960,64,1200,96,1320,112L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className={`${styles.blogSnippetContainer} h-full pb-36`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-6xl flex justify-center flex-col text-center pt-48 md:pt-36 lg:pt-10">
            <div className="mb-6 mt-5 text-base uppercase tracking-widest">
              explore my stuff
            </div>
            <span className={`${styles.stepOneLine} pt-20`} />
            <h1 className="font-bold tracking-tight leading-none">
              Read the latest
              <br />
              <span className={styles.articlesTitle}>Articles</span>
            </h1>
          </div>
          <div className="max-w-6xl mt-20 mx-auto">
            <div className="grid grid-rows-6 grid-flow-col gap-4 mx-4">
              <div
                className={`${styles.coverImage} mr-2 col-span-4 row-span-6 rounded-3xl relative transform transition duration-200 hover:scale-105 cursor-pointer`}
                style={{
                  backgroundImage: `url(${articles[0].url})`,
                }}
              >
                <div className="absolute bottom-0 p-8">
                  <h1 className="text-3xl font-bold">{articles[0].title}</h1>
                </div>
              </div>

              <div
                className={`${styles.coverImage} bg-pink-500 col-span-3 h-64 row-span-3 rounded-3xl relative transform transition duration-200 hover:scale-105 cursor-pointer`}
                style={{
                  backgroundImage: `url(${articles[1].url})`,
                }}
              >
                <div className="absolute bottom-0 p-8">
                  <h1 className="text-3xl font-bold">{articles[1].title}</h1>
                </div>
              </div>
              <div
                className={`${styles.coverImage} bg-pink-500 col-span-3 row-span-3 rounded-3xl relative transform transition duration-200 hover:scale-105 cursor-pointer`}
                style={{
                  backgroundImage: `url(${articles[2].url})`,
                }}
              >
                <div className="absolute bottom-0 p-8">
                  <h1 className="text-3xl font-bold">{articles[2].title}</h1>
                </div>
              </div>
            </div>
          </div>
          {/* read all */}
          <div className="max-w-6xl mt-12 mx-auto w-full px-4 flex">
            <Link href="#">
              <a className="uppercase tracking-widest text-sm hover:opacity-80 cursor-pointer mr-2">
                View all articles
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
    // <div className="text-white">
    //   <div className="block h-40">
    //     {/* <svg
    //       className="relative block"
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 1440 320"
    //     >
    //       <path
    //         fill="#040d21"
    //         fillOpacity="1"
    //         d="M0,128L120,112C240,96,480,64,720,64C960,64,1200,96,1320,112L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
    //       ></path>
    //     </svg> */}
    //   </div>
    //   <div className={`${styles.blogSnippetContainer} relative block mt-52`}>
    //     <div className="max-w-7xl my-20 mx-auto">
    //       <div className="-mt-36 text-6xl text-center">
    //         <h1 className="font-bold tracking-tight leading-none">
    //           Read my latest
    //           <br />
    //           <span className={styles.articlesTitle}>articles</span>
    //         </h1>
    //       </div>
    //       <div className="max-w-6xl mt-20 mx-auto">
    //         <div className="grid grid-rows-4 grid-flow-col gap-4">
    //           <div className="bg-pink-500 col-span-4 h-96 row-span-4 ">1</div>
    //           <div className="bg-pink-500 col-span-3 row-span-2">2</div>
    //           <div className="bg-pink-500 col-span-3 row-span-2">3</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

BlogSnippet.defaultProps = {
  articles: [
    {
      id: 1,
      title: 'Improve react performance',
      url: 'https://miro.medium.com/max/1400/0*iKPIbXqO_GjrJAKX',
    },
    {
      id: 2,
      title: 'Service workers in action',
      url: 'https://miro.medium.com/max/4872/1*oOcY2Gn-LVt1h-e9xOv5oA.jpeg',
    },
    {
      id: 3,
      title: 'Responsive CSS Grid layouts',
      url: 'https://i.pinimg.com/originals/46/ed/1e/46ed1ea7060089aa46ec32af3d1eb55b.png',
    },
  ],
}

export default BlogSnippet
