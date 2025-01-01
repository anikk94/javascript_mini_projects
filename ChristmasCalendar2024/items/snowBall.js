function drawSnowBall(ctx,x,y,size,hue){
    const topy=y-size/2;
    const leftx=x-size/2;
    // ctx.strokeRect(leftx,topy,size,size);

    function drawNoisyBall(ctx,x,y,size,colour){
        const maxRadius=0.5*size;
        ctx.beginPath();
        for(let a=0;a<2*Math.PI;a+=Math.PI/60){
            radius=maxRadius*(1-Math.random()*0.05)
            p=x+radius*Math.cos(a);
            q=y+radius*Math.sin(a);
            ctx.lineTo(p,q);
        }
        ctx.fillStyle=colour
        ctx.fill();

    }

    drawNoisyBall(ctx,x,y,size,colour.normal(hue))
    const offset={
        x:x-0.05*size,
        y:y-0.1*size,
    }
    ctx.globalCompositeOperation="source-atop";
    drawNoisyBall(ctx,offset.x,offset.y,size,colour.lightest(hue))
    ctx.globalCompositeOperation="source-over";
    
}
