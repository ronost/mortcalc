import { Mortgage } from './models/mortgage.model';

export interface AppState {
  readonly mortgage: Mortgage;
}