class CheckingAccount extends Account{
    constructor(name, overdraftLimit){
        super(name);
        this._overdraftLimit = overdraftLimit;
    }
    getOverdraftLimit(){
        return this._overdraftLimit;
    }
    setOverdraftLimit(limit){
        this._overdraftLimit = limit;
    }

    withdraw(amount) {
        if (amount > this._balance + this._overdraftLimit) {
            throw new RangeError(`Your overdrft limit is : ${this._overdraftLimit} which is exceeded`);
        }
        this._balance -= amount;
    }

    toString() {
        return "Checking Account " + this._number + ": balance " + this._balance + ": overdraft Limit " + this._overdraftLimit;
    }

    endOfMonth(){
        if(this._balance < 0)
            return "Warning, low balance CheckingAccount " + this._number + ": balance: " + this._balance + " overdraft limit: " + this._overdraftLimit;
    }
}