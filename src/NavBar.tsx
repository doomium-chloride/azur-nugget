import React from 'react';
import {Grid, Button, makeStyles} from '@material-ui/core';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    navbar: {
        padding: '0 1vw',
        width: '100vw'
    }
}));

function NavBar(){
    const history = useHistory();
    const classes = useStyles();
    return(
        <Grid container spacing={2} alignItems='center' className={classes.navbar}>
            <Grid item xs>
                <Button onClick={() => history.push('/')}>
                    Home
                </Button>
            </Grid>
            <Grid item xs>
                <Button onClick={() => history.push('/ships')}>
                    Ships
                </Button>
            </Grid>
            <Grid item xs>
                <Button onClick={() => history.push('/build')}>
                    Build time
                </Button>
            </Grid>
            <Grid item xs>
                <Button onClick={() => history.push('/rate')}>
                    Build rate
                </Button>
            </Grid>
            <Grid item xs>
                <Button onClick={() => history.push('/juust')}>
                    Juust
                </Button>
            </Grid>
        </Grid>
    )
}

export default NavBar;