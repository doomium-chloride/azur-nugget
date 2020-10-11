import React from 'react';
import Axios from 'axios';
import JuustPost from './JuustPost';
import {nimiSocial} from './global';

class Juustagram extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: null
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

    render(){
        let posts = [];
        const data = this.state.data;
        if(data){
            posts = data.entries;
        }
        return(
            <div class="juustagram">
                {posts.map(
                    (post, i) => <JuustPost data={post} key={"post-" + i} />
                )}
            </div>
        )
    }
}

export default Juustagram;