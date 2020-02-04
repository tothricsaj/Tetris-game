class Block {
    constructor() {
        this.x1 = null;
        this.x2 = null;
        this.x3 = null;
        this.x4 = null;

        this.y1 = null;
        this.y2 = null;
        this.y3 = null;
        this.y4 = null;
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

}
