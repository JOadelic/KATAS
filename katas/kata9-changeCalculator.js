// calculateChange should return an object which describes the total amount of change for the cashier to give back. 
//Although pennies are not used in circulation, we will still calculate the amount of pennies to give back.

let calculateChange = function(total, cash) {
  let change = cash - total;
  final = {};
  
  if (change >= 2000) {
    final.twentyDollar = Math.floor(change / 2000);
    change = change % 2000;
  } if (change >= 1000) {
    final.tenDollar = Math.floor(change / 1000);
    change = change % 1000;
  } if (change >= 500) {
    final.fiveDollar = Math.floor(change / 500);
    change = change % 500;
  } if (change >= 200) {
    final.twoDollar = Math.floor(change / 200);
    change = change % 200;
  } if (change >= 100) {
    final.oneDollar = Math.floor(change / 100);
    change = change % 100;
  } if (change >= 25) {
    final.quarter = Math.floor(change / 25);
    change = change % 25;
  } if (change >= 10) {
    final.dime = Math.floor(change / 10);
    change = change % 10;
  } if (change >= 5) {
    final.nickel = Math.floor(change / 5);
    change = change % 5;
  } if (change >= 1) {
    final.penny = change;
  }
  
 return final;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

// EXPECTED OUTPUT
// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }