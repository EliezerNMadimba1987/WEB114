// Week 2 - Budget Activity using JavaScript by Eliezer Ntongo Madimba on October 17, 2025

"use strict";

let money = 8000;
let housing = 1550;
let food = 1000;
let monthlyUtilities = 350;

// Calculation of total income, total expenses, remaining money and percentages

let totalIncome = money;
let totalExpenses = housing + food + monthlyUtilities;
let remainingMoney = money - totalExpenses;
let rentPercentage = (housing / money) * 100;
let foodPercentage = (food / money) * 100;

// Output the results

console.log("The total income was:" + totalIncome.toLocaleString("en-US", { style: "currency", currency: "USD" }));
console.log("The rent total was: " + housing.toLocaleString("en-US", { style: "currency", currency: "USD" }));
console.log("The grocery total was: " + food.toLocaleString("en-US", { style: "currency", currency: "USD" }));
console.log("Percentage spent on rent: " + rentPercentage.toFixed(2) + "%");
console.log("Percentage spent on grocerie: " + foodPercentage.toFixed(2) + "%");
console.log("Remaining money after expenses: " + remainingMoney.toLocaleString("en-US", {style: "currency", currency: "USD" }));

