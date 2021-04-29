import React, { useEffect, useState } from "react";
import Inscription from "./view/inscription/Inscription";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./view/home/Home";
import MarketPlace from "./view/marketplace/MarketPlace";
import Connexion from "./common/components/Connexion";
import UserContext from "./context/user";
import axios from "axios";


function App() {
  const [connectedUser, setConnectedUser] = useState({});

  useEffect (() => {
    const connectUser = async () => {
      const accessToken = localStorage.getItem("userToken");
      if (accessToken) {
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        };

        const userProfile = await axios.get(
          'http://toctoc-api.herokuapp.com/users/profile', config
          );

        setConnectedUser(userProfile.data);
      }
    };

    connectUser();
  }, []);

  return (
    <UserContext.Provider
      value={{connectedUser, setConnectedUser}}>
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
        </Switch>
      </Router>
    </UserContext.Provider>  
  );
}

export default App;
