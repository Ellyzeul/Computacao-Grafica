import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  display: grid;
  place-items: center;
  grid-template-columns: 50px calc(100% - 50px);
  color: white;
`

export const BackButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: inherit;
  display: grid;
  place-items: center;
  transition: 125ms;

  :hover {
    filter: invert(1);
    transition: 125ms;
  }
`
