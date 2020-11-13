import { render } from '@testing-library/react';
import React, {Component} from 'react';
import './Header.css';


class New extends Component{
    render(){
        return(
            <div>
                <span className = 'new'>EMPLOYEES</span><br/>
                <div>
                    <div className="header"> 
                        <button id="login">Login</button>
                        <button id="register">Register</button>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default New;