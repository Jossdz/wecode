import React from "react";
import { useTranslation } from "react-i18next";

const Hello = label => {
  const { t } = useTranslation();

  return t(label);
};

export default Hello;
