import React, {Component} from 'react';
import Postlists from './components/Postlists';
import './Post.css';

class Post extends Component{
    render(){
        return(
            <div id="main2">
                <div id="main1">Welcome !!!</div>
                <div id="navbar">
                    <input id="search_" type="text" placeholder="search for the employee"></input>
                    <button id="search_1">Search</button>
                </div>
                <Postlists />
            </div>
        );
    }
}

export default Post;