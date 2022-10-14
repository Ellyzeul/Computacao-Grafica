const circleDrawParametric = (ctx: CanvasRenderingContext2D, xc: number, yc: number, radius: number) => {
  const inc = 1 / radius
  for(let a = 0; a < 0.785; a += inc) {
    const x = radius * Math.cos(a)
    const y = radius * Math.sin(a)

    ctx.fillRect(xc + x, yc + y, 1, 1)
    ctx.fillRect(xc + y, yc + x, 1, 1)
    ctx.fillRect(xc + x, yc - y, 1, 1)
    ctx.fillRect(xc + y, yc - x, 1, 1)
    ctx.fillRect(xc - x, yc - y, 1, 1)
    ctx.fillRect(xc - y, yc - x, 1, 1)
    ctx.fillRect(xc - x, yc + y, 1, 1)
    ctx.fillRect(xc - y, yc + x, 1, 1)
  }
}

export default circleDrawParametric
