import { MouseEventHandler } from "react"
import { CanvasContainer, CanvasElement } from "./styles"
import { CanvasProp } from "./types"

export const Canvas = (props: CanvasProp) => {
  const { events } = props
  const onClicks = events.filter(event => event.eventOn === "click")
  const onMouseDowns = events.filter(event =>event.eventOn === "mousedown")
  const onMouseMoves = events.filter(event => event.eventOn === "mousemove")

  const onClick: MouseEventHandler = event => onClicks.forEach(click => click(event))
  const onMouseDown: MouseEventHandler = event => onMouseDowns.forEach(mouseDown => mouseDown(event))
  const onMouseMove: MouseEventHandler = event => onMouseMoves.forEach(mouseMove => mouseMove(event))

  return (
    <CanvasContainer>
      <CanvasElement 
        width={1200}
        height={550}
        onClick={onClick}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
      />
    </CanvasContainer>
  )
}
