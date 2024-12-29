function drawBall(ctx, x, y, size, hue){
    const topy=y-size/2;
    // const leftx=x-size/2;
    // ctx.strokeRect(leftx, topy, size,size);

     
    const ring={
        radius:size*0.1,
        x, 
        // y:topy+size*0.1, 
        get y() { return topy + this.radius },
        thickness: size*0.05,
        colour:colour.darkest(hue)
    }

    const ball={
        radius:0.45*size,
        x,
        get y(){return topy+ring.radius+this.radius},
        colour:colour.normal(hue)
    }

    const highlight={
        x:ball.x-ball.radius*0.3,
        y:ball.y-ball.radius*0.3,
    }

    const gradient=ctx.createRadialGradient(
        highlight.x, //start center
        highlight.x, //start center
        0, //start radius
        highlight.x, //end center
        highlight.y, //end center
        ball.radius*2 //end radius
    );

    gradient.addColorStop(0,colour.light(hue));
    gradient.addColorStop(0.3,colour.normal(hue));
    gradient.addColorStop(1,colour.darkest(hue));


    draw.circle(ctx, ring.x, ring.y, ring.radius, {
        strokeStyle:ring.colour,
        lineWidth:ring.thickness,
        outline:'inside',
    })

    draw.circle(ctx,ball.x,ball.y,ball.radius,{
        fillStyle:gradient,
    })
}