import { FunctionComponent } from "react";
import { NavWrapper } from "./styles";
import { useNavigate } from "react-router-dom";

export const Navbar: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <NavWrapper>
      <span onClick={() => navigate("/")}>navbar</span>
    </NavWrapper>
  );
};
