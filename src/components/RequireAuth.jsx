import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
    const token = localStorage.getItem("admin_token");

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default RequireAuth;
