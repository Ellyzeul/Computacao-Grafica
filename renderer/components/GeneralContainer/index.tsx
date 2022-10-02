import { BackgroundContainer } from "../../styles/global"
import { Navbar } from "../Navbar"
import { GeneralContainerProp } from "./types"

export const GeneralContainer = (props: GeneralContainerProp) => {
  const { pageTitle, children } = props

  return (
    <BackgroundContainer>
      <Navbar pageTitle={pageTitle} />
      {children}
    </BackgroundContainer>
  )
}
