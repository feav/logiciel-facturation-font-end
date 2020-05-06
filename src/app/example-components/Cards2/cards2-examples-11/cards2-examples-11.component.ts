import {Component} from '@angular/core';
import {Color} from 'ng2-charts';

@Component({
    selector: 'app-cards2-examples-11',
    templateUrl: './cards2-examples-11.component.html'
})
export class Cards2Examples11Component {

    // Example chart.js 1
    public chartDataset1 = [
        {
            data: [{
                x: 10,
                y: 20
            }, {
                x: 15,
                y: 10
            }, {
                x: 21,
                y: 18
            }, {
                x: 12,
                y: 15
            }, {
                x: 18,
                y: 8
            }, {
                x: 9,
                y: 12
            }, {
                x: 21,
                y: 18
            }, {
                x: 17,
                y: 6
            }, {
                x: 10,
                y: 20
            }, {
                x: 15,
                y: 10
            }, {
                x: 12,
                y: 15
            }, {
                x: 18,
                y: 8
            }],
            datalabels: {
                display: false
            }

        }
    ];
    public chartLabels1 = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10', 'Day 11', 'Day 12'];
    public chartSuccessColor: Color[] = [
        {
            backgroundColor: 'rgba(255, 255, 255, 0.0)',
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
        },
    ];
    public chartOptions1 = {
        layout: {
            padding: {
                left: 10,
                right: 10,
                top: 10,
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
