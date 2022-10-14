const circleDrawEquation = (ctx: CanvasRenderingContext2D, xc: number, yc: number, radius: number) => {
  for(let x = -radius; x <= radius; x++) {
    const y = Math.sqrt(radius*radius - x*x)

    ctx.fillRect(xc + x, yc + y, 1, 1)
    ctx.fillRect(xc + x, yc - y, 1, 1)
  }
}

export default circleDrawEquation
