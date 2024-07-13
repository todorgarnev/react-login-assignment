import { FunctionComponent, PropsWithChildren } from "react";
import { BtnVariant } from "@/types";
import { CustomButton } from "./styles";

type ButtonProps = PropsWithChildren & {
  variant: BtnVariant;
  isDisabled?: boolean;
  type?: "button" | "submit";
  clickHandler?: () => void;
};

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  variant,
  clickHandler,
  isDisabled = false,
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
