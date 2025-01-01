function drawBell(ctx,x,y,size,hue){
    const topy=y-size/2;
    const bottomy=y+size/2;
    const leftx=x-size/2;
    const rightx=x+size/2;

    // ctx.strokeRect(leftx,topy,size,size);

    const ring={
        radius:size*0.1,
        x, 
        // y:topy+size*0.1, 
        get y() { return topy + this.radius },
        thickness: size*0.05,
        colour:colour.darkest(hue)
    };
    draw.circle(ctx, ring.x, ring.y, ring.radius, {
        strokeStyle:ring.colour,
        lineWidth:ring.thickness,
        outline:'inside',
    });

    const clapper={
        radius:0.1*size,
        x,
        get y(){return bottomy-this.radius},
        colour:colour.dark(hue),
    };
    draw.circle(ctx,clapper.x,clapper.y,clapper.radius,{
        fillStyle:clapper.colour,
    });

    const bell={
        top:topy+ring.radius*2,
        bottom:bottomy-clapper.radius,
        controlOffset:0.3 *size,
        colour:colour.normal(hue),
    }

    ctx.beginPath();
    ctx.fillStyle=bell.colour;
    // ctx.moveTo(x,ring.y+ring.radius)
    // ctx.lineTo(leftx,clapper.y)
    // ctx.lineTo(rightx,clapper.y)
    ctx.moveTo(x,bell.top);
    // ctx.lineTo(leftx,bell.bottom);
    ctx.bezierCurveTo(
        x-bell.controlOffset,
        bell.top,
        x-bell.controlOffset,
        bell.bottom,
        leftx,
        bell.bottom,
    );
    ctx.lineTo(rightx,bell.bottom);
    ctx.bezierCurveTo(
        x+bell.controlOffset,
        bell.bottom,
        x+bell.controlOffset,
        bell.top,
        x,
        bell.top
    );
    ctx.fill()

}