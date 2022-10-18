describe("Account tests", function () {
    const testAccount = new Account(111);

    it("returns account number 111 and balance: 0 after creating account and calling getNumber()", () => {
        assert.equal(testAccount.getNumber(), 111);
        assert.equal(testAccount.getBalance(), 0);
    });
    it("returns new balance: 100 after calling deposit(100)", () => {
        testAccount.deposit(100);
        assert.equal(testAccount.getBalance(), 100);
    });

    it("throws exception after calling deposit(-100) i.e. trying to deposit NEGATIVE values", () => {
        assert.throws(()=>{testAccount.deposit(-100)}, RangeError);
    });
    it("returns new balance: 50 after withdraw(50)", () => {
        testAccount.withdraw(50);
        assert.equal(testAccount.getBalance(), 50);
    });
    it("throws exception after calling withdraw(-100) i.e. trying to withdraw NEGATIVE values", () => {
        assert.throws(()=>{testAccount.withdraw(-100)}, RangeError);
    }); 
    it("throws exception after calling withdraw(500) i.e. trying to withdraw amount that is greater than balance 100", () => {
        assert.throws(()=>{testAccount.withdraw(500)}, Error);
    });
    it("returns Account 111: balance 100", () => {
        assert.equal(testAccount.toString(), "Account 111: balance 50");
    });
});

describe("Savings Account tests", function () {
    const savingsAccount = new SavingsAccount(111, 10);
    it("returns savings account interest rate: 10 after creating account and calling getInterest()", () => {
        savingsAccount.deposit(100);
        assert.equal(savingsAccount.getInterest(), 10);
    });
    it("returns newly set interest of 20% after calling setInterest and getInterest", () => {
        savingsAccount.setInterest(20);
        assert.equal(savingsAccount.getInterest(), 20);
    });
    it("returns updated balance 110 after applying interest 10% by calling addInterest()", () => {
        savingsAccount.setInterest(10);
        savingsAccount.addInterest();
        assert.equal(savingsAccount.getBalance(), 110);
    });
    it("returns Account 111: balance 100 interest 10%", () => {
        assert.equal(savingsAccount.toString(), "Savings Account 111: balance 110: interest 10%");
    });

    it("returns Interest added savings account 111: balance: 110 interest 10 as output of overridden toString()", () => {
        savingsAccount.withdraw(savingsAccount.getBalance());
        savingsAccount.deposit(100);
        assert.equal(savingsAccount.endOfMonth(), "Interest added SavingsAccount 111: balance: 110 interest 10");
    });
});


describe("Checking Account tests", function () {
    const checkingAccount = new CheckingAccount(111, 100);
    it("returns checking account overdraft limit: 100 after creating account and calling getOverdraftLimit()", () => {
        checkingAccount.deposit(100);
        assert.equal(checkingAccount.getOverdraftLimit(), 100);
    });
    it("returns current balance: 20 after calling withdraw(80)", () => {
        checkingAccount.withdraw(80);
        assert.equal(checkingAccount.getBalance(), 20);
    });

    it("returns current balance as negative within overdraft limit after calling withdraw(40)", () => {
        checkingAccount.withdraw(40);
        assert.equal(checkingAccount.getBalance(), -20);
    });
    
    it("throws ERROR when trying to withdraw amount that exceeds overdraft limit by calling withdraw(80)", () => {
        assert.throws(()=>{checkingAccount.withdraw(100)}, RangeError);
    });
    it("returns Checking Account 111: balance -20 : overdraft Limit 100 after calling overridden toString()", () => {
        assert.equal(checkingAccount.toString(), "Checking Account 111: balance -20: overdraft Limit 100");
    });
    
    it("returns Warning, low balance CheckingAccount 111: balance -20 overdraft limit: 100 after calling endOfMonth()", () => {
        assert.equal(checkingAccount.endOfMonth(), "Warning, low balance CheckingAccount 111: balance: -20 overdraft limit: 100");
    });
});

describe("Bank tests", function () {
    const bank = new Bank();
    it("returns account number: 1 after calling addAccount()", () => {
        assert.equal(bank.addAccount(), 1);
    });
    it("returns account number: 2 after calling addSavingsAccount(10)", () => {
        assert.equal(bank.addSavingsAccount(10), 2);
    });
    it("returns account number: 3 after calling addCheckingAccount(100)", () => {
        assert.equal(bank.addCheckingAccount(100), 3);
        bank.toString();
    });
    it("returns account report", () => {
        console.log(`BANK ACCOUNTS REPORT#`)
        console.log(bank.accountReport());
    });
    
    it("returns END OF MONTH REPORT", () => {
        bank._accounts.forEach(account => account.deposit(100));
        bank._accounts.find(account => account.getNumber() == 3).withdraw(120);
        
        console.log(`END OF MONTH REPORT#`)
        bank.endOfMonth();
    });
    
    it("returns 3 accounts first, after closeAccount(2), returns number of accounts: 2", () => {
        assert.equal(bank.getNumberOfAccounts(), 3);
        bank.closeAccount(2);
        assert.equal(bank.getNumberOfAccounts(), 2);
    });
});