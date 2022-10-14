import lineDrawBresenham from "./lineDrawBresenham";
import lineDrawSimple from "./lineDrawSimple";

const lineDraw = (ctx: CanvasRenderingContext2D, x0: number, y0: number, x1: number, y1: number, algo?: string) => {
  if(!algo || algo === "equation") return lineDrawSimple(ctx, x0, y0, x1, y1)
  if(algo === "bresenham") return lineDrawBresenham(ctx, x0, y0, x1, y1)
}

export default lineDraw
