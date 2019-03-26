import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './style.css';

class PageMenu extends Component {
    render() {
        return (
            <div className="page-menu p-lr-47">
                <ul  className="flex">
                    <li>
                        <NavLink exact={true} activeClassName="active" to="/" className="flex a-center uppercase">
                            knowledge
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact={true} activeClassName="active" to="/course" className="flex a-center uppercase">
                            course
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact={true} activeClassName="active" to="/exam" className="flex a-center uppercase">
                            exam
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact={true} activeClassName="active" to="/qa" className="flex a-center uppercase">
                            q&a
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact={true} activeClassName="active" to="/news" className="flex a-center uppercase">
                            news
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact={true} activeClassName="active" to="/activity" className="flex a-center uppercase">
                            activity
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact={true} activeClassName="active" to="/friends" className="flex a-center uppercase">
                            friends
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default PageMenu;