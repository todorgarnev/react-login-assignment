import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    position: absolute;
    top: 50%;
    left: 1.5rem;
    transform: translateY(-50%);
    font-size: 1.4rem;
    transition: all 0.3s ease-in-out;
  }

  span {
    color: var(--error-color);
  }

  label,
  input {
    cursor: pointer;
  }
`;

export const CustomInput = styled.input<{ $hasValue: boolean; $hasError: boolean }>`
  padding: 1rem 1.5rem;
  border: none;
  border-radius: var(--border-radius);
  font-size: 1.2rem;
  outline: 0.2rem solid ${({ $hasError }) => ($hasError ? "var(--error-color)" : "transparent")};

  ${({ $hasError }) =>
    $hasError
      ? css`
          & + label {
            top: 1.7rem;
          }
        `
      : ""}

  &:focus {
    outline: 0.2rem solid
      ${({ $hasError }) => ($hasError ? "var(--error-color)" : "var(--primary-color)")};

    & + label {
      top: -1.2rem;
    }
  }

  ${({ $hasValue }) =>
    $hasValue
      ? css`
          & + label {
            top: -1.2rem;
          }
        `
      : ""}
`;
