import { FaAngleDown, FaSearch } from "react-icons/fa";
import { useContext, useState } from "react";
import ProviderContext from "../context/CountryProvider";

const CountryFinder = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { handleCountrySearch } = useContext(ProviderContext)
   

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };



    return (
        <div className="flex justify-between items-center w-full h-20 py-3 px-8 sm:text-xl dark:text-white">
            <div className="lg:w-1/3 w-1/2 flex items-center p-2 bg-white dark:bg-gray-800 h-12 mr-3 relative">
                <FaSearch />
                <input type="text" value={searchTerm} placeholder='Search for a country' className="outline-none bg-inherit absolute top-0 right-0 h-full w-11/12 pl-4 cursor-pointer" onChange={handleSearchChange} onClick={(() => handleCountrySearch(searchTerm))} />
            </div>
            <div className="lg:w-1/4 w-1/2 py-2 px-4 bg-white dark:bg-gray-800 h-12">
                <div className="flex items-center justify-between">Filter By Region
                    <FaAngleDown className="ml-2" />
                </div>
                {/* <ul class="select-options display">
                    <li>Africa</li>
                    <li>Americas</li>
                    <li>Asia</li>
                    <li>Europe</li>
                    <li>Oceania</li>
                </ul> */}
            </div>
        </div>
    )
}

export default CountryFinder