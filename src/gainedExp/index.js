import React, { Component } from 'react';
import './style.css';

class GainedExp extends Component {
    render() {
        return (
            <div className="gained-exp brdr-b-1">
                <h2>Experience gained</h2>
                <div className="flex j-s-between">
                    <div>
                        <div className="statistic-outer flex a-end j-center">
                            <div className="statistic-inner" style={{height:'80%'}}></div>
                        </div>
                        <p className="t-center">COURSE</p>
                    </div>

                    <div>
                        <div className="statistic-outer flex a-end j-center">
                            <div className="statistic-inner" style={{height:'30%'}}></div>
                        </div>
                        <p className="t-center">QUESTION</p>
                    </div>

                    <div>
                        <div className="statistic-outer flex a-end j-center">
                            <div className="statistic-inner" style={{height:'60%'}}></div>
                        </div>
                        <p className="t-center">EXAM</p>
                    </div>

                    <div>
                        <div className="flex a-end j-center month" style={{height: '45px'}}>
                            +142
                        </div>
                        <p className="t-center" style={{fontSize: '12px'}}><b>LAST MONTH</b></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default GainedExp;