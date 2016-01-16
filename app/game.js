System.register([], function(exports_1) {
    var Game;
    return {
        setters:[],
        execute: function() {
            Game = (function () {
                function Game(numberOfPlayers, timed) {
                    this.numberOfPlayers = numberOfPlayers;
                    this.timed = timed;
                }
                return Game;
            })();
            exports_1("Game", Game);
        }
    }
});
//# sourceMappingURL=game.js.map