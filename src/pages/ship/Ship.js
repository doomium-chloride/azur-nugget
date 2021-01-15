import React from "react";
import Axios from "axios";
import { shipInfoURL } from "../../global";
import { Paper, Grid } from "@material-ui/core";

function Ship({ ship }) {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper>{ship.name.en}</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper>{ship.name.code}</Paper>
                </Grid>
                <img src={ship.thumbnail} width="166px" height="166px" />
            </Grid>
        </div>
    );
}

export default Ship;
