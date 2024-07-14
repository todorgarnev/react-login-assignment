import styled from "@emotion/styled";
import { loading } from "@/styles";

export const LoaderWrapper = styled.div`
  margin-inline: auto;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  width: 8rem;
  height: 8rem;

  div {
    position: absolute;
    border: 0.4rem solid var(--primary-color);
    border-radius: 50%;
    animation: ${loading} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    opacity: 1;

    &:nth-of-type(2) {
      animation-delay: -0.5s;
    }
  }
`;
