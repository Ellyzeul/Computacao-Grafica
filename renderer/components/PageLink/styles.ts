import styled from "styled-components";

export const StyledPageLink = styled.div`
  min-width: 250px;
  width: 25%;
  height: 100px;
  background-color: white;
  display: grid;
  grid-template-columns: 40% 60%;
  place-items: center;
  border-radius: 3px;
  transition: 125ms;
  user-select: none;

  :hover {
    cursor: pointer;
    filter: invert(1);
    transition: 125ms;
  }
`
