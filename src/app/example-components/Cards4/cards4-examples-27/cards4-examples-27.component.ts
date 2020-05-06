import { Component } from '@angular/core';
import {Color} from 'ng2-charts';

@Component({
  selector: 'app-cards4-examples-27',
  templateUrl: './cards4-examples-27.component.html'
})
export class Cards4Examples27Component {

  // Sparklines datasets

  public sparklineDataset1 = [
    {
      data: [65, 59, 80, 81, 55, 38, 59, 80, 46],
      datalabels: {
        display: false,
      },

    }
  ];
  public sparklineDataset2 = [
    {
      data: [80, 81, 55, 65, 38, 53, 59, 77, 48],
      datalabels: {
        display: false,
      },

    }
  ];

  // Sparklines labels

  public sparklineLabels1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];

  // Sparklines colors

  public successSparklineColor: Color[] = [
    {
      backgroundColor: 'rgba(27, 201, 67, 0.1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 2,
      borderColor: '#1bc943',
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#1bc943',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#1bc943',
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0
    },
  ];
  public dangerSparklineColor: Color[] = [
    {
      backgroundColor: 'rgba(248, 50, 69, 0.1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 2,
      borderColor: '#f83245',
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#f83245',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#f83245',
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0
    },
  ];

  // Sparklines options

  public sparklineOptions1 = {
    layout: {
      padding: {
        left: -10,
        right: 0,
        top: 0,
        bottom: -10
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          display: false,
          beginAtZero: true
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }],
      xAxes: [{
        ticks: {
          display: false,
          beginAtZero: true
        },
        gridLines: {
          display: false,
          drawBorder: false
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
