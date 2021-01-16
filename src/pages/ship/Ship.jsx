import React, { useContext } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { shipInfoURL } from "../../global";
import { Paper, Grid, GridListTile, Typography } from "@material-ui/core";
import { shipContext } from '../../App';
import FuzzySearch from 'fuzzy-search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    layer: {
        padding: 'auto',
        height: '100%',
        margin: 'auto',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    content: {
        flex: '1 0 auto',
    },
}));

function Ship() {
    const classes = useStyles();
    const context = useContext(shipContext);
    const { name } = useParams();
    console.log("params", name);
    if (!name) {
        return null;
    }

    const results = context.byNameSearcher.search(name);

    if (results.length <= 0) {
        return null;
    }

    const ship = results[0];
    console.log("ship", ship);

    return (
        <div>
            <Grid
                container
                spacing={3}
                alignItems={"stretch"}
                justify={"center"}
            >
                <Grid item xs={4}>
                    <Paper>
                        <img src={ship.thumbnail} width="166px" height="166px" />
                    </Paper>
                </Grid>

                <Grid container spacing={1} item xs={8} alignItems={"stretch"} direction={"row"} justify={"space-evenly"} >
                    <Grid item xs={12} >
                        <Paper className={classes.layer}>
                            <Typography component="h4" variant="h4">
                                {ship.names.en}
                            </Typography>

                        </Paper>
                    </Grid>


                    <Grid item xs={12} >
                        <Paper className={classes.layer}>
                            <Typography component="h4" variant="h4">
                                {ship.names.code}
                            </Typography>
                        </Paper>
                    </Grid>

                </Grid>

            </Grid>
        </div>
    );
}

export default Ship;
