import React from 'react';
import {Grid, Button} from '@material-ui/core';
import { useHistory } from "react-router-dom";

function NavBar(){
    const history = useHistory();
    return(
        <Grid container spacing={2} alignItems='center'>
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
                <Button onClick={() => history.push('/juustagram')}>
                    Juustagram
                </Button>
            </Grid>
        </Grid>
    )
}

export default NavBar;