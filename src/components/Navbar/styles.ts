import styled from "@emotion/styled";
import { logoSpin } from "@/styles";

export const NavWrapper = styled.nav`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-color);

  svg {
    animation: ${logoSpin} 10s linear infinite;
    cursor: pointer;
  }

  div {
    display: flex;
    gap: 1rem;

    span {
      padding: 0.5rem;
      background-color: var(--secondary-color);
      border-radius: 50%;
      cursor: pointer;

      &:hover {
        background-color: #fff;
      }
    }
  }
`;
