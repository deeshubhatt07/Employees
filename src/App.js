import { render } from '@testing-library/react';
import React,{Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Post from './Post';


class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Header}/>
                    <Route exact path="/post" component={Post}/>
                </div>
            </BrowserRouter>  
        );
    }
}

export default App;