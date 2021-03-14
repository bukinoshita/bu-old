import React, { FC } from 'react'
import Image from 'next/image'
import { Transition } from '@headlessui/react'
import pkg from '../package.json'

const Home: FC = () => {
  return (
    <main className="max-w-sm h-screen flex justify-center items-center">
      <Transition
        show={true}
        enter="transition ease-in-out duration-700 transform"
        enterFrom="-translate-x-3 opacity-0"
        enterTo="translate-x-0 opacity-100"
      >
        <Image src="/static/logo.svg" width="48px" height="48px" />
        <h1 className="text-2xl font-normal mt-10">{pkg.author}</h1>
        <h2 className="text-xl text-gray-500 font-normal mt-2">
          {pkg.description}
        </h2>

        <Transition.Child
          enter="transition ease-in-out duration-1000 transform"
          enterFrom="-translate-x-3 opacity-0"
          enterTo="translate-x-0 opacity-100"
        >
          <ul className="flex mt-10">
            <li>
              <a
                className="group flex items-center text-gray-500 tracking-wider text-sm mr-3 hover:text-white transition duration-200 ease-in-out"
                href="https://github.com/bukinoshita"
              >
                github
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1.5 opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                className="group flex items-center text-gray-500 tracking-wider text-sm hover:text-white transition duration-200 ease-in-out"
                href="https://twitter.com/bukinoshita"
              >
                twitter
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1.5 opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </Transition.Child>
      </Transition>
    </main>
  )
}

export default Home
