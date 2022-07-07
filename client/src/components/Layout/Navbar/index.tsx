import React, { FC } from 'react';
import { Navigation, HamburgerMenu } from "./styles";

interface Props {
  visible: boolean
  setVisible: (visible: boolean) => void
}

const Navbar:FC<Props> = ({visible, setVisible}) => {

  return (
    <Navigation>
      <HamburgerMenu onClick={() => setVisible(!visible)}>
        Athletic-Project
      </HamburgerMenu>
    </Navigation>
  );
};

export default Navbar;
