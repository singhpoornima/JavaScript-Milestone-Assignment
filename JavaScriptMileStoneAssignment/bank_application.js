let userDetails = {
    userName: "Mihir",
    bankName: "XYZ",
    accountNumber: 123456,
    accountBalance: 75000,
    upDateAccountBalance: (withdraw) => {
        return accountBalance = `Account balance after withdraw: ${ userDetails.accountBalance - withdraw} and Withdraw Amount: ${withdraw}`;
    }
}

console.log(userDetails.upDateAccountBalance(5000));
  
  

  












