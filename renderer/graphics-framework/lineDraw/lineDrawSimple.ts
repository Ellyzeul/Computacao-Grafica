const lineDrawSimple = (ctx: CanvasRenderingContext2D, x0: number, y0: number, x1: number, y1: number) => {
  const isHorizontal = Math.abs(x1 - x0) > Math.abs(y1 - y0)
  isHorizontal
  ? drawOnXAxis(ctx, x0, y0, x1, y1)
  : drawOnYAxis(ctx, x0, y0, x1, y1)
}

const drawOnXAxis = (ctx: CanvasRenderingContext2D, x0: number, y0: number, x1: number, y1: number) => {
  [x0, y0, x1, y1] = x0 <= x1 ? [x0, y0, x1, y1] : [x1, y1, x0, y0]
  const angularCoeficient = (y0 - y1) / (x0 - x1)
  const linearCoeficient = y0 - (angularCoeficient * x0)
  const y = (x: number) => angularCoeficient * x + linearCoeficient

  for(let x = x0; x <= x1; x++) {
    ctx.fillRect(x, y(x), 1, 1)
  }
}

const drawOnYAxis = (ctx: CanvasRenderingContext2D, x0: number, y0: number, x1: number, y1: number) => {
  [x0, y0, x1, y1] = y0 <= y1 ? [x0, y0, x1, y1] : [x1, y1, x0, y0]
  const angularCoeficient = (x0 - x1) / (y0 - y1)
  const linearCoeficient = x0 - (angularCoeficient * y0)
  const x = (y: number) => angularCoeficient * y + linearCoeficient

  for(let y = y0; y <= y1; y++) {
    ctx.fillRect(x(y), y, 1, 1)
  }
}

export default lineDrawSimple
 