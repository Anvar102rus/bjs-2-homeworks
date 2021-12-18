"use strict";

function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  
    let D = b ** 2 - 4 * a * c;

    if (D < 0) {
      return [];
    } else if (D === 0) {
      return [-b / 2 * a];
    } else {
      return [(-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a)];
    }
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
