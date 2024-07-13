import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  label {
    font-size: 1.4rem;
  }

  input {
    flex: 1;
  }

  label,
  input {
    cursor: pointer;
  }
`;
