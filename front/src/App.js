
import {Routes, Route} from "react-router-dom"
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./pages/auth/Login";
import DashLayout from "./components/DashLayout";
import Welcome from "./pages/auth/Welcome";
import NotesList from "./pages/notes/NotesList";
import UsersList from "./pages/users/UsersList";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme"



function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
<Route path="/" element={<Layout />} >
  <Route index element={<Public />} />
  <Route path="login" element={<Login />} />



  {/* PROTECTED ROUTES */}
  <Route path="dash" element={<DashLayout />}>


  <Route index  element={<Welcome />} />

  <Route path="notes">
    <Route index element={<NotesList />} />
  </Route>
  <Route path="users">
    <Route index element={<UsersList />} />
  </Route>
  </Route>
  </Route>
</Routes>

</ThemeProvider>
  </ColorModeContext.Provider>

  );
}

export default App;
