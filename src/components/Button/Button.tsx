import { FunctionComponent, PropsWithChildren } from "react";
import { CustomButton } from "./styles";

type ButtonProps = PropsWithChildren & {
  variant: "primary" | "secondary";
  type?: "button" | "submit";
  clickHandler?: () => void;
};

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  variant,
  clickHandler,
  type = "button",
}) => {
  return (
    <CustomButton type={type} $variant={variant} onClick={clickHandler}>
      {children}
    </CustomButton>
  );
};
