import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 2rem;
  row-gap: 1rem;

  label {
    font-size: 1.4rem;
  }

  span {
    grid-column: 1/-1;
    color: var(--error-color);
  }

  label,
  input {
    cursor: pointer;
  }
`;

export const CustomInput = styled.input<{ $hasError: boolean }>`
  padding: 1rem 1.5rem;
  flex: 1;
  border: none;
  border-radius: var(--border-radius);
  font-size: 1.2rem;
  outline: 0.2rem solid ${({ $hasError }) => ($hasError ? "var(--error-color)" : "none")};

  &:focus {
    outline: 0.2rem solid
      ${({ $hasError }) => ($hasError ? "var(--error-color)" : "var(--primary-color)")};
  }
`;
