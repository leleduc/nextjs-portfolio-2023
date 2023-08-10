import Image from 'next/image';
import React from 'react';

const Skills = () => {
  return (
    <div className="w-full">
      <div className="relative container flex flex-wrap">
        <div className="relative w-full lg:w-[50%] flex justify-center items-center">
          <Image
            alt="hero image"
            className="items-center"
            width={800}
            height={800}
            src={'/hero-figma.png'}
          />
        </div>
        <div className="relative w-full lg:w-[50%] flex flex-col justify-center items-center gap-10 my-10">
          <div className="relative w-full flex-col justify-center items-center text-center font-roboto text-4xl font-bold text-blue-900">
            <p>My Journey As A Product Designer</p>
          </div>
          <div className="text-[#747681] text-center">
            Hello there! My name is Robert Elisc. I am a web designer &
            developer, and I’m very passionate and dedicated to my work. With 20
            years experience as a professional a graphic designer,
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
