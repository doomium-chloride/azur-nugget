import React from 'react';
import Axios from 'axios';
import JuustPost from './JuustPost';
import {nimiSocial} from './global';
import {TextField, Button, Grid} from '@material-ui/core';

class Juustagram extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: null,
            search: "",
            showAll: false
        }
    }
    componentDidMount(){
        const that = this;
        Axios.get(nimiSocial).then(
            function(resp){
                that.setState({
                    data: resp.data
                });
            }
        ).catch(
            function(){
                console.error("Problem loading Jusstagram");
            }
        );
    }

    searchHandler(event){
        this.setState({
            search: event.target.value
        });
    }

    render(){
        let posts = [];
        const data = this.state.data;
        if(data){
            posts = data.entries;
        }
        return(
            <div className="juustagram">
                <Grid container spacing={1} className="juust-search-bar">
                    <Grid item xs={10}>
                        <TextField
                            id="juust-search"
                            label="Search Juustagram"
                            type="text"
                            variant="filled"
                            onChange={this.searchHandler.bind(this)}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Button 
                            variant = 'contained'
                            className="center-button"
                        >
                            Show All
                        </Button>
                    </Grid>
                </Grid>
            
                <div className="juustagram-posts">
                    {posts.map(
                        (post, i) => <JuustPost data={post} key={"post-" + i} />
                    )}
                </div>
            </div>
        )
    }
}

export default Juustagram;