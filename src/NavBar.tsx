import React from 'react';
import {Grid, Button, makeStyles} from '@material-ui/core';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    navbar: {
        padding: '0 1vw',
        width: '100vw'
    }
}));

const deployedBase: string = '/azur-nugget';

function sendToPage(history, path: string) {
    const currentPath: string = history.location.pathname;
    const splitPath: string[] = currentPath.split('/');
    const basePath = splitPath[0];
    if(basePath.startsWith(deployedBase)){
        return () => history.push(`${deployedBase}/${path}`);
    } else {
        return () => history.push(`/${path}`);
    }
}

function NavBar(){
    const history = useHistory();
    const classes = useStyles();
    return(
        <Grid container spacing={2} alignItems='center' className={classes.navbar}>
            <Grid item xs>
                <Button onClick={sendToPage(history, '')}>
                    Home
                </Button>
            </Grid>
            <Grid item xs>
                <Button onClick={sendToPage(history, 'ships')}>
                    Ships
                </Button>
            </Grid>
            <Grid item xs>
                <Button onClick={sendToPage(history, 'build')}>
                    Build time
                </Button>
            </Grid>
            <Grid item xs>
                <Button onClick={sendToPage(history, 'rate')}>
                    Build rate
                </Button>
            </Grid>
            <Grid item xs>
                <Button onClick={sendToPage(history, 'juust')}>
                    Juust
                </Button>
            </Grid>
        </Grid>
    )
}

export default NavBar;