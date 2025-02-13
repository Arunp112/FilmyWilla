import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
// import { Navigate } from "react-router-dom";
import { navigation } from "../constants/navigation";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (searchInput) {
      navigate(`/search?q=${searchInput}`);
    }
  }, [searchInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <header className="fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75">
      <div className="container mx-auto px-2 flex items-center h-full">
        <div className="font-bold text-lg">
          <Link to={"/"}>
            <span className="text-orange-600">
              Filmy<span className="text-blue-600">Willa</span>
            </span>
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-4 ml-6">
          {navigation.map((nav, index) => (
            <div>
              <NavLink
                key={nav.label}
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
          {/* <div >
                </div> */}
          <div className="cursor-pointer active:scale-50 transition-all">
            <FaRegUserCircle className="text-white text-2xl hover:text-neutral-300 " />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
