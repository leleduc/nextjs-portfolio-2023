import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="w-full">
      <div className="relative container flex flex-wrap">
        <div className="relative w-full">
          <Image
            alt="hero image"
            className="items-center"
            width={800}
            height={800}
            src={'/hero-figma.png'}
          />
        </div>
        <div className="relative w-full">
          <div>
            <p>Hey, I am</p>
            <p>
              Richard Lord <br /> Product Designer
            </p>
          </div>
          <div>
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
