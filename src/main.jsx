import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App.jsx";
import AuthContextProvider from "./AuthContextProvider.jsx";
//import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    {/* <BrowserRouter> */}
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
    {/* </BrowserRouter> */}
  </HashRouter>
);
