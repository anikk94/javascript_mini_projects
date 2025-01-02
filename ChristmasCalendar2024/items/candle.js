function drawCandle(ctx,x,y,size,hue){
    const topy=y-size/2;
    const leftx=x-size/2;
    const bottomy=y+size/2;
    ctx.strokeRect(leftx,topy,size,size);

    const stick={
        width:0.3*size,
        height:0.7*size,
        x,
        bottom: bottomy,
        get top(){return this.bottom-this.height},
        colour:colour.normal(hue),
    }

    draw.line(ctx,x,stick.top,x,stick.bottom,{
        strokeStyle:stick.colour,
        lineWidth:stick.width,
    })
    
    const flame={
        width:0.3*stick.width,
        height:size-stick.height,
        x,
        get xRadius(){return this.width/2},
        get yRadius(){return this.height/2},
        get y(){return stick.top-this.yRadius},
        colour:"yellow",
    }

    draw.ellipse(ctx,flame.x,flame.y,flame.xRadius,flame.yRadius,{
        fillStyle:flame.colour,
        
    })
}