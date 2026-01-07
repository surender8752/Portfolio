import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import AdminContacts from "./pages/AdminContacts";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
         <Route path="/admin/contacts" element={<AdminContacts />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
