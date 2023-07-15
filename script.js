let sal = prompt("Введіть розмір вашої зарплати");
let bonus = sal * 0.15;
let tax = (parseFloat(sal) + bonus) * 0.1;
let expens = 190;
let remainingSalary = sal - (bonus + tax + expens);

console.log(remainingSalary);

alert("Залишок від вашої зарплати: " + remainingSalary); 