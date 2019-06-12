export interface Mortgage {
    price: Amount;
    downPayment: Amount;
    operatingCosts: Amount;
    interestRate: string
}

export interface Amount {
    value: number;
    currency: string;
}