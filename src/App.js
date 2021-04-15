import React from "react";
import './App.css';
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./layout/Main";
import Home from "./view/home/Home";
import Accroche from "./view/home/Accroche";
import MarketPlace from "./view/marketplace/MarketPlace";


function App() {
  return (
    <div className="App">
      <Main>
      <Header/> 
      <Accroche />
      <Home />
      <Footer />
      </Main>
      <MarketPlace />
    </div>
  );
}

export default App;