import { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/styles";
import { Message } from "./styles";

export const Success: FunctionComponent = () => {
  const location = useLocation();
  console.log("location: ", location.state);

  return (
    <>
      <Header>Success page</Header>

      {location.state && (
        <Message>
          A reset link was sent to <span>{location.state}</span>
        </Message>
      )}
    </>
  );
};
