function drawBow(ctx,x,y,size,hue){
    const topy=y-size/2;
    const leftx=x-size/2;
    const bottomy=y+size/2;
    const rightx=x+size/2;

    // ctx.beginPath();
    // ctx.rect(leftx,topy,size,size);
    // ctx.stroke();
 
    ctx.beginPath();
    ctx.fillStyle=colour.normal(hue);
    ctx.moveTo(x,y);
    // ctx.lineTo(leftx,topy);
    ctx.quadraticCurveTo(leftx,topy, leftx,y); // degree 2 bezier curve
    // ctx.lineTo(leftx,bottomy);
    ctx.quadraticCurveTo(leftx,bottomy,x,y);
    ctx.lineTo(x,y);
    // ctx.lineTo(rightx,bottomy);
    ctx.quadraticCurveTo(rightx,bottomy,rightx,y);
    // ctx.lineTo(rightx,topy);
    ctx.quadraticCurveTo(rightx,topy,x,y);
    ctx.fill();


    const knot={
        size:0.25*size,
        get top() {return y-this.size/2},
        get left() {return x-this.size/2},
        roundness:0.08*size,

    }

    ctx.beginPath();
    ctx.fillStyle=colour.dark(hue);
    ctx.roundRect(knot.left,knot.top,knot.size,knot.size,knot.roundness);
    ctx.fill()
}