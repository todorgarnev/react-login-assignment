import { keyframes } from "@emotion/react";

export const logoSpin = keyframes`
  from {
		transform: rotate(0deg);
  }

  to {
		transform: rotate(360deg);
  }
`;

export const loading = keyframes`
  0% {
    top: 3.6rem;
    left: 3.6rem;
    width: 0.8rem;
    height: 0.8rem;
    opacity: 0;
  }

  4.9% {
    top: 3.6rem;
    left: 3.6rem;
    width: 0.8rem;
    height: 0.8rem;
    opacity: 0;
  }

  5% {
    top: 3.6rem;
    left: 3.6rem;
    width: 0.8rem;
    height: 0.8rem;
    opacity: 1;
  }

  100% {
    top: 0;
    left: 0;
    width: 8rem;
    height: 8rem;
    opacity: 0;
  }
`;
