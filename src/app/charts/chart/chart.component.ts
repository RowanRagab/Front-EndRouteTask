import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnChanges, OnDestroy {
  @Input() transactions: any[] = [];
  chart: Chart | null = null;

  ngOnChanges(): void {
    this.createChart();
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  createChart(): void {
    if (this.chart) {
      this.chart.destroy();
    }

    const labels = this.transactions?.map(transaction => transaction.date);
    const data = this.transactions?.map(transaction => transaction.amount);

    this.chart = new Chart('Transactions', {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Transactions',
          data: data,
          fill: false,
          borderColor: '#3252dfda',
          tension: 0.1
        }]
      }
    });
  }
}
