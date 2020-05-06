import { Component } from '@angular/core';
import {Color} from 'ng2-charts';

@Component({
  selector: 'app-cards11-examples-72',
  templateUrl: './cards11-examples-72.component.html'
})
export class Cards11Examples72Component {

  // Chart.js example

  public chartDataset2 = [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      datalabels: {
        display: false
      },
      label: 'Today\'s Earnings'
    },
    {
      data: [65, 81, 56,59, 80, 55, 40],
      datalabels: {
        display: false
      },
      label: 'Current Week'
    },
    {
      data: [28, 48, 19, 86, 27 ,40, 90],
      datalabels: {
        display: false
      },
      label: 'Previous Week'
    }
  ];
  public chartLabels2 = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public chartColor2: Color[] = [
    {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderColor: '#7a7b97',
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#7a7b97',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 3,
      pointHoverRadius: 6,
      pointHoverBorderWidth: 3,
      pointRadius: 4,
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#7a7b97'
    },
    {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderColor: '#4191ff',
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#4191ff',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 3,
      pointHoverRadius: 6,
      pointHoverBorderWidth: 3,
      pointRadius: 4,
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#4191ff'
    },
    {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderColor: '#f4772e',
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#f4772e',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 3,
      pointHoverRadius: 6,
      pointHoverBorderWidth: 3,
      pointRadius: 4,
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#f4772e'
    }
  ];
  public chartOptions2 = {
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          display: true,
          beginAtZero: true
        },
        gridLines: {
          display: true,
          color: '#eeeff8',
          drawBorder: true
        }
      }],
      xAxes: [{
        ticks: {
          display: true,
          beginAtZero: true
        },
        gridLines: {
          display: true,
          color: '#eeeff8',
          drawBorder: true
        }
      }]
    },
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false
  };

}
