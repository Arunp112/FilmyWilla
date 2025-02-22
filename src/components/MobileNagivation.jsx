import React from "react";
import { mobileNavigation } from "../constants/navigation";
import { NavLink } from "react-router-dom";
import { IconButton } from "@mui/material";

const MobileNagivation = () => {
  return (
    <section className="lg:hidden h-14 bg-black bg-opacity-60 backdrop-blur-2xl fixed bottom-0 w-full z-40">
      <div className="flex items-center justify-between h-full px-3 text-neutral-400">
        {mobileNavigation.map((nav, index) => (
          <NavLink
            key={nav.label + "mobilenavigation"}
            to={nav.href}
            className={({ isActive }) =>
              `PX-4  flex flex-col h-full items-center justify-center text-sm ${
                isActive && "text-white"
              }`
            }
          >
            <div className="text-xl">{nav.icon}</div>
            <p>{nav.label}</p>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default MobileNagivation;
