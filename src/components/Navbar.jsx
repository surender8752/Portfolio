import { useEffect, useState } from "react";
import { motion } from "framer-motion";


const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "portfolio", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      let current = "home";
      sections.forEach((s) => {
        const el = document.getElementById(s.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Detect if the section is in view. 
          // 150px threshold is used so it highlights as the section heads towards the top.
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = s.id;
          }
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-black z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">


        <div
          onClick={() => scrollToSection("home")}
          className="cursor-pointer"
        >

          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex items-center gap-2 cursor-pointer select-none"
          >
            {/* Logo Icon */}
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center
                   bg-gradient-to-br from-orange-500 to-pink-500
                   text-white font-bold text-lg shadow-lg"
            >
              SK
            </div>

          </motion.div>






        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-6 text-gray-300">
          {sections.map((s) => (
            <li
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className={`cursor-pointer transition ${active === s.id
                ? "text-orange-500 border-b-2 border-orange-500"
                : "hover:text-orange-500"
                }`}
            >
              {s.label}
            </li>
          ))}
        </ul>

        {/* DESKTOP CTA - Admin Button */}
        <button
          onClick={() => window.location.href = "/admin"}
          className="hidden md:flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2 text-sm
                     rounded-xl text-white hover:scale-105 transition shadow-lg shadow-orange-500/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Admin
        </button>

        {/* MOBILE HAMBURGER */}
        <button
          aria-label="Toggle menu"
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10">
          <ul className="flex flex-col items-center gap-5 py-6 text-gray-300">
            {sections.map((s) => (
              <li
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className={`text-lg cursor-pointer ${active === s.id ? "text-orange-500" : ""
                  }`}
              >
                {s.label}
              </li>
            ))}

            <button
              onClick={() => {
                setOpen(false);
                window.location.href = "/admin";
              }}
              className="mt-4 flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-2 rounded-xl text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Admin Dashboard
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
