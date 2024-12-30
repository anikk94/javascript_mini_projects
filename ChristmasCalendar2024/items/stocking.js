function drawStocking(ctx,x,y,size,hue,angle=Math.PI/4){
    const topy=y-size/2;
    const leftx=x-size/2;

    // ctx.beginPath();
    // ctx.rect(leftx,topy,size,size);
    // ctx.stroke();

    const footWidth=0.4*size;
    const radius=footWidth/2;
    const ankleY=y+0.1*size;
    const sleeveWidth=1.2*footWidth;
    const footSize=0.3*size;

    const footTipX=x+footSize*Math.cos(angle);
    const footTipY=ankleY+footSize*Math.sin(angle);

    draw.line(ctx, x,topy+radius, x, ankleY, {
        strokeStyle: colour.normal(hue),
        lineWidth:footWidth,
        lineCap: "round",
    })
    draw.line(ctx, x,ankleY, footTipX, footTipY, {
        strokeStyle: colour.normal(hue),
        lineWidth:footWidth,
        lineCap: "round",
    })
    draw.line(ctx,x,topy,x,topy+radius,{
        strokeStyle:colour.lightest(hue),
        lineCap:"butt",
        lineWidth:sleeveWidth,
    })


}