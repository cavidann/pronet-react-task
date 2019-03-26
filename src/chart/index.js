import React, { Component } from 'react';
import './style.css';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'],
    datasets: [
      {
        label: '',
        fill: false,
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#2ecc71',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#2ecc71',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'red',
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40, 10, 90, 30, 40]
      }
    ]
  };

class ChartFlow extends Component {
    render() {
        return (
            <div className="chart">
                <h2>Experience per day</h2>
                <Line 
                    data={data}
                />
            </div>
        );
    }
}

export default ChartFlow;