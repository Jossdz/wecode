import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  color: #32c3ff;
`;
const H2 = styled.h1`
  font-size: 2.7rem;
  font-weight: bold;
  color: #32c3ff;
`;
const H3 = styled.h1`
  font-size: 2.6rem;
  font-weight: bold;
  color: #32c3ff;
`;

export default ({ header, label }) => {
  const { t } = useTranslation();
  return header === 1 ? (
    <H1>{t(label).toUpperCase()}</H1>
  ) : header === 2 ? (
    <H2>{t(label).toUpperCase()}</H2>
  ) : header === 3 ? (
    <H3>{t(label).toUpperCase()}</H3>
  ) : (
    <H1>{t(label)}</H1>
  );
};
