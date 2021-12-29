class ScorePanel {
    score:number
    level:number
    degree:number=10
    maxLevel:number=8
    scoreEle:HTMLElement
    levelEle:HTMLElement

    constructor() {
        this.score=0
        this.level=1
        this.scoreEle=document.getElementById('score')!
        this.levelEle=document.getElementById('level')!
    }

    setDegree(degreeValue:number,maxLevelValue:number){
        this.degree = degreeValue
        this.maxLevel = maxLevelValue
    }

    addScore(){
        this.score++
        this.scoreEle.innerHTML=this.score+''
        // console.log('测试'+this.score);
        if(this.score%this.degree===0){
            this.levelUp()
        }
    }

    levelUp(){
        if(this.level<=this.maxLevel){
            this.level++
            this.levelEle.innerHTML=this.level+''
        }
        // console.log('测试'+this.level);
    }
}

export default ScorePanel