import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { navigation } from "../constants/navigation";
import { useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ");
  const [searchInput, setSearchInput] = useState(removeSpace);
  

  useEffect(() => {
    if (searchInput) {
      navigate(`/search?q=${searchInput}`);
    }
  }, [searchInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header className="fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40">
      <div className="container mx-auto px-2 flex items-center h-full">
        <div className="font-bold text-lg">
          <Link to={"/"}>
            <span className="text-orange-600 font-serif">
              Filmy<span className="text-blue-600">Willa</span>
            </span>
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-4 ml-6">
          {navigation.map((nav, index) => (
            <div key={index}>
              {" "}
              {/* Add key here to the parent div */}
              <NavLink
                to={nav.href}
                className={({ isActive }) =>
                  `px-2 hover:text-neutral-100 ${
                    isActive && "text-neutral-100"
                  }`
                }
              >
                {nav.label}
              </NavLink>
            </div>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-5 ">
          <form className="flex items-center gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search here"
              className="bg-transparent px-4 py-1  hidden lg:block"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
            <button className="text-2xl cursor-pointer">
              <IoMdSearch />
            </button>
          </form>
          <div className="cursor-pointer active:scale-50 transition-all">
            <FaRegUserCircle className="text-white text-2xl hover:text-neutral-300 " />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
