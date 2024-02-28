import React from 'react';
import zlatnirat from '../assets/zlatnirat4.jpg';
import zlatnirat2 from '../assets/zlatnirat1.jpg';
import house from '../assets/house.jpg';
import bol from '../assets/bol.jpg';
import bol1 from '../assets/bol1.jpg';

import { motion } from 'framer-motion';

import EmblaCarousel from '../components/EmblaCarousel';
import CheckAvailability from '../components/CheckAvailability';

const Home = () => {
  const OPTIONS = { loop: true };
  const SLIDE_COUNT = 3;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div className="bg-[#181C25] mr-10 w-full flex flex-col items-center justify-center scroll-auto no-scrollbar  overflow-hidden">
      <motion.div
        animate={{ x: 375 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className=" h-[250px] w-full mt-2 p-5 gap-5"
      >
        <h1 className="relative left-10 text-8xl text-[#CB9D74]">
          {' '}
          Welcome to{' '}
        </h1>
        <h1 className="relative left-10 text-8xl text-[#CB9D74]">
          {' '}
          Apartments Lolita
        </h1>
      </motion.div>

      <EmblaCarousel slides={SLIDES} options={OPTIONS} className="h-[400px]" />
      <CheckAvailability />
      <div className="w-full flex flex-col gap-y-6 ">
        <motion.div
          className=" h-[300px] w-4/5 border-b-2 border-[#CB9D74] flex justify-between items-center gap-5 "
          animate={{ x: 100 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <img
            src={bol1}
            alt="Bol 1"
            className=" h-[280px] rounded-sm border-2 border-[#CB9D74]"
          />

          <motion.div
            className="flow-root"
            animate={{ x: 100 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <p className=" w-[80%] h-full text-2xl text-[#CB9D74] ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
              atque facere eveniet rem accusantium in eaque corrupti vitae
              maxime ab, veniam accusamus! Corporis esse praesentium,
              repudiandae quibusdam cumque repellendus voluptatibus?Zlatni Rat -
              Zlatni rat je Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Omnis, atque facere eveniet rem accusantium in eaque
              corrupti vitae maxime ab, veniam accusamus! Corporis esse
              praesentium, repudiandae quibusdam cumque repellendus
              voluptatibus?Zlatni Rat - Zlatni rat je raj
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
