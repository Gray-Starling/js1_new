"use strict";

let mover = {
    getDirection() {
        const availableDirection = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        while (true) {
            let direction = +prompt("Введите число (1, 2, 3, 4, 5, 6, 7, 8, 9), куда вы хотите переместиться, \"Отмена\" для выхода");
            if (isNaN(direction) || direction === 0) {
                return null;
            }
            if (!availableDirection.includes(direction)) {
                alert("Для перемещения необходимо ввести одно из чисел 1, 2, 3, 4, 5, 6, 7, 8, 9");
                continue;
            }
            return direction;
        }
    },

    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };
        switch (direction) {
            case 1:
                if(player.y >= (config.rowsCount - 1) || player.x <= 0) {
                    alert("Вы покидаете поле");
                    break;
                } else {
                    nextPosition.y++;
                    nextPosition.x--;
                    break;
                }
            case 2:
                if (player.y >= (config.rowsCount - 1)) {
                    alert("Вы покидаете поле");
                    break;
                } else {
                    nextPosition.y++;
                    break;
                }
            case 3:
                if(player.y >= (config.rowsCount - 1) || player.x >= (config.colsCount - 1)){
                    alert("Вы покидаете поле");
                    break;
                } else {
                    nextPosition.y++;
                    nextPosition.x++;
                    break;
                }
            case 4:
                if (player.x <= 0) {
                    alert("Вы покидаете поле");
                    break;
                } else {
                    nextPosition.x--;
                    break;
                }
            case 6:
                if (player.x >= (config.colsCount - 1)) {
                    alert("Вы покидаете поле");
                    break;
                } else {
                    nextPosition.x++;
                    break;
                }
            case 7:
                if(player.x <= 0 || player.y <= 0){
                    alert("Вы покидаете поле");
                    break;
                }else {
                    nextPosition.x--;
                    nextPosition.y--;
                    break;
                }
            case 8:
                if (player.y <= 0) {
                    alert("Вы покидаете поле");
                    break;
                } else {
                    nextPosition.y--;
                    break;
                }
            case 9:
                if (player.x >= (config.colsCount - 1) || player.y <= 0){
                    alert("Вы покидаете поле");
                    break;
                }else {
                    nextPosition.x++;
                    nextPosition.y--;
                    break;
                }
        }
        return nextPosition;
    }
};