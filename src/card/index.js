import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './style.css';
import Button from '../button';
import StarRating from '../starRating';

class Card extends Component {
    render() {
        return (
            <div className="card flex a-center p-lr-47 p-tb-20 j-s-between">
                <div className="flex a-center">
                    <div className="img-outer">
                        <img src="./img/avatar.png" alt=""/>
                    </div>
                    <div className="info">
                        <div className="flex a-center">
                            <h1 className="uppercase">{this.props.name}</h1>
                            <StarRating rating={3}/>
                        </div>
                        <div>
                            <span>Student <sup>.</sup> </span>
                            <NavLink to="/more">Learn more</NavLink>
                        </div>
                        <div className="point flex a-center">
                            <img src="./img/point.png" alt=""/>
                            <span>{this.props.exp} exp</span>
                        </div>
                    </div>
                </div>
                <div>
                    <Button text="Edit" icon="pen"/>
                    <Button text="Log Out" icon="exit"/>
                </div>
            </div>
        );
    }
}

export default Card;