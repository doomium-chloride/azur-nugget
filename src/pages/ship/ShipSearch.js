import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {shipInfoURL} from '../../global';

function ShipSearch(){
    const [data, setData] = useState(undefined);

    useEffect(() => {
        Axios.get(shipInfoURL)
            .then(
                function(resp){
                    const ships = resp.data;
                    setData(ships);
                }
            ).catch(
                function(){
                    console.error("shipInfoURL fetch error");
                }
            )
    });
}