class Snake {
    element: HTMLElement;
    head: HTMLElement;
    bodies: HTMLCollection;
    constructor() {
        this.element = document.getElementById("snake")!;
        this.head = document.querySelector("#snake>div") as HTMLElement;
        this.bodies = this.element.getElementsByTagName("div");
    }
    get X() {
        return this.head.offsetLeft;
    }
    get Y() {
        return this.head.offsetTop;
    }
    set X(value: number) {
        if (this.X === value) {
            return
        }
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了')
        }
        // 修改x时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时，不能向右掉头，反之亦然
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            // console.log('水平方向发生了掉头');
            // 如果发生了掉头，让蛇向反方向继续移动
            if (value > this.X) {
                // 如果新值value大于旧值X，则说明蛇在向右走，此时发生掉头，应该使蛇继续向左走
                value = this.X - 10;
            } else {
                // 向左走
                value = this.X + 10;
            }
        }
        this.moveBody()
        this.head.style.left = value + "px";
        this.checkHead()
    }
    set Y(value: number) {
        if (this.Y === value) {
            return
        }
        if (this.Y < 0 || this.Y > 290) {
            throw new Error('蛇撞墙了')
        }
        // 修改x时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时，不能向右掉头，反之亦然
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            // console.log('水平方向发生了掉头');
            // 如果发生了掉头，让蛇向反方向继续移动
            if (value > this.Y) {
                // 如果新值value大于旧值Y，则说明蛇在向下走，此时发生掉头，应该使蛇继续向上走
                value = this.Y - 10;
            } else {
                // 向下走
                value = this.Y + 10;
            }
        }
        this.moveBody()
        this.head.style.top = value + "px";
        this.checkHead()
    }

    // 蛇变长的办法
    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>");
    }

    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }
    checkHead() {
        for (let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                throw new Error('撞到自己了')
            }
        }
    }
}
export default Snake;
