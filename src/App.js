import React from "react";
import Main from "./layout/Main";
import Home from "./view/home/Home";
import MarketPlace from "./view/marketplace/MarketPlace";
import Connexion from "./common/components/Connexion";
import Inscription from "./view/inscription/Inscription";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
<<<<<<< HEAD
    
=======
    <Router>
      <Switch>
        <Route exact path="/" render={() => (
          <Main>
              <Home />
          </Main>
        )} />
          <Route exact path="/marketplace" render={() => (
          <Main>
              <MarketPlace />
          </Main>
        )} />
        <Route exact path="/connexion" render={() => (
          <Main>
              <Connexion />
          </Main>
        )} />
        <Route exact path="/inscription" render={() => (
          <Main>
              <Inscription />
          </Main>
        )} />
      </Switch>
    </Router>
>>>>>>> origin/dev
  );
}

export default App;
