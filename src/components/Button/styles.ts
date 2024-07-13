import styled from "@emotion/styled";

export const CustomButton = styled.button<{ $variant: "primary" | "secondary" }>`
  padding: 1rem 0.5rem;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border: none;
  font-size: 1.4rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
