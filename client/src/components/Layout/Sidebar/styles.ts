import styled from "styled-components";

export const List = styled.ul`
  background: ${(props) => props.theme.colors.sidebarBackgroundColor};
  height: 100vh;
  width: 12vw;
  font-size: 4rem;
  list-style: none;

  @media (min-width: 700px) {
    width: 14vw;
    font-size: 5rem;
  }
  
  @media (min-width: 1100px) {
    width: 16vw;
    font-size: 6rem;
  }
`
