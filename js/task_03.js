"use strict";

const products = [
	{
		id: 3,
		price: 200,
	},
	{
		id: 4,
		price: 900,
	},
	{
		id: 1,
		price: 1000,
	},
];

//Создаем переменную с размером скидки
let discount = 15;

//Перебираем массив. При этом в каждом вызове мы обращаемся к свойству price и изменяем его относительно размера скидки.
//Перебор массива в данном случае будет иметь вид products[i].price - где i индекс элемента, а .price свойство объекта
products.forEach(function (prod) {
	prod.price = prod.price - (prod.price * discount / 100);
})