var stage;
var helloText;
var canvas;

function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    main();
}

function gameLoop() {
    helloText.y += 1;
    helloText.rotation += 1;
    stage.update();
}

function main() {
    helloText = new createjs.Text("Hello World!", "40px Consolas", "#000000");
    stage.addChild(helloText);
    helloText.x = 100;
    helloText.y = 10;
}
//# sourceMappingURL=game.js.map
