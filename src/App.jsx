import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";
import AdminContacts from "./pages/AdminContacts";
import Profile from "./pages/Profile";
import RequireAuth from "./components/RequireAuth";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AdminLogin />} />

        {/* Protected Admin Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/contacts" element={<AdminContacts />} />
          <Route path="/admin/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
