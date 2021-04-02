"use strict";

let leader = {
    //Метод создает окно вопроса и варианты ответов
    askQuestion(question) {
        //Изначально переменная пуста
        let variations = "";
        //С помощью цикла перебираем все ключи и значения, записываем их в переменную
        for (let key in question.variantsOfAnswer) {
            variations += `${key}: ${question.variantsOfAnswer[key]}\n`;
        }
        //Задаем вопрос игроку. Принимает на входе индекс вопроса и выводит значение текста вопроса
        // и сгенерированые циклом варианты ответов
        let answer = prompt(`${question.textOfQuestion} \nварианты ответа:\n${variations}`);
        //Возвращаем true или false в зависимости верен ли ответ или нет
        return answer === question.correctAnswer;
    }
};