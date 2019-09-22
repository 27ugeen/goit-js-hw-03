'use strict';

// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы
// для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw'
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  balance: 0,
  transactions: [],

  getTransactions() {
    return this.transactions;
  },

  getBalance() {
    this.addBalance();
    return `Total Balance: ${this.balance}`;
  },

  addBalance() {
    let totalAmount = 0;
    for (let i = 0; i < this.transactions.length; i += 1) {
      const request = this.transactions[i];
      if (request.type === 'deposit') {
        totalAmount += request.amount;
      }
      if (request.type === 'withdraw') {
        totalAmount -= request.amount;
      }
    }
    this.balance = totalAmount;
    return this.balance;
  },

  deposit(amount) {
    const nextId = this.transactions.length + 1;
    const action = {
      id: nextId,
      type: 'deposit',
      amount
    };
    return this.addTransaction(action);
  },

  withdraw(amount) {
    if (this.balance < amount) {
      return `Не достаточно средств: ${this.balance -
        amount}, сумма на счету: ${this.balance}!`;
    }
    const nextId = this.transactions.length + 1;
    const action = {
      id: nextId,
      type: 'withdraw',
      amount
    };
    return this.addTransaction(action);
  },

  addTransaction(transaction) {
    return this.transactions.push(transaction);
  },

  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      const request = this.transactions[i];

      if (request.id === id) {
        return request;
      }
    }
    return `Такого id: ${id} нет в базе!`;
  },

  getTransactionTotal(type) {
    let amountSum = 0;

    for (let i = 0; i < this.transactions.length; i += 1) {
      const request = this.transactions[i];
      if (request.type === type) {
        amountSum += request.amount;
      }
    }
    return `Сумма по транзакциям '${type}': ${amountSum}.`;
  }
};
//=======================================================================
console.table(account.getTransactions());
console.log(account.getBalance());

account.addTransaction({ id: 1, type: 'deposit', amount: 30 });
console.table(account.getTransactions());
console.log(account.getBalance());

account.deposit(40);
console.table(account.getTransactions());
console.log(account.getBalance());

account.withdraw(50);
console.table(account.getTransactions());
console.log(account.getBalance());

console.table(account.withdraw(60));
console.log(account.getBalance());

console.log(account.getTransactionDetails(3));
console.log(account.getTransactionDetails(4));

console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));
