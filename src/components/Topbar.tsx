import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

const Topbar = () => {
  library.add(fab);
  return (
    <div className="container mx-auto">
      <div>
        <div>
          <div>leleduc@gmail.com</div>
          <div>+84 918 983 869</div>
        </div>
        <div>
          test
          <FontAwesomeIcon icon={['fab', 'facebook-f']} className="w-6 h-6" />
          <FontAwesomeIcon icon={['fab', 'twitter']} />
          <FontAwesomeIcon icon={['fab', 'youtube']} />
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
