const draw = {};
draw.circle=(ctx,x,y,radius,options)=>{
    ctx.beginPath();

    if (options.outline=='inside'){
        radius=radius-options.lineWidth/2;
    }

    ctx.arc(x,y,radius,0,2*Math.PI);
    Object.assign(ctx,options);

    options.fillStyle && ctx.fill();
    options.strokeStyle && ctx.stroke();
}

const colour={}
colour.darkest=(hue)=>`hsl(${hue},100%,10%)`
colour.dark=(hue)=>`hsl(${hue},100%,30%)`
colour.normal=(hue)=>`hsl(${hue},100%,50%)`
colour.light=(hue)=>`hsl(${hue},100%,70%)`
colour.lightest=(hue)=>`hsl(${hue},100%,90%)`