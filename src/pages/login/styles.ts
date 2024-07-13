import styled from "@emotion/styled";

export const FormWrapper = styled.form`
  margin-inline: auto;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: clamp(40ch, 100%, 100ch);
`;

export const ServerError = styled.span`
  font-size: 1.2rem;
  color: var(--error-color);
`;
