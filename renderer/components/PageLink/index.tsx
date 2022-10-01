import { StyledPageLink } from "./styles"
import { PageLinkProp } from "./types"

export const PageLink = (props: PageLinkProp) => {
  const { label, icon } = props

  return (
    <StyledPageLink>
      <div><img src={`/images/${icon}`} /></div>
      <div>{label}</div>
    </StyledPageLink>
  )
}
