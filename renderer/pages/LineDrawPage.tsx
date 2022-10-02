import { useState } from "react"
import { Canvas } from "../components/Canvas"
import { CanvasEvent } from "../components/Canvas/types"
import { GeneralContainer } from "../components/GeneralContainer"
import lineDraw from "../graphics-framework/lineDraw"
import { LineDrawContainer } from "../styles/pages/linedraw"

const LineDrawPage = () => {
  const [initialPoint, setInitialPoint] = useState(null as {x: number, y: number} | null)
  const [lines, setLines] = useState([] as {x0: number, y0: number, x1: number, y1: number}[])

  const onMouseDown: CanvasEvent = (event: MouseEvent) => {
    const canvas = event.target as HTMLCanvasElement
    const ctx = canvas.getContext("2d")
    const { offsetTop, offsetLeft } = ctx.canvas
    const [x, y] = [event.clientX - offsetLeft, event.clientY - offsetTop]
    if(initialPoint) {
      setLines([...lines, {
        x0: initialPoint.x,
        y0: initialPoint.y,
        x1: x,
        y1: y
      }])
      setInitialPoint(null)
      return
    }

    setInitialPoint({x: x, y: y})
  }
  onMouseDown.eventOn = "mousedown"

  const onMouseMove: CanvasEvent = (event: MouseEvent) => {
    if(!initialPoint) return
    const canvas = event.target as HTMLCanvasElement
    const ctx = canvas.getContext("2d")
    const { offsetTop, offsetLeft } = ctx.canvas
    const [x, y] = [event.clientX - offsetLeft, event.clientY - offsetTop]

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    [...lines, {x0: initialPoint.x, y0: initialPoint.y, x1: x, y1: y}].forEach(line => lineDraw(
      ctx,
      line.x0,
      line.y0,
      line.x1,
      line.y1
    ))
  }
  onMouseMove.eventOn = "mousemove"

  return (
    <GeneralContainer pageTitle="Desenhar reta">
      <LineDrawContainer>
        <div>Clique em um ponto do canvas para escolher um ponto inicial e em outro para o ponto final.</div>
        <Canvas events={[
          onMouseDown,
          onMouseMove
        ]} />
      </LineDrawContainer>
    </GeneralContainer>
  )
}

export default LineDrawPage
