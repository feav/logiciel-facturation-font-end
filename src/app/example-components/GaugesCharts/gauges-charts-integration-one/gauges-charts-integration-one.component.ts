import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-gauges-charts-integration-one',
  templateUrl: './gauges-charts-integration-one.component.html',
})
export class GaugesChartsIntegrationOneComponent  implements OnInit, OnDestroy {

  gaugeValues: any = {
    1: 100,
    2: 50,
    3: 50
  };

  interval: any;

  ngOnInit(): void {
    const updateValues = (): void => {
      this.gaugeValues = {
        1: Math.round(Math.random() * 100),
        2: Math.round(Math.random() * 100),
        3: Math.round(Math.random() * 100)
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
