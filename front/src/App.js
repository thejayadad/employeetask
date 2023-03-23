
import {Routes, Route} from "react-router-dom"
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./pages/auth/Login";
import DashLayout from "./components/DashLayout";
import Welcome from "./pages/auth/Welcome";
import NotesList from "./pages/notes/NotesList";
import Users from "./pages/users/Users";


function App() {
  return (
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
      <Route index element={<Users />} />
    </Route>
    </Route>
    </Route>
 </Routes>
  );
}

export default App;
