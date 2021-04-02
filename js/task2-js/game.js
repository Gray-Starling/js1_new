"use strict";

let game = {
    run() {
        while (true) {
            const direction = mover.getDirection();
            if (direction === null) {
                console.log("игра окончена");
                return;
            }
            const nexPoint = mover.getNextPosition(direction);
            renderer.clear();
            player.move(nexPoint);
            renderer.render();
        }
    },

    init() {
        console.log("Ваше положение на поле в виде о.")
        renderer.render();
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter");
    }
};

game.init();