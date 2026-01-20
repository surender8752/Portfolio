import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";
import AdminContacts from "./pages/AdminContacts";
import AdminLogin from "./pages/AdminLogin";
import RequireAuth from "./components/RequireAuth";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/login" element={<AdminLogin />} />

        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/profile" element={<Profile />} />
          <Route path="/admin/contacts" element={<AdminContacts />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
