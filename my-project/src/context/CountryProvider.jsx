import { createContext, useCallback, useState } from "react";

const ProviderContext = createContext();


const CountryProvider = ({children}) =>{
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState(null);

    const fetchCountries = useCallback(async () =>{
        try{
            const response = await fetch("../../db.json");
        const responseData = await response.json();
        
        setCountries(responseData.countries)
        }
        catch{
            setError("Something went wrong! Could not load at the moment")
        }
    }, []);

    const handleCountrySearch = (searchTerm) =>{
        const searchCountries = countries.filter(country=>{
           return country.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setCountries(searchCountries)    
    }

    const valueToShare = {
        countries,
        fetchCountries,
        handleCountrySearch,
    }

    return(
        <ProviderContext.Provider value={valueToShare}>{children}</ProviderContext.Provider>
    )
}

export default ProviderContext;
export {CountryProvider}