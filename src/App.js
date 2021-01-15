import React, { createContext, useEffect, useState } from "react";
import Build from "./pages/build/Build";
import Ship from "./pages/ship/Ship";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Juustagram from "./pages/juust/Juustagram";
import Axios from 'axios';
import { shipInfoURL } from './global';

import "./App.css";

const contextDefaultValue = {
    ships: [],
};

const context = createContext(contextDefaultValue);

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

    useEffect(() => {
        context.ships = ships;
    })

    if (!ships) {
        console.log("no data");
        return null;
    }

    return (
        <context.Provider>
            <BrowserRouter>
                <NavBar />
                <div className="App">
                    <Route path="/build" render={(props) => (
                        <Build {...props} ships={ships} />
                    )} />
                    <Route path="/juustagram" component={Juustagram} />
                    <Route path="/ship" component={Ship} />
                </div>
            </BrowserRouter>
        </context.Provider>
    );
}

export default App;
