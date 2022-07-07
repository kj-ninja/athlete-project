import React, { useState } from 'react';
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Container, SiteContent } from "./styles";
import { useViewport } from "../../hooks";

const Layout = () => {
  const [visible, setVisible] = useState(false);
  const { width } = useViewport(setVisible);
  const breakpoint = 700;

  return (
    <Container>
      {width < breakpoint && !visible ? null : <Sidebar/>}
      <SiteContent>
        <Navbar visible={visible} setVisible={setVisible}/>
      </SiteContent>
    </Container>
  );
};

export default Layout;
