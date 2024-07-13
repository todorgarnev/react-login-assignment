import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const CustomButton = styled.button<{
  $variant: "primary" | "secondary";
  $isDisabled: boolean;
}>`
  padding: 1rem 0.5rem;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border: none;
  font-size: 1.4rem;
  cursor: pointer;

  ${({ $isDisabled }) =>
    $isDisabled
      ? css`
          opacity: 0.5;
          pointer-events: none;
        `
      : ""}

  &:hover {
    opacity: 0.9;
  }
`;
