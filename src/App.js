import React from "react";
import './App.css';
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./layout/Main";
import Home from "./view/home/Home";


function App() {
  return (
      <Main>
      <Header/> 
      <Home />
      <Footer />
      </Main>
  );
}

export default App;