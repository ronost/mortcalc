export interface InterestRate {
    id: number;
    name: string;
    period: number;
    interestRate: number;
}

export interface InterestRateRestResponse {
    items: Array<InterestRate>
}
