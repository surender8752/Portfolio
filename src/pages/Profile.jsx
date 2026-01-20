import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../config";

const Profile = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const token = localStorage.getItem("admin_token");

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/auth/profile`, {
                    headers: { "Authorization": `Bearer ${token}` }
                });
                const data = await res.json();
                if (res.ok) {
                    setEmail(data.email);
                }
            } catch (err) {
                console.error("Error fetching profile:", err);
            }
        };
        fetchProfile();
    }, [token]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");

        if (password && password !== confirmPassword) {
            return setError("Passwords do not match");
        }

        setLoading(true);

        try {
            const res = await fetch(`${API_BASE_URL}/auth/profile`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                setMessage("Profile updated successfully!");
                setPassword("");
                setConfirmPassword("");
            } else {
                setError(data.message || "Update failed");
            }
        } catch (err) {
            setError("Server error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white px-4 sm:px-6 py-10">
            <div className="max-w-md mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <button
                        onClick={() => navigate("/admin")}
                        className="text-gray-400 hover:text-white transition"
                    >
                        &larr; Back to Dashboard
                    </button>
                    <h1 className="text-3xl font-bold text-orange-500">Admin Profile</h1>
                </div>

                <div className="bg-[#141414] p-8 rounded-xl border border-orange-500/20 shadow-xl">
                    {message && (
                        <div className="bg-green-500/10 text-green-500 p-4 rounded-lg mb-6 text-center text-sm border border-green-500/20">
                            {message}
                        </div>
                    )}
                    {error && (
                        <div className="bg-red-500/10 text-red-500 p-4 rounded-lg mb-6 text-center text-sm border border-red-500/20">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleUpdate} className="space-y-6">
                        <div>
                            <label className="block text-gray-400 mb-2 font-medium">Email Address</label>
                            <input
                                type="email"
                                className="w-full p-3 rounded-lg bg-black border border-gray-800 focus:border-orange-500 focus:outline-none transition-all placeholder:text-gray-600"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter new email"
                                required
                            />
                        </div>

                        <div className="pt-4 border-t border-gray-800">
                            <p className="text-xs text-gray-500 mb-4 italic">Leave password blank if you don't want to change it.</p>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-gray-400 mb-2 font-medium">New Password</label>
                                    <input
                                        type="password"
                                        className="w-full p-3 rounded-lg bg-black border border-gray-800 focus:border-orange-500 focus:outline-none transition-all placeholder:text-gray-600"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="New password (optional)"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-400 mb-2 font-medium">Confirm New Password</label>
                                    <input
                                        type="password"
                                        className="w-full p-3 rounded-lg bg-black border border-gray-800 focus:border-orange-500 focus:outline-none transition-all placeholder:text-gray-600"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder="Confirm new password"
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full bg-orange-500 text-white font-bold py-4 rounded-xl hover:bg-orange-600 active:scale-[0.98] transition-all shadow-lg shadow-orange-500/20 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {loading ? "Updating..." : "Update Profile"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;
