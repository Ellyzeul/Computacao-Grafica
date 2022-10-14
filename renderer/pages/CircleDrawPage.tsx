import { useState } from "react"
import { Canvas } from "../components/Canvas"
import { CanvasEvent } from "../components/Canvas/types"
import { GeneralContainer } from "../components/GeneralContainer"
import circleDraw from "../graphics-framework/circleDraw"
import { CircleDrawAlgoChooser, CircleDrawAlgoOption, CircleDrawContainer } from "../styles/pages/circledraw"

const CircleDrawPage = () => {
  const [initialPoint, setInitialPoint] = useState(null as {x: number, y: number} | null)
  const [circles, setCircles] = useState([] as {xc: number, yc: number, radius: number}[])
  const [algo, setAlgo] = useState(null as string)
  const pointsDistance = (x0: number, y0: number, x1: number, y1: number) => {
    const a = Math.abs(x0-x1)
    const b = Math.abs(y0-y1)
    return Math.sqrt(a*a + b*b)
  }

  const onMouseDown: CanvasEvent = (event: MouseEvent) => {
    const canvas = event.target as HTMLCanvasElement
    const ctx = canvas.getContext("2d")
    const { offsetTop, offsetLeft } = ctx.canvas
    const [x, y] = [event.clientX - offsetLeft, event.clientY - offsetTop]
    if(initialPoint) {
      setCircles([...circles, {
        xc: initialPoint.x,
        yc: initialPoint.y,
        radius: pointsDistance(initialPoint.x, initialPoint.y, x, y)
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

    [...circles, {xc: initialPoint.x, yc: initialPoint.y, radius: pointsDistance(initialPoint.x, initialPoint.y, x, y)}]
      .forEach(circle => circleDraw(
        ctx,
        circle.xc,
        circle.yc,
        circle.radius,
        algo
      )
    )
  }
  onMouseMove.eventOn = "mousemove"

  return (
    <GeneralContainer pageTitle="Desenhar circulo">
      <CircleDrawContainer>
        <div>Clique em um ponto do canvas para escolher um ponto inicial e em outro para o ponto final.</div>
        <CircleDrawAlgoChooser>
          <span>Escolha o algoritmo para desenhar: </span>
          <CircleDrawAlgoOption onClick={() => setAlgo("equation")}>Equação do circulo</CircleDrawAlgoOption>
          <CircleDrawAlgoOption onClick={() => setAlgo("parametric")}>Equação paramétrica</CircleDrawAlgoOption>
          <CircleDrawAlgoOption onClick={() => setAlgo("bresenham")}>Bresenham</CircleDrawAlgoOption>
        </CircleDrawAlgoChooser>
        <Canvas events={[
          onMouseDown,
          onMouseMove
        ]} />
      </CircleDrawContainer>
    </GeneralContainer>
  )
}

export default CircleDrawPage
