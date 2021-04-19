import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./layout/Main";
import Home from "./view/home/Home";
import MarketPlace from "./view/marketplace/MarketPlace";
import Connexion from "./common/components/Connexion";

function App() {
  return (
    <div className="App">
      <Main>
        <Header />
        <Home />
        {/*<Connexion />
         <MarketPlace />*/}
        <Footer />
      </Main>
    </div>
  );
}

export default App;
