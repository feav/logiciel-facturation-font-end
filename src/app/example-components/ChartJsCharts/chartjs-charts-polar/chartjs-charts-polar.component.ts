import { Component } from '@angular/core';
import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
@Component({
  selector: 'app-chartjs-charts-polar',
  templateUrl: './chartjs-charts-polar.component.html',
})
export class ChartjsChartsPolarComponent {
  // PolarArea
  public polarAreaChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  public polarAreaChartData: SingleDataSet = [300, 500, 100, 40, 120];
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
