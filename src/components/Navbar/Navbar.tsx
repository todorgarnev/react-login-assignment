import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Logo } from "@/assets";
import { Languages } from "@/types";
import { NavWrapper } from "./styles";

export const Navbar: FunctionComponent = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const changeLanguageHandler = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <NavWrapper>
      <Logo clickHandler={() => navigate("/")} />

      <div>
        <span onClick={() => changeLanguageHandler(Languages.EN)}>EN</span>
        <span onClick={() => changeLanguageHandler(Languages.BG)}>BG</span>
      </div>
    </NavWrapper>
  );
};
