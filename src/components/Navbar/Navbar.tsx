import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Logo } from "@/assets";
import BGFlag from "@/assets/bg-flag.png";
import USFLag from "@/assets/us-flag.png";
import { Languages } from "@/types";
import { LangIcon, NavWrapper } from "./styles";

export const Navbar: FunctionComponent = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const langChangeHandler = (lang: Languages) => {
    i18n.changeLanguage(lang);
    document.title = t("titles.docTitle");
  };

  return (
    <NavWrapper>
      <Logo clickHandler={() => navigate("/")} />

      <div>
        <LangIcon
          src={BGFlag}
          alt={t("labels.bgFlagAlt")}
          title={t("labels.bgFlagAlt")}
          onClick={() => langChangeHandler(Languages.BG)}
          $isActive={i18n.language === Languages.BG}
        />

        <LangIcon
          src={USFLag}
          alt={t("labels.usFlagAlt")}
          title={t("labels.usFlagAlt")}
          onClick={() => langChangeHandler(Languages.EN)}
          $isActive={i18n.language === Languages.EN}
        />
      </div>
    </NavWrapper>
  );
};
