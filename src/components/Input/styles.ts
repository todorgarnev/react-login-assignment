import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 2rem;
  row-gap: 0.5rem;

  label {
    font-size: 1.4rem;
  }

  input {
    flex: 1;
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
