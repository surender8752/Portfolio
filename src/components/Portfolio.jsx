import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import API_BASE_URL from "../config";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/projects`)
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
            {/* Featured Project - Doctor Appointment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 }}
              viewport={{ once: true }}
              className="
                bg-gradient-to-br from-orange-500/20 to-pink-500/20
                border border-orange-500/40
                rounded-xl
                p-5 sm:p-6
                hover:scale-[1.02]
                transition
                group
                flex flex-col justify-between
              "
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                    Featured
                  </span>
                  <svg
                    className="w-5 h-5 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-base sm:text-lg">
                  Doctor Appointment Booking
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mt-2">
                  React, Node.js, Express, MongoDB, Tailwind CSS
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-white/10">
                <a
                  href="https://sk-frontend-healthcare.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 text-xs font-medium hover:underline flex items-center gap-1"
                >
                  Live Demo <span className="text-sm">↗</span>
                </a>
                <a
                  href="https://github.com/surender8752/sk-frontend-healthcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-xs font-medium hover:text-white transition flex items-center gap-1"
                >
                  Frontend <span className="text-sm">↗</span>
                </a>
                <a
                  href="https://github.com/surender8752/sk-healthcare-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-xs font-medium hover:text-white transition flex items-center gap-1"
                >
                  Backend <span className="text-sm">↗</span>
                </a>
              </div>
            </motion.div>

            {/* Grocery Management System Project */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="
                bg-gradient-to-br from-purple-500/20 to-violet-500/20
                border border-purple-500/40
                rounded-xl
                p-5 sm:p-6
                hover:scale-[1.02]
                transition
                group
                flex flex-col justify-between
              "
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                    Latest
                  </span>
                  <svg
                    className="w-5 h-5 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-base sm:text-lg">
                  Grocery Management System
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mt-2">
                  React, Firebase (FCM), JWT, MongoDB, Express, Node.js, CSS
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-white/10">
                <a
                  href="https://grocery-frontend-orcin.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-500 text-xs font-medium hover:underline flex items-center gap-1"
                >
                  Live Demo <span className="text-sm">↗</span>
                </a>
                <a
                  href="https://github.com/surender8752/grocery-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-xs font-medium hover:text-white transition flex items-center gap-1"
                >
                  Frontend <span className="text-sm">↗</span>
                </a>
                <a
                  href="https://github.com/surender8752/grocery-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-xs font-medium hover:text-white transition flex items-center gap-1"
                >
                  Backend <span className="text-sm">↗</span>
                </a>
              </div>
            </motion.div>

            {/* Dynamic Projects from API */}
            {projects.map((p, i) => (
              <motion.div
                key={p._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (i + 1) * 0.12 }}
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

                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 text-xs mt-3 block hover:underline"
                  >
                    View Live →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default Portfolio;
