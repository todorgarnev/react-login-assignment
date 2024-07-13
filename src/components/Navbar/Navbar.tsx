import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "@/assets";
import { NavWrapper } from "./styles";

export const Navbar: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <NavWrapper>
      <Logo clickHandler={() => navigate("/")} />
    </NavWrapper>
  );
};
