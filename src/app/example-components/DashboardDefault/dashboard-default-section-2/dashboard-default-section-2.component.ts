import { Component } from '@angular/core';
import {Color} from 'ng2-charts';

@Component({
  selector: 'app-dashboard-default-section-2',
  templateUrl: './dashboard-default-section-2.component.html',
})
export class DashboardDefaultSection2Component {

  // Example chart.js 2

  public chartDataset2 = [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      datalabels: {
        display: false
      },
      label: 'Series A'
    },
    {
      data: [28, 48, 40, 19, 86, 27, 90],
      datalabels: {
        display: false
      },
      label: 'Series B'
    }
  ];
  public chartLabels2 = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public chartColor2: Color[] = [
    {
      backgroundColor: 'rgba(65, 145, 255, 0.4)',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 3,
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
      backgroundColor: 'rgba(27, 201, 67, 0.3)',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 3,
      borderColor: '#1bc943',
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#1bc943',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 3,
      pointHoverRadius: 6,
      pointHoverBorderWidth: 3,
      pointRadius: 4,
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#1bc943'
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
          display: false,
          beginAtZero: true
        },
        gridLines: {
          display: true,
          drawBorder: false
        }
      }],
      xAxes: [{
        ticks: {
          display: false,
          beginAtZero: true
        },
        gridLines: {
          display: true,
          drawBorder: true
        }
      }]
    },
    legend: {
      display: true
    },
    responsive: true,
    maintainAspectRatio: false
  };
}
