"use strict";

alert("Задание 4");

/* 
Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя 
параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их 
и возвращать результат.
Обязательно использовать оператор return.
*/


/**
 * Функция складывает полученные параметры.
 * @param {Number} arg1 Первый параметр.
 * @param {Number} arg2 Второй параметр.
 * @returns {Number} Результат сложения.
 */
function sum(arg1, arg2) {
	return (arg1 + arg2);
}

/**
 * Функция вычетает полученные параметры.
 * @param {Number} arg1 Первый параметр.
 * @param {Number} arg2 Второй параметр.
 * @returns {Number} Результат вычетания.
 */
function dif(arg1, arg2) {
	return (arg1 - arg2);
}

/**
 * Функция умножает полученные параметры.
 * @param {Number} arg1 Первый параметр.
 * @param {Number} arg2 Второй параметр.
 * @returns {Number} Результат умножения.
 */
function mul(arg1, arg2) {
	return (arg1 * arg2);
}

/**
 * Функция делит полученные параметры.
 * @param {Number} arg1 Первый параметр.
 * @param {Number} arg2 Второй параметр.
 * @returns {Number} Результат деления.
 */
function div(arg1, arg2) {
	return (arg1 / arg2);
}

let a = parseInt(Math.random() * 100);
let b = parseInt(Math.random() * 100);

document.write(`Сумма чисел ${a} и ${b} равняется ${sum(a, b)}.<br>`);
document.write(`Разница чисел ${a} и ${b} равняется ${dif(a, b)}.<br>`);
document.write(`Произведение чисел ${a} и ${b} равняется ${mul(a, b)}.<br>`);
document.write(`Операция деления чисел ${a} и ${b} равняется ${div(a, b)}.<br>`);