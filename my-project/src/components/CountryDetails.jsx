import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ProviderContext from "../context/CountryProvider";
import { Link } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi"

const CountryDetails = () => {
    const [country, setCountry] = useState(null);
    const { countries } = useContext(ProviderContext);
    const { name } = useParams();


    useEffect(() => {
        countries.map((country) => {
            if (country.name === name) {
                setCountry(country)
            }
        });
    }, [name]);

    return <div className="py-3 px-8">
        <Link to="/" className="border py-2 flex items-center justify-center w-32 md:w-2/12 bg-white shadow"><BiLeftArrowAlt />Back</Link>
        <div>
            <img src={country?.flags.svg} />
            <div>
                <h4>{country?.name}</h4>
                <div>
                    <p><strong className=" mr-3">Native Name:</strong> {country?.name}</p>
                    <p><strong className=" mr-3">Population:</strong> {country?.population}</p>
                    <p><strong className=" mr-3">Region:</strong> {country?.region}</p>
                    <p><strong className=" mr-3">Sub Region:</strong> {country?.subregion}</p>
                    <p><strong className=" mr-3">Capital:</strong> {country?.capital}</p>
                    <p><strong className=" mr-3">Top Level Domain:</strong>  {country?.topLevelDomain}</p>
                    <ul className="flex"><strong className=" mr-3">Currencies:</strong>{country?.currencies.map((currency, index) => {
                        return <li key={index}>{currency.name}</li>
                    })}
                    </ul>
                    <ul className="flex"><strong className=" mr-3">Languages:</strong>{country?.languages.map((language, index) => {
                        return <li key={index}>{language.name}</li>
                    })}
                    </ul>
                </div>
                <ul className="flex"><strong className=" mr-3">Border Countries:</strong>{country?.borders.map((border, index) => {
                    return <li key={index} className="border mr-4 py-2 px-4">{border}</li>
                })}
                </ul>
            </div>
        </div>
    </div>;
};

export default CountryDetails;
