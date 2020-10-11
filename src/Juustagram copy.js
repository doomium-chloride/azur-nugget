import React from 'react';
import Axios from 'axios';
import JuustPost from './JuustPost';
import {nimiSocial} from './global';
import {TextField, Button, Grid} from '@material-ui/core';
import FuzzySearch from 'fuzzy-search';

class Juustagram extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: null,
            search: "",
            showAll: false,
            searcher: null
        }
    }
    componentDidMount(){
        const that = this;
        Axios.get(nimiSocial).then(
            function(resp){
                const data = resp.data.entries;// everything in entries
                const fuzzy = new FuzzySearch(data, 
                    ['name', 'post']);
                that.setState({
                    data: data,
                    searcher: fuzzy
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

    handleToggleMode(){
        const mode = !this.state.showAll;
        this.setState({
            showAll: mode
        });
    }

    render(){
        let posts = [];
        const data = this.state.data;
        const showAll = this.state.showAll
        const buttonText = showAll ? 'Show All' : 'Show Search'
        const searcher = this.state.searcher;
        const search = this.state.search;
        if(data){
            if(showAll){
                posts = data;
            } else if(searcher) {
                if(search != ""){
                    console.log(search)
                    posts = searcher.search(search);
                    console.log(posts)
                }
            }
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
                            onClick={this.handleToggleMode.bind(this)}
                        >
                            {buttonText}
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