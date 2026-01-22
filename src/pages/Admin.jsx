import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../config";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [tech, setTech] = useState("");
  const [link, setLink] = useState("");
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("admin_token");

  const fetchProjects = () => {
    fetch(`${API_BASE_URL}/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const addProject = async (e) => {
    e.preventDefault();

    await fetch(`${API_BASE_URL}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ title, tech, link }),
    });

    setTitle("");
    setTech("");
    setLink("");
    fetchProjects();
  };

  const deleteProject = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    await fetch(`${API_BASE_URL}/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    fetchProjects();
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-10 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
              Admin Dashboard
            </h1>
            <p className="text-gray-500 mt-1">Manage your portfolio projects and content</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigate("/admin/contacts")}
              className="bg-blue-500/10 border border-blue-500/30 px-5 py-2.5 rounded-lg text-blue-400 text-sm font-semibold hover:bg-blue-500 hover:text-white transition-all shadow-lg shadow-blue-500/10"
            >
              Messages
            </button>
            <button
              onClick={() => navigate("/admin/profile")}
              className="bg-orange-500/10 border border-orange-500/30 px-5 py-2.5 rounded-lg text-orange-400 text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all shadow-lg shadow-orange-500/10"
            >
              Profile Settings
            </button>
            <button
              onClick={() => {
                localStorage.removeItem("admin_token");
                navigate("/login");
              }}
              className="bg-red-500/10 border border-red-500/30 px-5 py-2.5 rounded-lg text-red-500 text-sm font-semibold hover:bg-red-600 hover:text-white transition-all"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* ADD PROJECT FORM */}
          <div className="lg:col-span-1">
            <div className="bg-[#141414] p-6 rounded-2xl border border-gray-800 shadow-2xl sticky top-10">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-orange-500 rounded-full"></span>
                Add New Project
              </h2>
              <form onSubmit={addProject} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs text-gray-500 uppercase font-bold tracking-wider">Title</label>
                  <input
                    className="w-full p-3 rounded-xl bg-black border border-gray-800 focus:border-orange-500 transition-all outline-none"
                    placeholder="E.g. E-commerce Platform"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-gray-500 uppercase font-bold tracking-wider">Tech Stack</label>
                  <input
                    className="w-full p-3 rounded-xl bg-black border border-gray-800 focus:border-orange-500 transition-all outline-none"
                    placeholder="E.g. React, Node, MongoDB"
                    value={tech}
                    onChange={(e) => setTech(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-gray-500 uppercase font-bold tracking-wider">Project URL</label>
                  <input
                    className="w-full p-3 rounded-xl bg-black border border-gray-800 focus:border-orange-500 transition-all outline-none"
                    placeholder="https://your-project.com"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3.5 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-orange-500/20 mt-2"
                >
                  Create Project
                </button>
              </form>
            </div>
          </div>

          {/* PROJECT LIST */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-blue-500 rounded-full"></span>
              Live Projects ({projects.length})
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {projects.map((p) => (
                <div
                  key={p._id}
                  className="group bg-[#141414] p-5 rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all shadow-lg"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-lg group-hover:text-orange-400 transition-colors">{p.title}</h3>
                    <button
                      onClick={() => deleteProject(p._id)}
                      className="p-2 text-gray-600 hover:text-red-500 bg-black/50 rounded-lg transition-all"
                      title="Delete Project"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{p.tech}</p>

                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-bold text-orange-500 hover:text-orange-400 transition-colors gap-1"
                    >
                      VIEW REPOSITORY
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              ))}

              {projects.length === 0 && (
                <div className="col-span-full py-20 text-center bg-[#141414] rounded-2xl border border-dashed border-gray-800">
                  <p className="text-gray-600">No dynamic projects found. Add your first one!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
