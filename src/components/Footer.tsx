import React from "react";
import { logoData, socialData } from "@/api/data";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  library.add(fab);
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="container mx-auto flex flex-col">
        <div className="flex flex-col">
          {/* Logo */}
          <div className="logo text-white">{logoData.title}</div>

          {/* Slogan */}
          <p>{logoData.slogan}</p>

          {/* Social */}
          <div>
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
        <div>
          <h2>Links</h2>
        </div>
        <div>
          <h2>Services</h2>
        </div>
        <div>
          <h2>Official info:</h2>
        </div>
      </div>
      <div className="w-full bg-gray-500 h-[1px]"></div>
      <div className="container mx-auto">
        <span>Copyright © {currentYear} - All Rights Reserved.</span>
        <span>Made by {logoData.title}</span>
      </div>
    </div>
  );
};

export default Footer;
