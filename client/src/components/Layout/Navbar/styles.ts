import styled from "styled-components";

export const Navigation = styled.nav`
  height: 4rem;
  width: 100%;
  background: ${(props) => props.theme.colors.navbarBackgroundColor};
    
  @media (min-width: 1100px) {
    height: 8rem;
  }
`;

export const HamburgerMenu = styled.button`
  visibility: visible;
  
  @media (min-width: 700px) {
    visibility: hidden;
  }
`;
