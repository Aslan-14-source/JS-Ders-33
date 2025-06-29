const account = {
    owner: "Aslan Qasımov",
    balance: 0,

    deposit(amount) {
        if (amount <= 0) {
            console.log("Əlavə olunan məbləğ sıfırdan böyük olmalıdır.");
            return;
        }
        this.balance += amount;
        console.log(`${amount} AZN hesaba əlavə olundu.`);
    },

    withdraw(amount) {
        if (amount <= 0) {
            console.log("Çıxılan məbləğ sıfırdan böyük olmalıdır.");
            return;
        }
        if (amount > this.balance) {
            console.log("Balansda kifayət qədər vəsait yoxdur.");
        } else {
            this.balance -= amount;
            console.log(`${amount} AZN çıxarıldı. Qalan balans: ${this.balance} AZN`);
        }
    },

    checkBalance() {
        console.log(`Cari balans: ${this.balance} AZN`);
    }
};

account.deposit(100);
account.withdraw(50);
account.withdraw(100);
account.checkBalance();
