import { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import confetti from "@/assets/confetti.gif";
import { Confetti, Message } from "./styles";

export const Success: FunctionComponent = () => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <>
      <Confetti src={confetti} alt={t("labels.confettiAlt")} />

      {location.state && (
        <Message>
          {t("labels.resetLink")} <span>{location.state}</span>
        </Message>
      )}
    </>
  );
};
