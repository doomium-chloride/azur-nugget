import React, { useContext } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { shipInfoURL } from "../../global";
import { Paper, Grid } from "@material-ui/core";
import {shipContext} from '../../App';
import FuzzySearch from 'fuzzy-search';

function Ship() {
    const ships = useContext(shipContext);
    const {name} = useParams();
    console.log("params", name);
    if(!name){
        return null;
    }
    

    const searcher = new FuzzySearch(ships, ['names.code', 'names.en'], {sort: true, caseSensitive: false});

    const results = searcher.search(name);

    if(results.length <= 0){
        return null;
    }

    const ship = results[0];
    console.log("ship", ship);

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper>{ship.names.en}</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper>{ship.names.code}</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper>
                        <img src={ship.thumbnail} width="166px" height="166px" />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Ship;
