import { useEffect, useState } from "react";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [tech, setTech] = useState("");
  const [projects, setProjects] = useState([]);

  const fetchProjects = () => {
    fetch("http://localhost:5000/api/projects")
      .then(res => res.json())
      .then(data => setProjects(data));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const addProject = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, tech }),
    });
    setTitle("");
    setTech("");
    fetchProjects();
  };

  const deleteProject = async (id) => {
    await fetch(`http://localhost:5000/api/projects/${id}`, {
      method: "DELETE",
    });
    fetchProjects();
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">
        Admin Dashboard
      </h1>

      {/* ADD PROJECT */}
      <form onSubmit={addProject} className="mb-10 space-y-4 max-w-md">
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
        <button className="bg-orange-500 px-6 py-3 rounded">
          Add Project
        </button>
      </form>

      {/* PROJECT LIST */}
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p._id}
            className="bg-[#141414] p-6 rounded border border-orange-500/20"
          >
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-gray-400 text-sm">{p.tech}</p>
            <button
              onClick={() => deleteProject(p._id)}
              className="mt-4 text-red-500 text-sm"
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
