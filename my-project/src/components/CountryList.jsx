import { useContext } from 'react';
import ProviderContext from '../context/CountryProvider';
import CountryFinder from './CountryFinder';
import CountryShow from './CountryShow'

const CountryList = () => {
    const { countries } = useContext(ProviderContext);


    const renderCountries = countries.map(country => {
        return <CountryShow key={country.name} country={country} />
    });

    return (
        <div className='dark:bg-gray-900'>
            <CountryFinder />
            <div className='grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-8 place-items-center px-8 md:px-3'>
                {renderCountries}
            </div>
        </div>
    )
}

export default CountryList