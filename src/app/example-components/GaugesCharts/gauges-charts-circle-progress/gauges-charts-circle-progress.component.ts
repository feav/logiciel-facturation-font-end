import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-gauges-charts-circle-progress',
  templateUrl: './gauges-charts-circle-progress.component.html',
})
export class GaugesChartsCircleProgressComponent implements OnInit, OnDestroy {

  gaugeValues: any = {
    1: 100,
    2: 50,
    3: 50,
    4: 50,
    5: 50,
    6: 50,
    7: 50
  };

  interval: any;

  ngOnInit(): void {
    const updateValues = (): void => {
      this.gaugeValues = {
        1: Math.round(Math.random() * 100),
        2: Math.round(Math.random() * 100),
        3: Math.round(Math.random() * 100),
        4: Math.round(Math.random() * 100),
        5: Math.round(Math.random() * 200),
        6: Math.round(Math.random() * 100),
        7: Math.round(Math.random() * 100)
      };
    };

    const INTERVAL: number = 5000;

    this.interval = setInterval(updateValues, INTERVAL);
    updateValues();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
