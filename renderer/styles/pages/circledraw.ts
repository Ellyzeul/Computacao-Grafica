import styled from "styled-components";

export const CircleDrawContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 60px 30px calc(100% - 90px);
  place-items: center;
`

export const CircleDrawAlgoChooser = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CircleDrawAlgoOption = styled.div`
  padding: 6px 10px;
  margin-left: 5px;
  background-color: white;
  color: black;
  border-radius: 3px;
  user-select: none;
  transition: 125ms;

  :hover {
    cursor: pointer;
    filter: invert(1);
    transition: 125ms;
  }
`
