import React from 'react';
import { shipInfoURL, buildTypes, buildTypeName } from '../../global';
import Axios from 'axios';
import FuzzySearch from 'fuzzy-search';
import {TextField, Card, CardActionArea, CardContent, FormControl,
    CardMedia, Typography, Grid, InputLabel, Select, MenuItem} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

class Build extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            seconds: 0,
            minutes: 0,
            hours: 0,
            data: null,
            searcher: null,
            filter: 'none'
        };
    }

    componentDidMount(){
        const that = this;

        Axios.get(shipInfoURL)
            .then(
                function(resp){
                    const ships = resp.data;
                    const fuzzy = new FuzzySearch(ships, 
                        ['construction.constructionTime']);
                    that.setState({
                        data: ships,
                        searcher: fuzzy
                    });
                }
            ).catch(
                function(){
                    console.error("shipInfoURL fetch error");
                }
            )
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

    render(){

        let ships = [];

        if(this.state.searcher){
            const searcher = this.state.searcher;
            const searchTime = constructionTime(this.state.hours, 
                this.state.minutes, this.state.seconds);
            if(searchTime != "00:00:00"){
                ships = searcher.search(searchTime);
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
                <Grid item xs={2}>
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
                <Grid item xs={2}>
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
                <Grid item xs={2}>
                    <TextField
                        id="build-seconds"
                        label="Seconds"
                        type="number"
                        InputProps={{ inputProps: { min: 0, max: 59 } }}
                        variant="outlined"
                        onChange={this.secondHandler.bind(this)}
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

export default Build;