import React from 'react';
import Axios from 'axios';
import { nimiShips } from './global';
import {Grid} from '@material-ui/core';

class Ship extends React.component {
    constructor(props){
        this.name = props.name;
        this.state = {
            data: null
        };
    }

    componentDidMount(){

        const that = this;
        const name = this.name;
        Axios(nimiShips).then(
            function(resp){
                const data = resp.data;
                const ship = searchShipByName(data, name);
                this.setState({
                    data: ship
                });
            }
        ).catch(
            function(){
                console.error("Error in finding ship");
            }
        )
    }

    render(){
        <Grid container spacing={3}>
            
        </Grid>
    }
}

function searchShipByName(ships, target){
    const len = ships.length;
    const targetName = target.toLowerCase;
    for(let i = 0; i < len; i++){
        const ship = ships[i];
        const name = ship.name;
        if(name.toLowerCase() == targetName){
            return ship;
        }
    }
    return null;
}