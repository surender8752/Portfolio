import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../config";

const AdminContacts = () => {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("admin_token");

  const fetchMessages = () => {
    fetch(`${API_BASE_URL}/contacts`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((data) => setMessages(data));
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const deleteMessage = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this message?"
    );
    if (!confirmDelete) return;

    await fetch(`${API_BASE_URL}/contacts/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    fetchMessages(); // refresh list
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-10 py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-orange-500">
          Contact Messages
        </h1>
        <button
          onClick={() => {
            localStorage.removeItem("admin_token");
            navigate("/login");
          }}
          className="bg-red-500 px-4 py-2 rounded text-white text-sm hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      {messages.length === 0 ? (
        <p className="text-gray-400">No messages yet.</p>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className="bg-[#141414] border border-orange-500/20 rounded-lg p-6 relative"
            >
              <h3 className="font-semibold text-lg">{msg.name}</h3>
              <p className="text-sm text-gray-400">{msg.email}</p>

              <p className="mt-3 text-gray-300">{msg.message}</p>

              <p className="mt-3 text-xs text-gray-500">
                {new Date(msg.createdAt).toLocaleString()}
              </p>

              <button
                onClick={() => deleteMessage(msg._id)}
                className="absolute top-4 right-4 text-red-500 hover:text-red-400 text-sm"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminContacts;
