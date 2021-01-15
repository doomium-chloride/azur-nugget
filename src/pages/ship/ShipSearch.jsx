import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { shipInfoURL } from '../../global';

function ShipSearch() {
    const ships = useContext(shipContext);
    const [query, setQuery] = useState("");

    return (
        <h1>
            Enter ship name
            </h1>
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <TextField
                    id="build-hours"
                    label="Hours"
                    type="number"
                    InputProps={{ inputProps: { min: 0, max: 99 } }}
                    variant="outlined"
                    onChange={this.hourHandler.bind(this)}
                    fullWidth
                />
            </Grid>
        </Grid>
    )
}