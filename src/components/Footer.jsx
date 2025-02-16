import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center bg-neutral-600 bg-opacity-35 text-neutral-400 py-3 relative">
      <div className="flex items-center justify-center gap-4">
        <Link to={"/"}>About</Link>
        <Link to={"/"}>Contact</Link>
      </div>
      <p>Create With Arun</p>
      <p>&copy; {currentYear} Filmy Willa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
