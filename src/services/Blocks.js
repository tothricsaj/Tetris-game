export class Block {
    constructor() {
        this.x1 = null;
        this.x2 = null;
        this.x3 = null;
        this.x4 = null;

        this.y1 = null;
        this.y2 = null;
        this.y3 = null;
        this.y4 = null;

        this.color = null;

        this.width = 10;
        this.height = 10;
        this.moveDown = this.moveDown.bind(this);
    }

    getXDimensions() {
        return [
            this.x1,
            this.x2,
            this.x3,
            this.x4
        ];
    }

    getYDimensions() {
        return [
            this.y1,
            this.y2,
            this.y3,
            this.y4
        ];
    }

    moveDown(edge) {
        if (this.y1 <= edge) {
            this.y1 += 1;
            // this.y2 += downValue;
            // this.y3 += downValue;
            // this.y4 += downValue;
        }
    }

    moveRight() {
        // TODO: find a common solution for every block type
        if(this.x1 <= 5) {
            this.x1 += 1;
            // this.x2 += rightValue;
            // this.x3 += rightValue;
            // this.x4 += rightValue;
        }
    }

    moveLeft() {
        if (this.x1 >= 1) {
            this.x1 -= 1;
            // this.x2 -= leftValue;
            // this.x3 -= leftValue;
            // this.x4 -= leftValue;
        }
    }

    copyParams() {
        return {
            x1: this.x1, y1: this.y1,
            x2: this.x2, y2: this.y2,
            x3: this.x3, y3: this.y3,
            x4: this.x4, y4: this.y4,
            color: this.color
        }
    }
}

export class TestBlock extends Block {
    constructor() {
        super();

        this.x1 = 3;

        this.y1 = 0;

        let colors = ['orange', 'yellow', 'lightblue', 'grey'];
        this.color = colors[Math.floor(Math.random()*colors.length)];
    }
}

export class TBlock extends Block {
    constructor(startingPosX) {
        super();

        this.x1 = startingPosX - 1; // left
        this.x2 = startingPosX;      // 148 middle
        this.x3 = startingPosX + 1; // right
        this.x4 = startingPosX;      // bottom

        this.y1 = 0; // left
        this.y2 = 0; // middle
        this.y3 = 0; // right
        this.y4 = 1; // bottom

        this.color = 'rgb(30, 140, 180)';

        this.bottomEdge = {
            x: this.x4,
            y: this.y4
        }
    }
}

export class SBlock extends Block {
    constructor(startingPosX) {
        super();

        this.x1 = startingPosX;      // topLeft
        this.x2 = startingPosX + 10; // topRight
        this.x3 = startingPosX - 10; // bottomLeft
        this.x4 = startingPosX;      // bottomRight

        this.y1 = 0;
        this.y2 = 0;
        this.y3 = 1;
        this.y4 = 1;

        this.color = 'rgb(230, 100, 80)'

        this.bottomEdge = {
            x: this.x4,
            y: this.y4
        }
    }
}

export class ZBlock extends Block {
    constructor(startingPosX) {
        super();
        this.x1 = startingPosX - 10; // topLeft
        this.x2 = startingPosX;      // topRight
        this.x3 = startingPosX;      // bottomLeft
        this.x4 = startingPosX + 10; // bottomRight

        this.y1 = 0;
        this.y2 = 0;
        this.y3 = 1;
        this.y4 = 1;

        this.color = 'rgb(200, 160, 90)';

        this.bottomEdge = {
            x: this.x4,
            y: this.y4
        }

    }
}

export class OBlock extends Block {
    constructor(startingPosX) {
        super();

        this.x1 = startingPosX - 10;
        this.x2 = startingPosX;
        this.x3 = startingPosX - 10;
        this.x4 = startingPosX;

        this.y1 = 0;
        this.y2 = 0;
        this.y3 = 1;
        this.y4 = 1;

        this.color = 'rgb(230, 140, 180)';

        this.bottomEdge = {
            x: this.x4,
            y: this.y4
        }

    }
}

export class IBlock extends Block {
    constructor(startingPosX) {
        super();

        this.x1 = startingPosX;
        this.x2 = startingPosX;
        this.x3 = startingPosX;
        this.x4 = startingPosX;

        this.y1 = 0;
        this.y2 = 1;
        this.y3 = 2;
        this.y4 = 3;

        this.color = 'rgb(140, 180, 100)';

        this.bottomEdge = {
            x: this.x4,
            y: this.y4
        }
    }
}
