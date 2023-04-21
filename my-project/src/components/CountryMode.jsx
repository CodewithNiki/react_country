import {FaRegMoon} from "react-icons/fa";
import { useState, useEffect } from "react";

const CountryMode = () => {
  const [theme, setTheme] = useState("light")

  useEffect(()=>{
    if(theme === "dark"){
      document.documentElement.classList.add("dark")
    }
    else(      
      document.documentElement.classList.remove("dark")
    )
  }, [theme]);

  const handleThemeChange = () =>{
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="flex justify-between items-center h-20 py-3 px-8 bg-white dark:bg-gray-800 sm:text-xl dark:text-white">
        <h4 className="font-bold">Where in the world?</h4>
        <p className="flex cursor-pointer " onClick={handleThemeChange}><FaRegMoon className="mr-1 mt-1"/>Dark mode</p>
    </div>
  )
}

export default CountryMode