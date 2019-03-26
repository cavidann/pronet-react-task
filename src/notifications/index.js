import React, { Component } from 'react';
import './style.css';

class Notifications extends Component {
    render() {
        return (
            <div className="flex j-s-between a-center notf">
                <div className="events flex">
                    <div className="img-outer">
                        <img src="./img/profile.png" alt=""/>
                    </div>
                    <div className="img-outer">
                        <img src="./img/msg.png" alt=""/>
                    </div>
                    <div className="img-outer">
                        <img src="./img/notf.png" alt=""/>
                        <p>2</p>
                    </div>
                </div>
                <div className="logo">
                    <div className="img-outer">
                        <img src="./img/logo.png" alt=""/>
                    </div>
                </div>
                <div className="flex a-center search">
                    <input type="text" placeholder="Type for search"/>
                    <img src="./img/search.png" alt=""/>  
                </div>
            </div>
        );
    }
}

export default Notifications;