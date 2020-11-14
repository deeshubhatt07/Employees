import React, {Component} from 'react';
import '../components/Postlists.css';
import PostData from '../data/PostData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlus , faTrash } from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter, Route} from 'react-router-dom';

class Postlists extends Component{
    render(){
        return(
            <div id="main3">
                {PostData.map((Details, index) => {
                    return(
                        <div id="postitems">
                            <div>
                                <h5>{Details.name} (Position:{Details.depart})</h5>
                                <p>Age: {Details.age} Salary:{Details.sal}</p>    
                            </div>
                            <div id="icon">
                                <span className="icons"> <FontAwesomeIcon icon={faPlus}/> </span>
                                <span className="icons"> <FontAwesomeIcon icon={faEdit}/> </span>
                                <span className="icons"> <FontAwesomeIcon icon={faTrash}/> </span>
                            </div>    
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Postlists;