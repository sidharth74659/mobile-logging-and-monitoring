import { Component, OnInit } from '@angular/core';
import { MonitoringService } from '../monitoring/monitoring.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {

  metrics: string = '';

  constructor(
    private monitoringService: MonitoringService
  ) { }

  ngOnInit() {
    this.monitoringService.getMetrics().subscribe(metrics => {
      this.metrics = metrics;
    });
  }

}
