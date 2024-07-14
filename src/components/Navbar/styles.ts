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
  }
`;

export const LangIcon = styled.img<{ $isActive: boolean }>`
  width: 2rem;
  cursor: pointer;
  filter: ${({ $isActive }) => ($isActive ? "grayscale(0%)" : "grayscale(100%)")};
`;
