function drawStar(ctx, x, y, size, hue){
    // const top=y-size/2;
    // const left=x-size/2;
    // // draw a circle at x, y
    // ctx.beginPath();
    // ctx.arc(x, y, 3, 0, Math.PI * 2);
    // ctx.stroke();
    // // boundary rectangle
    // ctx.strokeRect(top, left, size, size)

    const outerRadius=size/2;
    const innerRadius=size/4;
    const pointCount=10;

    ctx.beginPath();
    for (let i=0;i<pointCount;i++){
        const angle=Math.PI/2 + (i/pointCount) * Math.PI*2;
        if (i%2==0){
            const sx=x+Math.cos(angle)*innerRadius;
            const sy=y+Math.sin(angle)*innerRadius;
            ctx.lineTo(sx, sy);
        }
        else{
        const sx=x+Math.cos(angle)*outerRadius;
        const sy=y+Math.sin(angle)*outerRadius;
        ctx.lineTo(sx, sy);
        }
        ctx.fillStyle=`hsl(${hue},100%,50%)`
        ctx.fill();
    }
}