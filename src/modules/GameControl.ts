import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

class GameControl {
    food:Food
    snake:Snake
    scorePanel:ScorePanel
    constructor() {
        this.food = new Food()
        this.snake = new Snake()
        this.scorePanel=new ScorePanel()
    }
}