import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App.jsx";
import AuthContextProvider from "./AuthContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </HashRouter>
);
