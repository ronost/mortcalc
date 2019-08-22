import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { InterestRate } from 'src/app/models/interestrate.model';

@Component({
    selector: 'running-costs',
    templateUrl: './running-costs.component.html',
    styleUrls: ['./running-costs.component.css']
  })

export class RunningCostsComponent implements OnInit, OnChanges {
    operatingCostsStep: number = 100;
    costsTable: Array<any> = [];
    displayedColumns: Array<string> = ['name', 'operatingCosts', 'amortisation', 'monthlyCost'];
    @Input() price: number;
    @Input() downPayment: number;
    @Input() operatingCosts: number;
    @Output() operatingCostsChange = new EventEmitter<number>();
    @Input() interestRates: Array<InterestRate> = [];
    @Input() interestRateId: number;
    @Output() interestRateIdChange = new EventEmitter<number>();

    ngOnInit() {
    }

    ngOnChanges() {
      this.costsTable = [];
      
      let amortisationValuePerMonth;
      if ((this.downPayment / this.price) <= 0.25) {
          amortisationValuePerMonth = (this.price * 0.02) / 12;
      }
      else if ((this.downPayment / this.price) <= 0.5 && (this.downPayment / this.price) > 0.25) {
          amortisationValuePerMonth = (this.price * 0.01) / 12;
      }
      else {
          amortisationValuePerMonth = 0;
      }

      Object.values(this.interestRates).forEach(interestRate => {
          this.costsTable.push({
              position: interestRate.id,
              name: interestRate.interestRate + " %",
              operatingCosts: this.operatingCosts,
              amortisation: amortisationValuePerMonth,
              monthlyCost: this.operatingCosts + ((this.price * (interestRate.interestRate / 100)) / 12) 
          })
      });
    }

    incrementOperatingCosts() {
        this.operatingCostsChange.emit(this.operatingCosts + this.operatingCostsStep);
    }

    decrementOperatingCosts() {
        if ((this.operatingCosts - this.operatingCostsStep) < 0) {
            this.operatingCostsChange.emit(0);
        } else {
            this.operatingCostsChange.emit(this.operatingCosts - this.operatingCostsStep);
        }
    }

    updateInterestRateId(event) {
        this.interestRateIdChange.emit(event.value);
    }
}
