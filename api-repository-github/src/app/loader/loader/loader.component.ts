import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  styleUrls: ['./loader.component.css'],
  template: `
  <div *ngIf="loading" class="loader-container">
    <mat-progress-bar mode="indeterminate"></mat-progress-bar>
  </div>
  `
})
export class LoaderComponent implements OnInit {

  public loading: boolean
  private subscription: Subscription

  constructor(private service: LoaderService) {}

  ngOnInit(): void {
    this.subscription = this.service.isLoading.subscribe(show => {
      this.loading = show
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
