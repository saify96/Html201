'use strict';

let userName = prompt ("What is your name?");
console.log(typeof userName );
let userAge = prompt ("How old are you?");
userAge = parseInt(userAge);
console.log(typeof userAge );
let survey = prompt ("What is your favourite platform?" , "Binance , Coinbase");
console.log(typeof survey );
let favCurrency = prompt ("What is your favorite currency?" , "BTC , ETH , BNB");
console.log(typeof favCurrency );

alert ('Your name is ' + userName + ' and your age is ' + userAge + ' you favourite artist is ' + survey + ' And your favourite currency is ' + favCurrency);

