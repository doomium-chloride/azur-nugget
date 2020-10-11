import React from 'react';
import Axios from 'axios';
import JuustPost from './JuustPost';
import {nimiSocial} from './global';
import {Button} from '@material-ui/core';

const loadMoreBy = 5;

class Juustagram extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: null,
            limit: 5
        }
    }
    componentDidMount(){
        const that = this;
        Axios.get(nimiSocial).then(
            function(resp){
                const data = resp.data.entries;// everything in entries
                that.setState({
                    data: data
                });
            }
        ).catch(
            function(){
                console.error("Problem loading Jusstagram");
            }
        );
    }

    loadMore(){
        const newLimit = this.state.limit + loadMoreBy;
        this.setState({
            limit: newLimit
        });
    }

    render(){
        let posts = [];
        const data = this.state.data;
        const limit = this.state.limit;
        if(data){
            posts = data.slice(0, limit);
        }
        return(
            <div className="juustagram">     
                <div className="juustagram-posts">
                    {posts.map(
                        (post, i) => <JuustPost data={post} key={"post-" + i} />
                    )}
                </div>
                <div className="extra-top-margin extra-bottom-margin">
                        <Button variant='outlined' onClick={this.loadMore.bind(this)}>
                            Load more
                        </Button>
                </div>
            </div>
        )
    }
}

export default Juustagram;