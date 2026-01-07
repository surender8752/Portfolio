import { useEffect, useState } from "react";
import Logo from "./logo";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "portfolio", label: "Portfolio" },
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
          const top = el.offsetTop - 120; // navbar offset
          if (window.scrollY >= top) current = s.id;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="bg-black fixed top-0 w-full z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      {/* //Logo */}
      <Logo/>

       

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-gray-300">
          {sections.map((s) => (
            <li
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className={`cursor-pointer transition ${
                active === s.id
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "hover:text-orange-500"
              }`}
            >
              {s.label}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
  onClick={() => scrollToSection("contact")}
  className="bg-orange-500 px-5 py-2 rounded-xl text-white
             hover:bg-orange-600 hover:scale-105 transition"
>
  Let’s Talk
</button>


        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-200"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10">
          <ul className="flex flex-col p-4 gap-4 text-gray-300">
            {sections.map((s) => (
              <li
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className={`cursor-pointer ${
                  active === s.id ? "text-orange-500" : ""
                }`}
              >
                {s.label}
              </li>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="mt-2 bg-orange-500 px-4 py-2 rounded text-white"
            >
              Hire Me
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
