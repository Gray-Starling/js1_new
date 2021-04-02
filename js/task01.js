"use strict";

let a;
let object = {};

function numToObject() {
    a = +prompt("Введите число от 0 до 999");
    if (a < 0 || a > 999) {
        console.log("Введенно не коректное число");
        return object;
    } else object = {
        hundreds: Math.floor(a / 100),
        dozens: Math.floor((a - (Math.floor(a / 100) * 100)) / 10),
        units: Math.floor(a - (Math.floor(a / 100) * 100 + Math.floor((a - (Math.floor(a / 100) * 100)) / 10) * 10))
    }
    return object;
}

numToObject();


/*
Следующий код наверное будет более читабелен, но возможно менее правильный.
let a;
let object = {};
function numToObject() {
	a = +prompt("Введите число от 0 до 999");
	let h = Math.floor(a / 100);
	let d = Math.floor((a - (h * 100)) / 10);
	let u = Math.floor(a - (h * 100 + d * 10));
	if (a < 0 || a > 999) {
		console.log("Введенно не коректное число");
		return object;
	} else object = {
		hundreds: h,
		dozens: d,
		units: u
	}
}
numToObject();
*/