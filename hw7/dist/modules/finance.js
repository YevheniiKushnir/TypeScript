export var Finance;
(function (Finance) {
    class LoanCalculator {
        creditSum;
        months;
        monthlyRate = 0.05;
        constructor(creditSum, months) {
            this.creditSum = creditSum;
            this.months = months;
        }
        getCredit() {
            return ((this.creditSum *
                (this.monthlyRate * Math.pow(1 + this.monthlyRate, this.months))) /
                (Math.pow(1 + this.monthlyRate, this.months) - 1)).toFixed(2);
        }
    }
    Finance.LoanCalculator = LoanCalculator;
    class TaxCalculator {
        income;
        rate = 0.19;
        constructor(income) {
            this.income = income;
        }
        getTax() {
            return (this.income * this.rate).toFixed(2);
        }
    }
    Finance.TaxCalculator = TaxCalculator;
})(Finance || (Finance = {}));
//# sourceMappingURL=finance.js.map