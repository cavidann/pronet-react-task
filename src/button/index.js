import React, { Component } from 'react';
import './style.css';

class Button extends Component {
    render() {
        return (
            <button>
                <div>
                    <p>{this.props.text}</p>
                </div>
                <div className="img flex a-center j-center">
                    <img src={"./img/" + this.props.icon + ".png"} alt=""/>
                </div>
            </button>
        );
    }
}

export default Button;