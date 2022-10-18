class Bank{
    static nextNumber = 1;
    constructor(){
        this._accounts = [];
    }
    _createUniqueAccountNumber(){
        return window.crypto.getRandomValues(new Uint32Array(10));
    }
    addAccount(){
        let accountNo = Bank.nextNumber;
        Bank.nextNumber++;
        const account = new Account(accountNo);
        this._accounts.push(account);
        return accountNo;
    }
    addSavingsAccount(interest){
        let accountNo = Bank.nextNumber;
        Bank.nextNumber++;
        const savingsAccount = new SavingsAccount(accountNo, interest);
        this._accounts.push(savingsAccount);
        return accountNo;
    }
    addCheckingAccount(overdraft){
        let accountNo = Bank.nextNumber;
        Bank.nextNumber++;
        const checkingAccount = new CheckingAccount(accountNo, overdraft);
        this._accounts.push(checkingAccount);
        return accountNo;
    }
    closeAccount(number){
        this._accounts.splice(this._accounts.indexOf(number) - 1, 1);
    }
    accountReport(){
        let reportString = "";
        for(let account of this._accounts){
            reportString += account.toString() + "\n"
        }
        return reportString;
    }

    toString(){
        for(let account of this._accounts){
            console.log(`Account number: ${account.getNumber()} Account type: ${account.constructor.name}`);
        }
    }
    getNumberOfAccounts(){
        return this._accounts.length;
    }

    endOfMonth(){
        for(let account of this._accounts){
            let x = account.endOfMonth();
            console.log(x);
        }
    }
}