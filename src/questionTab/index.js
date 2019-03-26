import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import EllipsisText  from 'react-ellipsis-text';

import content from './../api/api';

class QuestionTab extends Component {
    render() {
        return (
            <div className="question-tab purple">
                <Tabs>
                    <TabList className="flex">
                        <Tab className="col-50">
                            <h1>27</h1>
                            <p className="uppercase">asking questions</p>
                        </Tab>
                        <Tab className="col-50">
                            <h1>7</h1>
                            <p className="uppercase">answered questions</p>
                        </Tab>
                    </TabList>

                    <TabPanel>
                        {
                            content.questionTab.filter(item => item.situation.includes('asking')).map(function(item) {
                                return(
                                    <h2 className="brdr-b-1 flex" key={item.id}>
                                        <p className="numbs">
                                            <i className="fa fa-comment-o" aria-hidden="true"></i>
                                            <span>{item.commentCount}</span>
                                        </p>
                                        <EllipsisText  text={item.title} length={35} />
                                    </h2>
                                )
                            })
                        }
                        <div className="more">Show more <i className="fa fa-angle-double-down" aria-hidden="true"></i></div>
                    </TabPanel>
                    <TabPanel>
                        {
                            content.questionTab.filter(item => item.situation.includes('answered')).map(function(item) {
                                return(
                                    <h2 className="brdr-b-1 flex" key={item.id}>
                                        <p className="numbs">
                                            <i className="fa fa-comment-o" aria-hidden="true"></i>
                                            <span>{item.commentCount}</span>
                                        </p>
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

export default QuestionTab;