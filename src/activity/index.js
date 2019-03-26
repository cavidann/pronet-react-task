import React, { Component } from 'react';
import './style.css';

import content from './../api/api'

class Activity extends Component {
    render() {
        return (
            <div className="activity">
                <h2 className="p-lr-25 "><b>FRIEND ACTIVITY</b></h2>
                <div className="brdr-t-1">
                    {
                        content.friendActivity.map(function (item) {
                            return (
                                <div className="flex wrap a-center j-s-between friend" key={item.id}>
                                    <div className="flex a-center">
                                        <div className="img-outer">
                                            <img src={"./img/"+ item.img +".png"} alt="" />
                                        </div>
                                        <p>
                                            <span>{item.fullName} </span>
                                            <span>Finished the course: </span>
                                            <span>{item.course}</span>
                                        </p>
                                    </div>
                                    <div className="time"><i className="fa fa-clock-o" aria-hidden="true"></i> {item.time}</div>
                                    <div className="brdr-b-1 col-100"></div>
                                </div>
                            )
                        })
                    }
                    <div className="more">Show more <i className="fa fa-angle-double-down" aria-hidden="true"></i></div>
                </div>
            </div>
        );
    }
}

export default Activity;