import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { BtnVariant } from "@/types";

export const CustomButton = styled.button<{
  $variant: BtnVariant;
  $isDisabled: boolean;
}>`
  padding: ${({ $variant }) => ($variant === BtnVariant.BTN ? "1rem 2rem" : "0")};
  width: fit-content;
  background-color: ${({ $variant }) =>
    $variant === BtnVariant.BTN ? "var(--primary-color)" : "transparent"};
  color: ${({ $variant }) =>
    $variant === BtnVariant.BTN ? "var(--secondary-color)" : "var(--primary-color)"};
  border: none;
  border-radius: 4rem;
  font-size: ${({ $variant }) => ($variant === BtnVariant.BTN ? "1.4rem" : "1.2rem")};
  cursor: pointer;

  ${({ $isDisabled }) =>
    $isDisabled
      ? css`
          color: #ddd;
          opacity: 0.5;
          pointer-events: none;
        `
      : ""}

  &:hover {
    text-decoration: ${({ $variant }) => ($variant === BtnVariant.BTN ? "none" : "underline")};
    opacity: ${({ $variant }) => ($variant === BtnVariant.BTN ? "0.8" : "1")};
  }

  &:active {
    scale: 0.95;
  }
`;
