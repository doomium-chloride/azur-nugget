import React, { useState, useContext, useCallback } from 'react';
import Axios from 'axios';
import { shipInfoURL } from '../../global';
import { Paper, Grid, TextField, Typography } from "@material-ui/core";
import {shipContext} from '../../App';
import { useEffect } from 'react';
import debounce from 'lodash.debounce';
import DisplayShipBuild from '../build/ShipBuildCard';
import { useParams, useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    main: {
        padding: '0 1vw',
    }
}));

function ShipSearch() {
    const context = useContext(shipContext);
    const history = useHistory();
    const classes = useStyles();
    const { name } = useParams();
    const [query, setQuery] = useState(name || "");

    const [ships, setShips] = useState([]);

    const delayedSearch = useCallback(debounce(name => {
        if(name){
            const shipList = context.byNameSearcher.search(name)
            setShips(shipList);
        } else{
            setShips([]);
        }
        history.push(`/ships/${name}`);
    }, 500), []);

    useEffect(() => {
        delayedSearch(query);
     
        // Cancel the debounce on useEffect cleanup.
        return delayedSearch.cancel;
     }, [query, delayedSearch]);
    
    return (
        <div className={classes.main}>
            <h1>
                Enter ship name
            </h1>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <TextField
                        id="search4ship"
                        label="Ship name"
                        type="text"
                        variant="outlined"
                        onChange={(event) => setQuery(event.target.value)}
                        value={query}
                        fullWidth
                    />
                </Grid>
            </Grid>
            <div>
                {ships.map((ship, i) => <DisplayShipBuild key={"ship-" + i} ship={ship} />)}
            </div>
        </div>
    )
}

export default ShipSearch;