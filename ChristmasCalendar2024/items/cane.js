function drawCane(ctx,x,y,size,hue){
    const topY=y-size/2;
    const leftX=x-size/2;
    const bottomY=y+size/2;

    // ctx.rect(leftX,topY,size,size);
    // ctx.stroke();

    const width=0.5*size;
    const thickness=0.1*size;

    const arc={
        radius:(width-thickness)/2,
        x,
        get y(){return topY+this.radius+thickness/2}
    }

    ctx.beginPath();
    ctx.strokeStyle=colour.light(hue);
    ctx.lineWidth=thickness;
    ctx.arc(arc.x,arc.y,arc.radius,Math.PI,0);
    ctx.lineTo(arc.x+arc.radius,bottomY)
    ctx.stroke();
    // path reuse, change stroke settings for pattern
    ctx.strokeStyle=colour.dark(hue);
    ctx.setLineDash([thickness,thickness]);
    ctx.stroke();
}