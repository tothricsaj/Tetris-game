class GameRender {
    constructor() {
        this.canvas = null;
        this.ctx = null;
    }


    init() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');

        if(this.canvas.getConext) {
            this.ctx = this.canvas.getContext('2d');
        }
    }

    testDraw() {
        this.ctx.fillStyle = 'rgb(30, 140, 180)';
        this.ctx.fillRect(30, 30, 40, 40);
    }
}

export default GameRender;
