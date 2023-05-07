import CountryFinder from "./components/CountryFinder";
import CountryInfo from "./components/CountryInfo";
import SocialMedia from "./components/SocialMediaLinks";
import CountryProvider from "./context/CountryProvider";

import './css/App.css'

const App = () => {
  return (
    <CountryProvider>
      <div className="app">
        <CountryFinder />
        <CountryInfo />
        <SocialMedia />
      </div>
    </CountryProvider>
  );
};

export default App;
