"use strict";

const post = {
	author: "John", //вывести этот текст
	postId: 23,
	comments: [
		{
			userId: 10,
			userName: "Alex",
			text: "lorem ipsum",
			rating: {
				likes: 10,
				dislikes: 2 //вывести это число
			}
		},
		{
			userId: 5, //вывести это число
			userName: "Jane",
			text: "lorem ipsum 2", //вывести этот текст
			rating: {
				likes: 3,
				dislikes: 1
			}
		},
	]
};

//объект post и в нем свойство author. Выводим значение
console.log(post.author);

//объект post и в нем свойство comments, значение которого массив.
//Берем первый элемент массива с индексом 0. Этот элемент являеться объектом.
//В этом объекте берем свойство rating значение которого объект.
//В последнем объекте берем свойство dislikes и выводим его значение.
console.log(post.comments[0].rating.dislikes);

//post => comments Берем второй элемент с индексом 1. Так же являеться объектом.
//Берем свойство userId и выводим его.
console.log(post.comments[1].userId);

//Аналогично предидущему выводу. Берем свойство text и выводим его значение.
console.log(post.comments[1].text);