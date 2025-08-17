import React from "react";
import {logoICO} from "../assets/assets"
export default function Footer() {
  return (
    <footer className="pb-4 text-gray-200">
      <div className="max-w-5xl xl:max-w-5xl mx-auto divide-y divide-gray-900 px-4 sm:px-6 md:px-8">
        <ul className="text-sm font-medium sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
          <li className="space-y-5 row-span-2">
            <img src={logoICO} className="h-25 w-25" alt="Devonboard Logo" />
            <p>Developers Onboard</p>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="text-xl tracking-wide text-white">Related Documents</h2>
            <ul className="space-y-4">
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-xl" target="_blank"
                  href="https://drive.google.com/file/d/1v0rJupAbZ0D8T29oizvLtEar90GS2T9O/view?usp=sharing"
                >
                  T&C
                </a>
              </li>
            </ul>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="text-2xl tracking-wide text-white">Get Help</h2>
            <ul className="space-y-4">
              <li>
                <p
                  className="hover:text-white transition-colors duration-200 text-lg"
                >
                  contact@devonboard.site
                </p>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-lg"
                  href="https://calendly.com/devonboard/30min" target="_blank"
                >
                  Book session
                </a>
              </li>
            </ul>
          </li>
          <li className="space-y-5">
            <h2 className="text-2xl tracking-wide text-white">Connect</h2>
            <ul className="space-y-4">
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="https://x.com/_devonboard" target="_blank"
                >
                  X-Twitter
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="https://github.com/developers-onboard" target="_blank"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 font-semibold text-xl"
                  href="https://www.instagram.com/devonboard_/#" target="_blank"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black">
          {/* <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Ad Choices
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Cookie Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Partners
              </a>
            </li>
          </ul> */}
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <a
              href="/"
              className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight"
            >
              © 2025 Devonboard Inc.
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}
