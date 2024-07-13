import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "@/components";
import { Container, LayoutWrapper } from "./styles";

export const Layout: FunctionComponent = () => {
  return (
    <LayoutWrapper>
      <Navbar />

      <Container>
        <Outlet />
      </Container>
    </LayoutWrapper>
  );
};
