class ScorePanel {
    score = 0
    level = 1
    degree: number = 5
    maxLevel: number = 6
    scoreEle: HTMLElement
    levelEle: HTMLElement

    constructor() {
        this.scoreEle = document.getElementById('score')!
        this.levelEle = document.getElementById('level')!
    }

    setDegree(degreeValue: number, maxLevelValue: number) {
        this.degree = degreeValue
        this.maxLevel = maxLevelValue
    }

    addScore() {
        this.scoreEle.innerHTML = ++this.score + ''
        // console.log('测试'+this.score);
        if (this.score % this.degree === 0) {
            this.levelUp()
        }
    }

    levelUp() {
        if (this.level <= this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + ''
        }
        // console.log('测试'+this.level);
    }
}

export default ScorePanel