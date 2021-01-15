import React from 'react';
import { buildTypes, buildTypeName } from '../../global';
import {TextField, Card, CardActionArea, CardContent, FormControl,
    CardMedia, Typography, Grid, InputLabel, Select, MenuItem} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const searchSpan = 5;

class Build extends React.Component {
    constructor(props){
        super(props);
        console.log("props", props);
        this.state = {
            seconds: 0,
            minutes: 0,
            hours: 0,
            data: props.ships,
            filter: 'none'
        };
    }

    hourHandler(event){
        let time = event.target.value;
        if(!time){
            time = 0;
        }
        this.setState({
            hours: time
        });
    }

    minuteHandler(event){
        let time = event.target.value;
        if(!time){
            time = 0;
        }
        this.setState({
            minutes: time
        });
    }

    secondHandler(event){
        let time = event.target.value;
        if(!time){
            time = 0;
        }
        this.setState({
            seconds: time
        });
    }

    filterHandler(event){
        let filter = event.target.value;
        this.setState({
            filter: filter
        });
    }

    searchShip(timeStr){
        const output = [];
        this.state.data.forEach(ship => {
            const constructionTime = ship.construction.constructionTime;
            if(isTimeWithin(timeStr, constructionTime, searchSpan)){
                output.push(ship);
            }
        });
        output.sort((ship1, ship2) => {
            const ship1diff = timeBetween(ship1.construction.constructionTime, timeStr);
            const ship2diff = timeBetween(ship2.construction.constructionTime, timeStr);
            return ship1diff - ship2diff;
        })
        return output;
    }

    render(){

        let ships = [];

        if(this.state.data){
            const searcher = this.state.searcher;
            const searchTime = constructionTime(this.state.hours, 
                this.state.minutes, this.state.seconds);
            if(searchTime != "00:00:00"){
                ships = this.searchShip(searchTime);
            }
            const filter = this.state.filter;
            switch(filter){
                case 'light':
                case 'heavy':
                case 'aviation':
                case 'limited':
                    ships = filterShipBuild(ships, filter);
            }
        }

        return(
        <div className="main">
            <h1>
                Enter build time
            </h1>
            <Grid container spacing={1}>
                <Grid item xs={3}>
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
                <Grid item xs={3}>
                    <TextField
                        id="build-minutes"
                        label="Minutes"
                        type="number"
                        InputProps={{ inputProps: { min: 0, max: 59 } }}
                        variant="outlined"
                        onChange={this.minuteHandler.bind(this)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={5}>
                    <FormControl fullWidth>
                        <InputLabel id="build-filter-label">Build filter</InputLabel>
                        <Select
                        labelId="build-filter"
                        id="select-build-filter"
                        value={this.state.filter}
                        onChange={this.filterHandler.bind(this)}
                        variant="outlined"
                        >
                            <MenuItem value='none'>No Filter</MenuItem>
                            <MenuItem value='light'>Light</MenuItem>
                            <MenuItem value='heavy'>Heavy</MenuItem>
                            <MenuItem value='aviation'>Special</MenuItem>
                            <MenuItem value='limited'>Event</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            <div>
                {ships.map((ship, i) => <DisplayShipBuild key={"ship-" + i} ship={ship} />)}
            </div>
            
        </div>
        );
    }
}

function filterShipBuild(ships, filter){
    const len = ships.length;
    let output = [];
    for(let i = 0; i < len; i++){
        const ship = ships[i];
        const availablity = ship.construction.availableIn;
        if(availablity[filter]){
            output.push(ship);
        }
    }
    return output;
}

function make2digits(time){
    if(time < 10){
        return "0" + time;
    }
    return "" + time;
}

function constructionTime(hours, minutes, seconds){
    const hh = make2digits(hours);
    const mm = make2digits(minutes);
    const ss = make2digits(seconds);
    return `${hh}:${mm}:${ss}`;
}

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

function makeRedirect(link){
    return function(){
        let win = window.open(link, '_blank');
        win.focus();
    }
}

function DisplayShipBuild({ship}){
    const types = getBuildTypes(ship);
    const classes = useStyles();
    return(
        <Card className={classes.root}>
            <CardActionArea className={classes.details} onClick={() => console.log(ship)}>
                <CardMedia
                    title={ship.names.code}
                >
                    <img src={ship.thumbnail} width="166px" height="166px"/>
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

function timeStr2Minutes(timeStr){
    const splitTime = timeStr.split(':');
    const hours = 60 * parseInt(splitTime[0]);
    const mins = parseInt(splitTime[1]);
    const secs = parseInt(splitTime[2]) / 60;
    return hours + mins + secs;
}

/**
 * returns time between time1 and 2
 * @param {string} time1 
 * @param {string} time2 
 * @param {number} span 
 */
function timeBetween(time1, time2){
    const mins1 = timeStr2Minutes(time1);
    const mins2 = timeStr2Minutes(time2);
    return Math.abs(mins1 - mins2);
}

/**
 * checks if time 2 is within the "span" minutes of time 1
 * returns a boolean
 * @param {string} time1 
 * @param {string} time2 
 * @param {number} span 
 */
function isTimeWithin(time1, time2, span){
    const diff = timeBetween(time1, time2);
    return diff < span;
}



export default Build;