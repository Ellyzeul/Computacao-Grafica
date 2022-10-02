export interface CanvasProp {
  events?: CanvasEvent[]
}

export interface CanvasEvent {
  (event: any): void,
  eventOn: "click"
    | "mousedown"
    | "mousemove"
}
