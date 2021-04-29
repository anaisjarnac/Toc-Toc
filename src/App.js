import React from "react";
import Inscription from "./view/inscription/Inscription";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./view/home/Home";
import MarketPlace from "./view/marketplace/MarketPlace";
import Connexion from "./common/components/Connexion";
import AddFlat from "./view/addflat/AddFlat";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Main>
              <Home />
            </Main>
          )}
        />
        <Route
          exact
          path="/marketplace"
          render={() => (
            <Main>
              <MarketPlace />
            </Main>
          )}
        />
        <Route
          exact
          path="/connexion"
          render={() => (
            <Main>
              <Connexion />
            </Main>
          )}
        />
        <Route
          exact
          path="/inscription"
          render={() => (
            <Main>
              <Inscription />
            </Main>
          )}
        />
        <Route
          exact
          path="/flat"
          render={() => (
            <Main>
              <AddFlat />
            </Main>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
