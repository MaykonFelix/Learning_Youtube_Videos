import { BrowserRouter } from "react-router-dom";

import { AppThemeProvider } from "./shared/contexts/index";

import { AppRoutes } from "./routes";

import { MenuLateral } from "./shared/components";



export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <MenuLateral />
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
};
