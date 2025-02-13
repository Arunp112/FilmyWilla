import { FaHome } from "react-icons/fa";
import { PiTelevisionBold } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoMdSearch } from "react-icons/io";



export const navigation = [
    {
      label: "TV shows",
      href: "tv",
      icon:<PiTelevisionBold/>,
      
    },
    {
      label: "Movies",
      href: "movie",
      icon:<BiSolidMoviePlay/>,
    },
  ];
   
  export const mobileNavigation=[
      {
          label:"Home",
          href:"/",
          icon:<FaHome/>
      },
      
      ...navigation,
      {
        label:"Search",
        href:"/search",
        icon:<IoMdSearch/>
    },
  ]