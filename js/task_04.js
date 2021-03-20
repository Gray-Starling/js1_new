"use strict";

/*
Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:

1. Получить все товары, у которых есть фотографии, можете использовать метод filter 
2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
*/

const products = [
	{
		id: 3,
		price: 127,
		photos: [
			"1.jpg",
			"2.jpg",
		]
	},
	{
		id: 5,
		price: 499,
		photos: []
	},
	{
		id: 10,
		price: 26,
		photos: [
			"3.jpg"
		]
	},
	{
		id: 8, price: 78,
	},
];
//----------------------------------------------------------------------------------------------------------------------------------
// 1. Получить все товары, у которых есть фотографии, можете использовать метод filter 
//------ 1.1

/**
 * Перебирает все значения и возвращает массив объектов со свойством photos
 */
function getPhotos() {
	let arr = [];
	for (let i = 0; i < products.length; i++) {
		if ("photos" in products[i]) {
			arr.push(products[i]);
		}
	}
	return arr;
}

/**
 * Перебирает все значения и возвращает массив объектов у которых свойство photos не пустое
 */
function getImgInclude() {
	let arr = [];
	for (let i = 0; i < photosInclude.length; i++) {
		if (products[i].photos.length > 0) {
			arr.push(products[i]);
		}
	}
	return arr;
}

//Отсеиваем все значения не содержащие свойство photos
let photosInclude = getPhotos();

//Отсеиваем все значения у которых свойство photos пустое. По факту оно не пустое, а .length == 0
let imgInclude = getImgInclude();

console.log(imgInclude);

//------ 1.2

/**
 * Если в элементе есть свойство photos и его length > 0 возвращает элемент
 */
function includePhotos(prod) {
	if ("photos" in prod && prod.photos.length > 0) {
		return prod;
	}
}

//создаем переменную, в которую будем записывать в виде массива отфильтрованные значения функцией includePhotos из массива products
let imgInclude2 = products.filter(includePhotos);

console.log(imgInclude2);

//----------------------------------------------------------------------------------------------------------------------------------
// 2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
//------ 2.1

products.sort(function (a, b) {
	if (a.price > b.price) {
		return 1;
	}
	if (a.price < b.price) {
		return -1;
	}
	return 0;
});

console.log(products);

//------ 2.2
/*
Пузырьковая сортировка. Возможная сортировка без использования метода sort. Являеться крайне не эффективной так как при росте размера массива ростет и время на его обработку.
 Подсмотренно в гугле:-)

function bubbleSort(arr) {
	let a = arr.length - 1;
	for (var i = 0; i < a; i++) {

		let wasSwap = false;
		let b = a - i;

		for (var j = 0; j < b; j++) {
			if (arr[j].price > arr[j + 1].price) {
				var swap = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = swap;
				wasSwap = true;
			}
		}
		if (!wasSwap) break;
	}
	return arr;
}

let some = bubbleSort(products);
console.log(some);

*/




