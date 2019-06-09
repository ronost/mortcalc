export interface Mortgage {
    price: Amount;
    downPayment: Amount;
    interestRate: string
}

export interface Amount {
    value: number;
    currency: string;
}