import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import EllipsisText  from 'react-ellipsis-text';

import content from './../api/api';

class ExamTab extends Component {
    render() {
        return (
            <div className="exam-tab green">
                <Tabs>
                    <TabList className="flex">
                        <Tab className="col-50">
                            <h1>19</h1>
                            <p className="uppercase">following exams</p>
                        </Tab>
                        <Tab className="col-50">
                            <h1>88</h1>
                            <p className="uppercase">done exams</p>
                        </Tab>
                    </TabList>

                    <TabPanel>
                        {
                            content.examTab.filter(item => item.situation.includes('following')).map(function(item) {
                                return(
                                    <h2 className="brdr-b-1 flex" key={item.id}>
                                        <div className="numbs flex a-end">
                                            <div className="statistic-outer flex wrap a-end j-center">
                                                <div className="statistic-inner" style={{height: item.percentage}}>
                                                    <span>{item.percentage}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <EllipsisText  text={item.title} length={35} />
                                    </h2>
                                )
                            })
                        }
                        <div className="more">Show more <i className="fa fa-angle-double-down" aria-hidden="true"></i></div>
                    </TabPanel>
                    <TabPanel>
                        {
                            content.examTab.filter(item => item.situation.includes('done')).map(function(item) {
                                return(
                                    <h2 className="brdr-b-1 flex" key={item.id}>
                                        <div className="numbs flex a-end">
                                            <div className="statistic-outer flex wrap a-end j-center">
                                                <div className="statistic-inner" style={{height: item.percentage}}>
                                                    <span>{item.percentage}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <EllipsisText  text={item.title} length={35} />
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

export default ExamTab;