import React from "react";
import ThreeD from "./ThreeD";
import {
  ImFilePicture,
  ImAndroid,
  ImCloudCheck,
  ImPhone,
} from "react-icons/im";
import { taksh, staywow } from "../assets/assets";
import Contact from "./Contact"

export default function Main() {
  return (
    <section class="text-gray-600 body-font">
      <div class="max-w-5xl pt-52 pb-24 mx-auto">
        <h1 class="text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
          Turning ideas into impactful websites.
        </h1>
        <h2 class="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-700 text-center">
          Helping your business launch, grow, and stand out online.
        </h2>
        <div className="ml-6 text-center">
          <a
            className="inline-flex items-center py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-transparent bg-white px-7 text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline"
            href="https://calendly.com/devonboard/30min" target="_blank"
          >
            <div className="flex text-lg">
              <span className="justify-center">BOOK SESSION</span>
            </div>
          </a>
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto object-cover object-center w-4/6 h-2/4  border shadow-md g327">
        <ThreeD />
      </div>
      <h2
        id="about"
        className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl"
      >
        Clean and tidy code.
      </h2>
      <br></br>
      <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
        We write code that works today and scales tomorrow — clean,
        maintainable, and future-proof.
      </p>

      {/**4 Card Section */}
      <div className="pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3">
        <div class="ktq4">
          <ImFilePicture className="w-60 h-13 m-10" />
          <h3 class="pt-3 font-semibold text-lg text-white">
            Scalable, Future-Proof Solutions
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            We build websites with modern frameworks and modular architecture,
            ensuring they handle your current needs while remaining easy to
            expand as your business grows.
          </p>
        </div>
        <div class="ktq4">
          <ImAndroid className="w-60 h-13 m-10" />
          <h3 class="pt-3 font-semibold text-lg text-white">
            Pixel-Perfect, User-Centric Design
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Every website we deliver is crafted for a seamless user experience,
            blending visual appeal with intuitive navigation to keep your
            audience engaged.
          </p>
        </div>
        <div class="ktq4">
          <ImCloudCheck className="w-60 h-13 m-10" />
          <h3 class="pt-3 font-semibold text-lg text-white">
            Optimized for Performance & SEO
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            From lightning-fast load speeds to search engine optimization, we
            ensure your site ranks well, loads quickly, and converts visitors
            into customers.
          </p>
        </div>
        <div class="ktq4">
          <ImPhone className="w-60 h-13 m-10" />
          <h3 class="pt-3 font-semibold text-lg text-white">
            Transparent Process & Ongoing Support
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            We keep you informed at every stage of development and offer
            post-launch support, ensuring your website stays secure, updated,
            and effective.
          </p>
        </div>
      </div>

      {/**CARD Section - 2 */}
      <h2
        id="pricing"
        className="pt-20 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl"
      >
        Pricing Our Craft
      </h2>
      <br></br>
      <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
        We write code that works today and scales tomorrow — clean,
        maintainable, and future-proof.
      </p>
      <div className="pt-15 pb-32 max-w-6xl mx-auto fsac4 md:px-1 px-3">
        <div class="ktq4">
          <h3 class="pt-3 font-semibold text-4xl text-white">$ 225</h3>
          <h3 class="pt-5 font-semibold text-xl text-white">Ecommerce store</h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            We build e-commerce stores that load fast, convert better, and scale
            effortlessly — powered by secure, modern tech stacks. From
            pixel-perfect design to seamless checkout flows, every detail is
            optimized to turn visitors into loyal customers.
          </p>
        </div>
        <div class="ktq4">
          <h3 class="pt-3 font-semibold text-4xl text-white">$ 300+</h3>
          <h3 class="pt-5 font-semibold text-xl text-white">Custom Websites</h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            We craft fully custom websites tailored to your brand, goals, and
            audience — no cookie-cutter templates, ever. Every line of code is
            optimized for performance, scalability, and a seamless user
            experience.
          </p>
        </div>
        <div class="ktq4">
          <h3 class="pt-3 font-semibold text-4xl text-white">$ 60</h3>
          <h3 class="pt-5 font-semibold text-xl text-white">
            Single Page/ Marketing Page
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            We design high-impact single-page and marketing sites that grab
            attention, load instantly, and drive conversions. Built with sleek
            visuals, persuasive copy, and mobile-first performance to make every
            visitor take action.
          </p>
        </div>
        <div class="ktq4">
          <h3 class="pt-3 font-semibold text-4xl text-white">$ 100+</h3>
          <h3 class="pt-5 font-semibold text-xl text-white">Web Apps</h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            We develop powerful, scalable web applications with clean
            architecture and seamless user experiences. From dashboards to
            complex SaaS platforms, our apps are built for performance,
            security, and future growth.
          </p>
        </div>
      </div>

      {/** Works Section */}
      <h2
        id="work"
        className="pt-20 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl"
      >
        Our Works
      </h2>
      <br></br>
      <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
        Our portfolio showcases the transformation of ideas into impactful digital platforms, 
        <br />
        designed to help brands grow, engage, and succeed online..
      </p>
      <div className="pt-32 pb-32 max-w-6xl mx-auto fsac4 md:px-1 px-3">
        <div class="ktq4">
          <a target="_blank" href="https://www.taksh.store">
            <img src={taksh}></img>
          </a>

          <h3 class="pt-3 font-semibold text-2xl text-white">
            <a target="_blank" href="https://www.taksh.store">
              Taksh.store
            </a>
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            A modern e-commerce store with sleek product displays and smooth
            navigation. Optimized checkout for faster, secure payments. Fully
            responsive design for seamless shopping on any device.
          </p>
        </div>
        <div class="ktq4">
          <a target="_blank" href="https://staywow.netlify.app">
            <img src={staywow}></img>
          </a>

          <h3 class="pt-3 font-semibold text-lg text-white">
            <a target="_blank" href="https://staywow.netlify.app">
              Stay Wow
            </a>
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            A stylish salon website showcasing services, offers, and pricing.
            Built with an elegant, user-friendly layout. Responsive design for
            easy browsing and bookings on all devices.
          </p>
        </div>
      </div>

    <Contact/>
    </section>
  );
}
