import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./layout/Main";
import Home from "./view/home/Home";
import Accroche from "./view/home/Accroche";
import MarketPlace from "./view/marketplace/MarketPlace";
import Connexion from "./common/components/Connexion";
import FlatCardList from "./common/components/FlatCardList";

function App() {
  return (
    <div className="App">
      <Main>
        <Header />
        {/*<Accroche />
        <Home />
        <Connexion />*/}
        
        <MarketPlace />
        <FlatCardList />
        <Footer />
      </Main>
    </div>
  );
}

export default App;
