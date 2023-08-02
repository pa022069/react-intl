import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { IntlProvider } from "react-intl";

import en from "./lang/en.json";
import zh from "./lang/zh.json";

const Main = () => {
  const [locale, setLocale] = useState(navigator.language);

  const getTargetLang = (_locale: string) => {
    switch (true) {
      case _locale.includes("zh"):
        return zh;
      default:
        return en;
    }
  };

  return (
    <IntlProvider locale={locale} messages={getTargetLang(locale)}>
      <App setLocale={setLocale} />
    </IntlProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
