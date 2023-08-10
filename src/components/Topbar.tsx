import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { socialData, contactData } from "@/api/data";
import Link from "next/link";

const Topbar = () => {
  library.add(fab, fas);
  return (
    <div className="topbar">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-9">
          {contactData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center gap-2"
            >
              <FontAwesomeIcon
                icon={["fas", item.icon]}
                className="icon text-blue-500"
              />
              <span className="text-gray-400">{item.data}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-end items-center gap-6">
          {socialData.map((item, index) => (
            <Link key={index} href={item.url}>
              <FontAwesomeIcon
                icon={["fab", item.icon]}
                className="icon social"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
