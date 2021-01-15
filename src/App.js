import React, { createContext, useEffect, useState } from "react";
import Build from "./pages/build/Build";
import Ship from "./pages/ship/Ship";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Juustagram from "./pages/juust/Juustagram";
import Axios from 'axios';
import { shipInfoURL } from './global';

import "./App.css";

const shipContextDefaultData = {
    ships: [],
};

export const shipContext = createContext(shipContextDefaultData);

function App() {
    const [ships, setShips] = useState(undefined);

    useEffect(() => {
        Axios.get(shipInfoURL)
            .then(
                function (resp) {
                    const ships = resp.data;
                    setShips(ships);
                }
            ).catch(
                function () {
                    console.error("shipInfoURL fetch error");
                }
            )
    }, []);

    if (!ships) {
        console.log("no data");
        return null;
    }

    return (
        <shipContext.Provider value={ships}>
            <BrowserRouter>
                <NavBar />
                <div className="App">
                    <Route path="/build" render={(props) => (
                        <Build {...props} ships={ships} />
                    )} />
                    <Route path="/juustagram" component={Juustagram} />
                    <Route exact path="/ship/:name" component={Ship} />
                    <Route path="/ship" component={Ship} />
                </div>
            </BrowserRouter>
        </shipContext.Provider>
    );
}

export default App;
