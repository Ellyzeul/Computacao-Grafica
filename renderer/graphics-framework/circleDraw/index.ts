import circleDrawBresenham from "./circleDrawBresenham"
import circleDrawEquation from "./circleDrawEquation"
import circleDrawParametric from "./circleDrawParametric"

const circleDraw = (ctx: CanvasRenderingContext2D, xc: number, yc: number, radius: number, algo?: string) => {
  if(!algo || algo === "equation") return circleDrawEquation(ctx, xc, yc, radius)
  if(algo === "parametric") return circleDrawParametric(ctx, xc, yc, radius)
  if(algo === "bresenham") return circleDrawBresenham(ctx, xc, yc, radius)
}

export default circleDraw
