import { useContext, useEffect } from "react";
import ProviderContext from "./context/CountryProvider";
import CountryList from "./components/CountryList";
import CountryMode from "./components/CountryMode";
import CountryDetails from "./components/CountryDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const { fetchCountries } = useContext(ProviderContext);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries])

  return (
    <BrowserRouter>
    <CountryMode/>
    <Routes>
      <Route path="/" element={<CountryList/>}/>
      <Route path="/:name" element={<CountryDetails/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App