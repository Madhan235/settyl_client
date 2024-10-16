import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";
import { SocketContextProvider } from "./context/SocketContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <RecoilRoot>
          <SocketContextProvider>
            <App />
          </SocketContextProvider>
        </RecoilRoot>
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
