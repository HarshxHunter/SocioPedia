import { BrowserRouter, Navigate, Routes, Route} from "react-router-dom";
import HomePage from "./scenes/homePage";
import LoginPage from "./scenes/loginPage";
import ProfilePage from "./scenes/profilePage";
import HelpPage from "./scenes/helpPage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material"; 
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state) => (state.mode));
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));
  

  return (
    <div className="app">
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="https://sociopedia-server-m6bx.onrender.com/" element={<LoginPage />} />
          <Route path="https://sociopedia-server-m6bx.onrender.com/home" element={isAuth ? <HomePage /> : <Navigate to="https://sociopedia-server-m6bx.onrender.com/" />} />
          <Route path="https://sociopedia-server-m6bx.onrender.com/profile/:userId" element={isAuth ? <ProfilePage /> : <Navigate to="https://sociopedia-server-m6bx.onrender.com/" />} />
          <Route path="https://sociopedia-server-m6bx.onrender.com/help" element={isAuth ? <HelpPage /> : <Navigate to="https://sociopedia-server-m6bx.onrender.com/" />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
