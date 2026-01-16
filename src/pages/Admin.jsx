import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE = "https://backendportfolio-self.vercel.app/api";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [tech, setTech] = useState("");
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("admin_token");

  const fetchProjects = () => {
    fetch(`${API_BASE}/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const addProject = async (e) => {
    e.preventDefault();

    await fetch(`${API_BASE}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ title, tech }),
    });

    setTitle("");
    setTech("");
    fetchProjects();
  };

  const deleteProject = async (id) => {
    await fetch(`${API_BASE}/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    fetchProjects();
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-10 py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-orange-500">
          Admin Dashboard
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

      {/* ADD PROJECT */}
      <form
        onSubmit={addProject}
        className="mb-10 space-y-4 max-w-md"
      >
        <input
          className="w-full p-3 rounded bg-[#141414]"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          className="w-full p-3 rounded bg-[#141414]"
          placeholder="Tech Stack"
          value={tech}
          onChange={(e) => setTech(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-orange-500 px-6 py-3 rounded hover:scale-105 transition"
        >
          Add Project
        </button>
      </form>

      {/* PROJECT LIST */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p._id}
            className="bg-[#141414] p-6 rounded border border-orange-500/20"
          >
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-gray-400 text-sm">{p.tech}</p>

            <button
              onClick={() => deleteProject(p._id)}
              className="mt-4 text-red-500 text-sm hover:underline"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
