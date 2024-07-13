import { FunctionComponent, PropsWithChildren } from "react";
import { CustomButton } from "./styles";

type ButtonProps = PropsWithChildren & {
  variant: "primary" | "secondary";
  isDisabled: boolean;
  type?: "button" | "submit";
  clickHandler?: () => void;
};

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  variant,
  isDisabled,
  clickHandler,
  type = "button",
}) => {
  const onClickHandler = () => {
    if (!isDisabled && clickHandler) {
      clickHandler();
    }
  };
  return (
    <CustomButton type={type} $variant={variant} onClick={onClickHandler} $isDisabled={isDisabled}>
      {children}
    </CustomButton>
  );
};
