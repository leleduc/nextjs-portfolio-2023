import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="w-full">
      <div className="relative container flex flex-wrap lg:flex-row-reverse">
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
            <p className="">Hey, I am</p>
            <p>
              Richard Lord <br /> Product Designer
            </p>
          </div>
          <div className="text-[#747681] ">
            Agency work with top rated talented people provide qulaity services.
          </div>

          <div>
            <button className="primaryBtn">
              Hired Me
              <FontAwesomeIcon
                icon={['fas', 'arrow-right']}
                className="icon ml-2"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
