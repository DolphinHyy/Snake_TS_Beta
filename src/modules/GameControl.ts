import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

class GameControl {
    food: Food
    snake: Snake
    scorePanel: ScorePanel
    direction: string = ''
    isLive = true
    // timer: any
    constructor() {
        this.food = new Food()
        this.snake = new Snake()
        this.scorePanel = new ScorePanel()
        this.init()
    }

    init() {
        document.addEventListener('keydown', this.keyDownHandler.bind(this))
        this.run()
    }

    keyDownHandler(event: KeyboardEvent) {
        this.direction = event.key

        // }
        // if (this.isLive) {
        //     this.timer = setTimeout(this.run.bind(this), 550 - this.scorePanel.level * 50)
        // }
    }

    run() {
        let X = this.snake.X
        let Y = this.snake.Y
        // let Up: 'ArrowUp' | 'Up'
        // let Down: 'ArrowDown' | 'Down'
        // let Left: 'ArrowLeft' | 'Left'
        // let Right: 'ArrowRight' | 'Right'

        switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
                Y -= 10
                break;
            case 'ArrowDown':
            case 'Down':
                Y += 10
                break;
            case 'ArrowLeft':
            case 'Left':
                X -= 10
                break;
            case 'ArrowRight':
            case 'Right':
                X += 10
                break;
            default:
                break;
        }
        this.checkEat(X, Y)

        try {
            this.snake.X = X
            this.snake.Y = Y
        } catch (e) {
            alert(e + 'GAME OVER')
            this.isLive = false
        }
        // if (this.isLive) {
        //     clearTimeout(this.timer)
        //     this.timer = setTimeout(this.run.bind(this), 450 - this.scorePanel.level * 50)
        // }
        this.isLive && setTimeout(this.run.bind(this), 330 - this.scorePanel.level * 30)
    }

    checkEat(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            this.food.change()
            this.scorePanel.addScore()
            this.snake.addBody()
        }
    }
}

export default GameControl