export namespace Finance {
  export class LoanCalculator {
    private monthlyRate = 0.05;
    constructor(private creditSum: number, private months: number) {}
    getCredit(): string {
      return (
        (this.creditSum *
          (this.monthlyRate * Math.pow(1 + this.monthlyRate, this.months))) /
        (Math.pow(1 + this.monthlyRate, this.months) - 1)
      ).toFixed(2);
    }
  }
  export class TaxCalculator {
    private rate = 0.19;
    constructor(private income: number) {}

    getTax(): string {
      return (this.income * this.rate).toFixed(2);
    }
  }
}
