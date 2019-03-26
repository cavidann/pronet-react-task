import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SideMenu from './sideMenu';
import Notifications from './notifications';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './home';
import Course from './course';
import Card from './card';
import PageMenu from './pageMenu';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="flex">
        <div className="side-menu">
          <SideMenu></SideMenu>
        </div>
        <div className="pages">
          <div>
            <Notifications></Notifications>
          </div>
          <div>
            <Card name="HOANG NGUYEN" exp="8,782" />
            <PageMenu></PageMenu>
            <div className="p-lr-47 p-b-80">
              <Route exact path={'/'} component={Home} />
              <Route path={'/course'} component={Course} />
              <Route path={'/exam'} component={Home} />
              <Route path={'/qa'} component={Home} />
              <Route path={'/news'} component={Home} />
              <Route path={'/more'} component={Home} />
              <Route path={'/activity'} component={Home} />
              <Route path={'/friends'} component={Home} />
            </div>
          </div>
        </div>
      </div>
    </Router>
    );
  }
}

export default App;
