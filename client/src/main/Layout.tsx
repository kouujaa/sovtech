import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "src/components";
import { MainDiv } from "./Layout.styles";

const Layout: FC = () => {
  return (
    <MainDiv>
      <Navigation />
      <Outlet />
    </MainDiv>
  );
};

export default Layout;
