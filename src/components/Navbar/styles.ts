import styled from "@emotion/styled";
import { logoSpin } from "@/styles";

export const NavWrapper = styled.nav`
  padding: 2rem;
  background-color: var(--primary-color);

  svg {
    animation: ${logoSpin} 10s linear infinite;
    cursor: pointer;
  }
`;
