import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://backendportfolio-self.vercel.app/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <Reveal>
      <section
        id="portfolio"
        className="bg-[#0f0f0f]
                   py-16 sm:py-20 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Heading */}
          <h2
            className="
              text-3xl sm:text-4xl
              font-bold text-center
              text-white
              mb-8 sm:mb-10 md:mb-12
            "
          >
            My Work
          </h2>

          {/* Projects Grid */}
          <div
            className="
              grid grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-5 sm:gap-6
            "
          >
            {projects.map((p, i) => (
              <motion.div
                key={p._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                viewport={{ once: true }}
                className="
                  bg-[#141414]
                  border border-orange-500/20
                  rounded-xl
                  p-5 sm:p-6
                  hover:scale-105
                  transition
                "
              >
                <h3 className="text-white font-semibold text-base sm:text-lg">
                  {p.title}
                </h3>

                <p className="text-gray-400 text-sm sm:text-base mt-2">
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
