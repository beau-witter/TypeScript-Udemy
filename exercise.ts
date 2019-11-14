let bankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};

let myself = {
    name: "Beau",
    bankAccount: bankAccount,
    hobbies: ["Cooking", "Video Games"]
};

myself.bankAccount.deposit(3000);

console.log(myself);
