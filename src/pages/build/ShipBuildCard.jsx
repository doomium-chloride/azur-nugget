import React from 'react';
import { buildTypes, buildTypeName } from '../../global';
import {
    TextField, Card, CardActionArea, CardContent, FormControl,
    CardMedia, Typography, Grid, InputLabel, Select, MenuItem
} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        padding: '5%'
    },
    details: {
        display: 'flex',
        flexDirection: 'row',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

function getBuildTypes(ship){
    let types = [];
    const availablity = ship.construction.availableIn;
    for(let i = 0; i < buildTypes.length; i++){
        const type = buildTypes[i];
        if(availablity[type]){
            if(type == 'limited'){
                types.push(availablity.limited);
            } else if(type == 'aviation'){
                types.push('special');
            } else {
                types.push(type);
            }
        }
    }
    return types.join(', ');
}

function sendToInfo(history, ship){
    return () => history.push(`/ship/${ship.names.en}`);
}

function DisplayShipBuild({ ship }) {
    const history = useHistory();
    const types = getBuildTypes(ship);
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.details} onClick={sendToInfo(history, ship)}>
                <CardMedia
                    title={ship.names.code}
                >
                    <img src={ship.thumbnail} width="166px" height="166px" />
                </CardMedia>
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {ship.names.en}
                    </Typography>
                    <Typography variant="h6" color="textSecondary" component="h4">
                        {ship.rarity}
                    </Typography>
                    <Typography variant="h6" component="h4">
                        {types}
                    </Typography>
                    <Typography variant="p" component="h5">
                        {ship.construction.constructionTime}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default DisplayShipBuild;