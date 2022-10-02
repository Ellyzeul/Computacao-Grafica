import { useRouter } from "next/router"
import { Navigate } from "react-router-dom"
import { StyledPageLink } from "./styles"
import { PageLinkProp } from "./types"

export const PageLink = (props: PageLinkProp) => {
  const { label, icon, linkTo } = props
  const router = useRouter()

  const onClick = () => router.push(`/${linkTo}`)

  return (
    <StyledPageLink onClick={onClick}>
      <div><img src={`/images/${icon}`} /></div>
      <div>{label}</div>
    </StyledPageLink>
  )
}
