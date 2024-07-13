import { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";
import confetti from "@/assets/confetti.gif";
import { Confetti, Message } from "./styles";

export const Success: FunctionComponent = () => {
  const location = useLocation();

  return (
    <>
      <Confetti src={confetti} alt="Confetti image" />

      {location.state && (
        <Message>
          A reset link was sent to <span>{location.state}</span>
        </Message>
      )}
    </>
  );
};
