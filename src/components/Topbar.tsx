import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

const Topbar = () => {
  library.add(fab, fas);
  return (
    <div className="topbar">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-9">
          <div className="flex justify-between items-center gap-2">
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              className="icon text-blue"
            />
            <span>leleduc@gmail.com</span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <FontAwesomeIcon
              icon={["fas", "phone"]}
              className="icon text-blue"
            />
            <span>+84 918 983 869</span>
          </div>
        </div>
        <div className="flex justify-end items-center gap-6">
          <FontAwesomeIcon
            icon={["fab", "facebook-f"]}
            className="icon social"
          />
          <FontAwesomeIcon icon={["fab", "twitter"]} className="icon social" />
          <FontAwesomeIcon icon={["fab", "youtube"]} className="icon social" />
          <FontAwesomeIcon icon={["fab", "linkedin"]} className="icon social" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
