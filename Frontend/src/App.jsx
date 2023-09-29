import { HomePage } from "./pages/homePage";
import { LoginPage } from "./pages/loginPage";
import { ProfilePage } from "./pages/profilePage";
import { Navigate, Route, Routes } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme.js";


function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth= Boolean(useSelector((state) => state.token))

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/home" element={isAuth?<HomePage />: <Navigate to="/"></Navigate>}></Route>
          <Route path="/profile/:userId" element={ isAuth?<ProfilePage />: <Navigate to="/"></Navigate>}></Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
