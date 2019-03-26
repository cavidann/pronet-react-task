import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import './style.css';

import EllipsisText  from 'react-ellipsis-text';

import content from './../api/api';

class CourseTab extends Component {
    render() {
        return (
            <div className="course-tab orange">
                <Tabs>
                    <TabList className="flex">
                        <Tab className="col-50">
                            <h1>12</h1>
                            <p className="uppercase">done course</p>
                        </Tab>
                        <Tab className="col-50">
                            <h1>3</h1>
                            <p className="uppercase">unfinished course</p>
                        </Tab>
                    </TabList>

                    <TabPanel>
                        {
                            content.courseTab.filter(item => item.situation.includes('done')).map(function(item) {
                                return(
                                    <h2 className="brdr-b-1" key={item.id}>
                                        <EllipsisText  text={item.title} length={50} />
                                    </h2>
                                )
                            })
                        }
                        <div className="more">Show more <i className="fa fa-angle-double-down" aria-hidden="true"></i></div>
                    </TabPanel>
                    <TabPanel>
                        {
                            content.courseTab.filter(item => item.situation.includes('half')).map(function(item) {
                                return(
                                    <h2 className="brdr-b-1" key={item.id}>
                                        <EllipsisText  text={item.title} length={50} />
                                    </h2>
                                )
                            })
                        }
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default CourseTab;