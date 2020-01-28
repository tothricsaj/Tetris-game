export class BlockBuilder {
    constructor() {
        this.a = 42;
    }

    block(type, ctx) {
        switch(type) {
            case 'Ttype':
                ctx.fillStyle = 'rgb(30, 140, 180)';
                ctx.fillRect(30, 30, 10,10);
                ctx.fillRect(40, 30, 10,10);
                ctx.fillRect(50, 30, 10,10);
                ctx.fillRect(40, 40, 10,10);

                return 'Ttype';

            default:
                return 'No set type'

        }
    }
}
