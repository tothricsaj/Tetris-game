export class BlockBuilder {
    constructor() {
        this.a = 42;
        this.self = this;
    }

    _builder(params, ctx) {
        console.log(params);
        ctx.fillStyle = params.color;
        ctx.fillRect(params.x1, params.y1, params.width,params.height);
        ctx.fillRect(params.x2, params.y2, params.width,params.height);
        ctx.fillRect(params.x3, params.y3, params.width,params.height);
        ctx.fillRect(params.x4, params.y4, params.width,params.height);
   
    }

    block(type, ctx) {
        let params = null;
        let blockType = null;

        switch(type) {
            case 'Ttype':
                params = {
                    color: 'rgb(30, 140, 180)',
                    x1: 30, y1: 30,
                    x2: 40, y2: 30,
                    x3: 50, y3: 30,
                    x4: 40, y4: 40,
                    width: 10, height: 10
                }
                
                blockType = 'Ttype';

                break;

            case 'Stype':
                            params = {
                                color: 'rgb(230, 100, 80)',
                                x1: 80, y1: 30,
                                x2: 90, y2: 30,
                                x3: 70, y3: 40,
                                x4: 80, y4: 40,
                                width: 10, height: 10
                            }
                            
                            blockType = 'Stype';

                            break;
            case 'Ttype':
                            params = {
                                color: 'rgb(30, 140, 180)',
                                x1: 30, y1: 30,
                                x2: 40, y2: 30,
                                x3: 50, y3: 30,
                                x4: 40, y4: 40,
                                width: 10, height: 10
                            }
                            
                            blockType = 'Ttype';

                            break;
            case 'Ttype':
                            params = {
                                color: 'rgb(30, 140, 180)',
                                x1: 30, y1: 30,
                                x2: 40, y2: 30,
                                x3: 50, y3: 30,
                                x4: 40, y4: 40,
                                width: 10, height: 10
                            }
                            
                            blockType = 'Ttype';

                            break;


            default:
                return 'No set type'
        }


        this._builder(params, ctx);
        return blockType;
        
        
    }
}
