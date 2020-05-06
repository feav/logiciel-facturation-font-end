import { Component } from '@angular/core';
import {Color} from 'ng2-charts';

@Component({
  selector: 'app-dashboard-helpdesk-section-1',
  templateUrl: './dashboard-helpdesk-section-1.component.html',
})
export class DashboardHelpdeskSection1Component {

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
  public sparklineDataset3 = [
    {
      data: [33, 44, 21, 37, 52, 53, 21, 39, 27],
      datalabels: {
        display: false,
      },

    }
  ];
  public sparklineDataset4 = [
    {
      data: [33, 44, 21, 21, 27, 37, 52, 39, 53],
      datalabels: {
        display: false,
      },

    }
  ];

  // Sparklines labels

  public sparklineLabels1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];

  // Sparklines colors

  public dangerSparklineColor: Color[] = [
    {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
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
  public warningSparklineColor: Color[] = [
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
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#f4772e',
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0
    },
  ];
  public successSparklineColor: Color[] = [
    {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
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
  public infoSparklineColor: Color[] = [
    {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderColor: '#11c5db',
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#11c5db',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#11c5db',
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0
    },
  ];

  // Sparklines options

  public sparklineOptions1 = {
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 20,
        bottom: -20
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
    maintainAspectRatio: true
  };

}
