import React from "react";
import { useTranslation } from "react-i18next";

const LangSelect = () => {
  const { t, i18n } = useTranslation();

  const setEn = () => {
    i18n.changeLanguage("en");
  };
  const setEs = () => {
    i18n.changeLanguage("es-MX");
  };

  return (
    <div style={{ maxWidth: "250px" }}>
      <i onClick={setEn} style={{ cursor: "pointer" }}>
        🇬🇧
      </i>
      &nbsp; <p style={{ color: "white", display: "inline" }}>|</p> &nbsp;
      <i onClick={setEs} style={{ cursor: "pointer" }}>
        🇲🇽
      </i>
    </div>
  );
};

export default LangSelect;
