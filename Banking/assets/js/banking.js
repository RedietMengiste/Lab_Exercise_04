var Account_1 = {
  Balance: 10000,
  deposit: function () {
    depositAmount = parseInt(prompt("How many values do you want to deposit?"));

    this.Balance += depositAmount;
    return depositAmount;
  },
  withdraw: function () {
    var withdrawAmount = parseInt(
      prompt("Enter the amount of money you want to withdraw: ")
    );
    if (this.Balance <= withdrawAmount) {
      console.log(
        "You cannot withdraw more than your balance, please check your balance and try again!"
      );
      return;
    } else this.Balance -= withdrawAmount;
    return (
      "You have succesfully withdrawn " +
      withdrawAmount +
      "birr from your account."
    );
  },
  check_balance: function () {
    var chooseAct = parseInt(
      prompt("Choose account 1('1') or account 2('2'):")
    );
    if (chooseAct == 1) {
      return this.Balance;
    }
    if (chooseAct == 2) {
      return Account_2.Balance2;
    }
  },

  transfer: function () {
    //var Balance=10000;
    var chooseAct = parseInt(
      prompt(
        "Choose account to whom you want to transfer 1('1') or account 2('2'):"
      )
    );
    if (chooseAct == 1) {
      var Rname = prompt("Enter reciepients full name: ");
      var transferedAmount = parseInt(
        prompt("Enter the amount of money you want to send to Account 1: ")
      );

      if (transferedAmount >= Account_2.Balance || transferedAmount < 100) {
        console.log(
          "You cannot transfer more than your balance and below 100br, please try again!"
        );
        return;
      } else this.Balance += transferedAmount;
      Account_2.Balance2 -= transferedAmount;
      return (
        "You have succesfully transferred " +
        transferedAmount +
        "birr to " +
        Rname
      );
    }

    if (chooseAct == 2) {
      var Rname = prompt("Enter reciepients full name: ");
      var transferedAmount = parseInt(
        prompt("Enter the amount of money you want to send to Account 2: ")
      );

      if (transferedAmount >= this.Balance || transferedAmount < 100) {
        console.log(
          "You cannot transfer more than your balance and below 100br, please try again!"
        );
        return;
      } else this.Balance -= transferedAmount;
      Account_2.Balance2 += transferedAmount;
      return (
        "You have succesfully transferred " +
        transferedAmount +
        "birr to " +
        Rname
      );
    }
  },
};

var Account_2 = {
  Balance2: 4000,
};

let fun = (function () {
  var choice = parseInt(
    prompt("Welcome! please write '1' to continue: else enter '0'")
  );
  while (choice) {
    var userPrompt = prompt(
      "Enter 'b' for balance \nEnter 'w' for Withdrawal \nEnter 'd' for deposit \nEnter 't' for transfer ?"
    );

    switch (userPrompt) {
      case "b":
        console.log(
          "Your account balace is : " + Account_1.check_balance() + " birr."
        );
        break;
      case "w":
        console.log(Account_1.withdraw());
        break;

      case "d":
        console.log(
          "You have succesfsully deposited " + Account_1.deposit() + " birr."
        );
        break;
      case "t":
        console.log(Account_1.transfer());
        break;
    }

    choice = parseInt(
      prompt("Welcome! please write '1' to continue: else enter '0'")
    );
    if (choice == 0) {
      break;
    }
  }
})();
