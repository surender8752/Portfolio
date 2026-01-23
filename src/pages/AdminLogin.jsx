import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import API_BASE_URL from "../config";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            console.log("Attempting login to:", `${API_BASE_URL}/auth/login`);
            const res = await fetch(`${API_BASE_URL}/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                localStorage.setItem("admin_token", data.token);
                navigate("/admin");
            } else {
                setError(data.message || "Login failed");
            }
        } catch (err) {
            setError("Server error. Please try again.");
        }
    };

    return (
        <Reveal>
            <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
                <div className="bg-[#141414] p-8 rounded-lg border border-orange-500/20 w-full max-w-md">
                    <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
                        Admin Login
                    </h2>

                    {error && (
                        <div className="bg-red-500/10 text-red-500 p-3 rounded mb-4 text-center text-sm">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div>
                            <label className="block text-gray-400 mb-1">Email</label>
                            <input
                                type="email"
                                className="w-full p-3 rounded bg-black border border-gray-800 focus:border-orange-500 focus:outline-none transition"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-400 mb-1">Password</label>
                            <input
                                type="password"
                                className="w-full p-3 rounded bg-black border border-gray-800 focus:border-orange-500 focus:outline-none transition"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white font-bold py-3 rounded hover:bg-orange-600 transition"
                        >
                            Login
                        </button>
                    </form>

                    {/* Back to Home Button */}
                    <Link
                        to="/"
                        className="block text-center mt-6 text-gray-400 hover:text-orange-500 transition text-sm"
                    >
                        ← Back to Home
                    </Link>

                </div>
            </div>
        </Reveal>
    );
};

export default AdminLogin;
