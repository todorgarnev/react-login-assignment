import styled from "@emotion/styled";

export const Header = styled.h1`
  margin-bottom: 5rem;
  font-size: 2.4rem;
  color: var(--primary-color);
`;

export const FormWrapper = styled.form`
  margin-inline: auto;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: clamp(40ch, 100%, 100ch);

  button {
    margin-inline: auto;
  }
`;
