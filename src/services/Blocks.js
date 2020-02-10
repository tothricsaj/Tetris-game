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

    moveDown(downValue, edge) {
        if ((this.y1 + downValue) < edge) {
            this.y1 += downValue;
            this.y2 += downValue;
            this.y3 += downValue;
            this.y4 += downValue;
        }


        // window.requestAnimationFrame(this.moveDown);
    }

    moveRight(rightValue, edge) {
        if((this.y1 + rightValue) < edge) {
            this.y1 += rightValue;
            this.y2 += rightValue;
            this.y3 += rightValue;
            this.y4 += rightValue;
        }
    }

    moveLeft(leftValue) {
        if ((this.y1 - leftValue) > 0) {
            this.y1 -= leftValue;
            this.y2 -= leftValue;
            this.y3 -= leftValue;
            this.y4 -= leftValue;
        }
    }
}

export class TBlock extends Block {
    constructor() {
        super();

        this.x1 = 138; // left
        this.x2 = 148; // middle
        this.x3 = 158; // right
        this.x4 = 148; // bottom

        this.y1 = 0; // left
        this.y2 = 0; // middle
        this.y3 = 0; // right
        this.y4 = 10; // bottom

        this.color = 'rgb(30, 140, 180)';

        console.log('TBlock was made by builder');
    }
}

// TODO make the other bloks !!!!!!!!!!!!!!!!!!!!!!!
