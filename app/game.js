System.register([], function(exports_1) {
    var Game;
    return {
        setters:[],
        execute: function() {
            Game = (function () {
                function Game(numberOfPlayers, timed, step, // 0 = not started, 1 = write, 2 = pass, 3 = draw, 4 = pass
                    images) {
                    this.numberOfPlayers = numberOfPlayers;
                    this.timed = timed;
                    this.step = step;
                    this.images = images;
                }
                return Game;
            })();
            exports_1("Game", Game);
        }
    }
});
//# sourceMappingURL=game.js.map