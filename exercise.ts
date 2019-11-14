type BankAccount = { money: number; deposit: (val: number) => void };

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};

type Person = { name: string; bankAccount: BankAccount; hobbies: string[] };

let myself: Person = {
    name: "Beau",
    bankAccount: bankAccount,
    hobbies: ["Cooking", "Video Games"]
};

myself.bankAccount.deposit(3000);

console.log(myself);
