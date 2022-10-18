class SavingsAccount extends Account{
    constructor(number, interest){
        super(number);
        this._interest = interest;
    }
    getInterest(){
        return this._interest;
    }
    setInterest(interest){
        this._interest = interest; 
    }

    addInterest(){
        this.deposit(this._balance * (this._interest/100));
    }

    toString() {
        return "Savings Account " + this._number + ": balance " + this._balance + ": interest " + this._interest + "%";
    }
    
    endOfMonth(){
        const prevBalance = this.getBalance();
        // console.log(prevBalance);
        this.addInterest();
        const output = `Interest added SavingsAccount ${this.getNumber()}: balance: ${this.getBalance()} interest ${this.getBalance() - prevBalance}`;
        return output;
    }
}