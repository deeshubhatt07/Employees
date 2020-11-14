import React, {Component} from 'react';
import '../components/Postlists.css';
import PostData from '../data/PostData.json';

class Postlists extends Component{
    render(){
        return(
            <div>
                {PostData.map((Details, index) => {
                    return(
                        <div>
                            <div id="postitems">
                                <h5>{Details.name}</h5>
                                <p>Age: {Details.age} Salary:{Details.sal}</p>    
                            </div>
                            <div>

                            </div>    
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Postlists;