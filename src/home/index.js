import React, { Component } from 'react';
import './style.css';
import GainedExp from '../gainedExp';
import Activity from '../activity';
import ChartFlow from '../chart';
import CourseTab from '../tab';
import QuestionTab from '../questionTab';
import ExamTab from '../examTab';

class Card extends Component {
    render() {
        return (
            <div>
                <div className="flex m-t-38 tabs-sc">
                    <div className="col-33">
                        <CourseTab></CourseTab>
                    </div>
                    <div className="col-33">
                        <QuestionTab></QuestionTab>
                    </div>
                    <div className="col-33">
                        <ExamTab></ExamTab>
                    </div>
                </div>
                <div className="flex sc-2 brdr-1  m-t-38">
                    <div className="col-33 p-lr-25 p-tb-20 brdr-r-1">
                        <GainedExp></GainedExp>
                        <ChartFlow></ChartFlow>
                    </div>
                    <div className="col-67 p-tb-20">
                        <Activity></Activity>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;