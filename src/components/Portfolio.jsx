import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <Reveal>
    <section id="portfolio" className="bg-[#0f0f0f] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My Work
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#141414] border border-orange-500/20 
              rounded-xl p-6 hover:scale-105 transition"
            >
              <h3 className="text-white font-semibold">
                {p.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                {p.tech}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </Reveal>
  );
};

export default Portfolio;
