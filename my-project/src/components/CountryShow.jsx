import { Link } from "react-router-dom"

const CountryShow = ({ country }) => {
  return (
    <Link to={`/${country.name}`}>
      <div className="w-80 h-80 shadow dark:bg-gray-800 dark:border-gray-900 border-2 rounded-md">
        <img src={country.flags.svg} alt={country.name} className="w-80 h-40 object-cover" />
        <div className="pl-8 pt-6">
          <h4 className="text-xl mb-2 font-bold">{country.name}</h4>
          <p><strong>Population: </strong>{country.population}</p>
          <p><strong>Region: </strong>{country.region}</p>
          <p><strong>Capital: </strong>{country.capital}</p>
        </div>
      </div>
    </Link>
  )
}

export default CountryShow