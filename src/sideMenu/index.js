import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './style.css';

class SideMenu extends Component {
    render() {
        return (
            <div>
               <div className="person flex">
                   <div className="img-outer">
                    <img src="img/avatar.png" alt="avatar"/>
                   </div>
                   <p>HOANG NGUYEN</p>
               </div>
               <div className="menu flex j-center">
                    <ul>
                        <li>
                            <NavLink exact={true} activeClassName="active" to="/" className="flex a-center uppercase">
                                <div className="img-outer">
                                    <img src="./img/dashboard.png" alt=""/>
                                </div>
                                DASHBOARD
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact={true} activeClassName="active" to="/course" className="flex a-center uppercase">
                                <div className="img-outer">
                                    <img src="./img/course.png" alt=""/>
                                </div>
                                course
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact={true} activeClassName="active" to="/exam" className="flex a-center uppercase">
                                <div className="img-outer">
                                    <img src="./img/exam.png" alt=""/>
                                </div>
                                exam
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact={true} activeClassName="active" to="/qa" className="flex a-center uppercase">
                                <div className="img-outer">
                                    <img src="./img/qa.png" alt=""/>
                                </div>
                                q&a
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact={true} activeClassName="active" to="/news" className="flex a-center uppercase">
                                <div className="img-outer">
                                    <img src="./img/news.png" alt=""/>
                                </div>
                                news
                            </NavLink>
                        </li>
                    </ul>
               </div>
            </div>
        );
    }
}

export default SideMenu;