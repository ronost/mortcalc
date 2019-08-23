import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MortgageCalculatorComponent } from './containers/mortgage-calculator/mortgage-calculator.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoanRatioComponent } from './components/loan-ratio/loan-ratio.component';
import { RunningCostsComponent } from './components/running-costs/running-costs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { InterestRatesEffects } from './store/effects/interestrate.effects';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCER, META_REDUCERS } from './store/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        EffectsModule.forRoot([InterestRatesEffects]),
        MatExpansionModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule,
        MatTableModule,
        ReactiveFormsModule,
        StoreModule.forRoot(ROOT_REDUCER, { metaReducers: META_REDUCERS }), 
        StoreDevtoolsModule.instrument({ maxAge: 25 })
      ],
      declarations: [
        AppComponent,
        MortgageCalculatorComponent,
        LoanRatioComponent,
        RunningCostsComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
