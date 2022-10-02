import { useRouter } from "next/router"
import { BackButtonContainer, NavbarContainer } from "./styles"
import { NavbarProp } from "./types"

export const Navbar = (props: NavbarProp) => {
  const { pageTitle } = props
  const router = useRouter()

  const onClick = () => router.push('/home')

  const backButton = router.pathname === '/home'
    ? <div />
    : <BackButtonContainer onClick={onClick}>
      <img src='/images/left-chevron.png' />
    </BackButtonContainer>

  return (
    <NavbarContainer>
      {backButton}
      <div>{pageTitle}</div>
    </NavbarContainer>
  )
}
