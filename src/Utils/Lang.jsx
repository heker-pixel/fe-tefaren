import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

const LanguageData = {
  en: {
    // definisi pesan dalam bahasa Inggris
  },
  id: {
    // definisi pesan dalam bahasa Indonesia
  },
};

export const LanguageProvider = ({ children }) => {
  const initialLocale = localStorage.getItem("preferredLocale") || "en";
  const [locale, setLocale] = useState(initialLocale);

  useEffect(() => {
    localStorage.setItem("preferredLocale", locale);
  }, [locale]);

  const changeLanguage = (newLocale) => {
    setLocale(newLocale);
  };

  const getText = (textInEnglishKey, textInBahasaKey) => {
    const messages = LanguageData[locale];
    const textInEnglish = messages["en"][textInEnglishKey];
    const textInBahasa = messages["id"][textInBahasaKey];
    return locale === "en" ? textInEnglish : textInBahasa;
  };

  return (
    <LanguageContext.Provider value={{ locale, changeLanguage, getText }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
