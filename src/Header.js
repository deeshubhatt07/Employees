import { render } from '@testing-library/react';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


class New extends Component{
    render(){
        return(
            <div id="main">
                <span className = 'new'>EMPLOYEES</span><br/>
                <div>
                    <div className="header"> 
                        <button id="login">Login</button>
                        <button id="register">Register</button>
                    </div>
                    <div id="inside"><Link to="/post">Click to continue</Link></div>
                </div>
                
            </div>
        )
    }
}

export default New;