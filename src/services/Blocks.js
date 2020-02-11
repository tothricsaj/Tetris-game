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
        if ((this.y1 + downValue) <= edge) {
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

export class SBlock extends Block {
    constructor() {
        super();

        this.x1 = 148; // topLeft
        this.x2 = 158; // topRight
        this.x3 = 138; 
        this.x4 = 148; 

        this.y1 = 0;
        this.y2 = 0;
        this.y3 = 10;
        this.y4 = 10;

        this.color = 'rgb(230, 100, 80)'

        console.log('SBlock was made by builder');
    }
}

export class ZBlock extends Block {
    constructor() {
        super();
        this.x1 = 138;
        this.x2 = 148;
        this.x3 = 148;
        this.x4 = 158;

        this.y1 = 0;
        this.y2 = 0;
        this.y3 = 10;
        this.y4 = 10;

        this.color = 'rgb(200, 160, 90)';
    }
}

export class OBlock extends Block {
    constructor() {
        super();

        this.x1 = 138;
        this.x2 = 148;
        this.x3 = 138;
        this.x4 = 148;

        this.y1 = 0;
        this.y2 = 0;
        this.y3 = 10;
        this.y4 = 10;

        this.color = 'rgb(230, 140, 180)';
    }
}

export class IBlock extends Block {
    constructor() {
        super();

        this.x1 = 138;
        this.x2 = 138;
        this.x3 = 138;
        this.x4 = 138;

        this.y1 = 0;
        this.y2 = 10;
        this.y3 = 20;
        this.y4 = 30;

        this.color = 'rgb(140, 180, 100)';
    }
}
