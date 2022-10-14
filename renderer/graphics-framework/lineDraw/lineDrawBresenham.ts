const lineDrawBresenham = (ctx: CanvasRenderingContext2D, x0: number, y0: number, x1: number, y1: number) => {
  const isHorizontal = Math.abs(x1 - x0) > Math.abs(y1 - y0)
  isHorizontal
  ? drawOnXAxis(ctx, x0, y0, x1, y1)
  : drawOnYAxis(ctx, x0, y0, x1, y1)
}

const drawOnXAxis = (ctx: CanvasRenderingContext2D, x0: number, y0: number, x1: number, y1: number) => {
  [x0, y0, x1, y1] = x0 <= x1 ? [x0, y0, x1, y1] : [x1, y1, x0, y0]
  const dy = y1 - y0
  const dx = x1 - x0
  const dE = 2*dy
  const dNE = 2*(dy - dx)
  let d = 2*dy - dx
  let y = y0

  for(let x = x0; x <= x1; x++) {
    if(d < 0) {
      d += dE
    }
    else {
      d += dNE
      y++
    }

    ctx.fillRect(x, y, 1, 1)
  }
}

const drawOnYAxis = (ctx: CanvasRenderingContext2D, x0: number, y0: number, x1: number, y1: number) => {
  [x0, y0, x1, y1] = y0 <= y1 ? [x0, y0, x1, y1] : [x1, y1, x0, y0]
  const dx = x1 - x0
  const dy = y1 - y0
  const dE = 2*dx
  const dNE = 2*(dx - dy)
  let d = 2*dx - dy
  let x = x0

  for(let y = x0; y <= y1; y++) {
    if(d < 0) {
      d += dE
    }
    else {
      d += dNE
      x++
    }

    ctx.fillRect(x, y, 1, 1)
  }
}

export default lineDrawBresenham
