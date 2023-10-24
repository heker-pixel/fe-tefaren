import React from "react";

import { LanguageProvider} from "./Utils/Lang";

function App() {
  const { locale, changeLanguage, getText } = useLanguage();
  return (
    <LanguageProvider>
      <div>
      <button onClick={() => changeLanguage('en')}>Switch to English</button>
      <button onClick={() => changeLanguage('id')}>Ganti ke Bahasa Indonesia</button>

      <p>{getText('hello', 'halo')}</p>
      </div>
    </LanguageProvider>
  );
}

export default App;
