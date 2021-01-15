import React, { useState, useContext } from 'react';
import Axios from 'axios';
import { shipInfoURL } from '../../global';
import { Paper, Grid, TextField, Typography } from "@material-ui/core";
import {shipContext} from '../../App';
import { useEffect } from 'react';

function ShipSearch() {
    const context = useContext(shipContext);
    const [query, setQuery] = useState("");
    
    return (
        <div>
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
        </div>
    )
}

export default ShipSearch;