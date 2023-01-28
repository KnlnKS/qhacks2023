import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Background from "./components/Background";
import Home from "./pages/Home";
import App from "./pages/App/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <Background>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="app" element={<App />} />
          </Routes>
        </BrowserRouter>
      </Background>
    </ChakraProvider>
  </React.StrictMode>
);
