import React from 'react';
import { shipInfoURL, buildTypes, buildTypeName } from './global';
import Axios from 'axios';
import FuzzySearch from 'fuzzy-search';
import {FormGroup, TextField, Card, CardActionArea, CardContent, 
    CardMedia, Typography} from '@material-ui/core';

class Build extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            seconds: 0,
            minutes: 0,
            hours: 0,
            data: null,
            searcher: null
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

    render(){

        let ships = [];

        if(this.state.searcher){
            const searcher = this.state.searcher;
            const searchTime = constructionTime(this.state.hours, 
                this.state.minutes, this.state.seconds);
            if(searchTime != "00:00:00"){
                ships = searcher.search(searchTime);
            }
        }

        return(
        <div>
            <FormGroup>
                <TextField
                    id="build-hours"
                    label="Hours"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{ inputProps: { min: 0, max: 99 } }}
                    variant="filled"
                    onChange={this.hourHandler.bind(this)}
                />
                <TextField
                    id="build-minutes"
                    label="Minutes"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{ inputProps: { min: 0, max: 59 } }}
                    variant="filled"
                    onChange={this.minuteHandler.bind(this)}
                />
                <TextField
                    id="build-seconds"
                    label="Seconds"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{ inputProps: { min: 0, max: 59 } }}
                    variant="filled"
                    onChange={this.secondHandler.bind(this)}
                />
            </FormGroup>

            <div>
                {ships.map((ship) => <DisplayShipBuild ship={ship} />)}
            </div>
            
        </div>
        );
    }
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

function DisplayShipBuild({ship}){
    const types = getBuildTypes(ship);
    return(
        <Card width="100%">
            <CardActionArea>
                <CardMedia
                    image={ship.thumbnail}
                    title={ship.names.code}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {ship.names.en}
                    </Typography>
                    <Typography variant="h6" color="textSecondary" component="h4">
                        {ship.rarity}
                    </Typography>
                    <Typography variant="h6" component="h4">
                        {types}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Build;