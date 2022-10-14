const circleDrawBresenham = (ctx: CanvasRenderingContext2D, xc: number, yc: number, radius: number) => {
  let x = 0, y = radius, h = 1 - radius, dE = 3, dSE = -2*radius + 5

  plotPixels(ctx, xc, yc, 0, y)
  while(x++ < y) {
    const isEast = h < 0

    h += isEast ? dE : dSE
    dE += 2
    dSE += isEast ? 2 : 4
    y += isEast ? 0 : -1

    plotPixels(ctx, xc, yc, x, y)
  }
}

const plotPixels = (ctx: CanvasRenderingContext2D, xc: number, yc: number, x: number, y: number) => {
  ctx.fillRect(xc + x, yc + y, 1, 1)
  ctx.fillRect(xc + y, yc + x, 1, 1)
  ctx.fillRect(xc + x, yc - y, 1, 1)
  ctx.fillRect(xc + y, yc - x, 1, 1)
  ctx.fillRect(xc - x, yc - y, 1, 1)
  ctx.fillRect(xc - y, yc - x, 1, 1)
  ctx.fillRect(xc - x, yc + y, 1, 1)
  ctx.fillRect(xc - y, yc + x, 1, 1)
}

export default circleDrawBresenham
