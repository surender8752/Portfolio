
import { Typewriter } from "react-simple-typewriter";

import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `
      perspective(1000px)
      rotateX(${-rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.08)
    `;
  };

  const resetTransform = () => {
    if (cardRef.current) {
      cardRef.current.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    }
  };

  return (
    <section
      id="home"
      className="bg-gradient-to-b from-black to-[#0f0f0f] py-28"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="group"
        >
          <p className="text-orange-500 font-semibold mb-3 tracking-wider">
            HELLO, I’M
          </p>

          <h1 className="text-5xl font-bold text-white">
  I am{" "}
  <span className="text-orange-500">
    <Typewriter
      words={[
        "SURENDER KUMAR",
        
        "Frontend Developer",
        "MERN Stack Developer",
      ]}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  </span>
</h1>

          <p
            className="text-gray-400 mt-6 max-w-xl leading-relaxed
                       transition duration-500 group-hover:translate-x-3"
          >
            I am a passionate MERN Stack Developer currently undergoing
            professional training at Excellence Technology, Hamirpur.
            I enjoy building modern, scalable, and user-friendly web
            applications using React, Node.js, Express, MongoDB, and
            Tailwind CSS.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <button
              aria-label="Hire me"
              className="bg-orange-500 px-8 py-3 rounded-xl text-white
                         shadow-lg hover:scale-110 transition duration-300"
            >
              Hire Me
            </button>

            <a
  href="/resume.pdf"
  className="bg-orange-500 px-5 py-2 rounded-xl text-white
             hover:bg-orange-600 transition"
>
  View Resume
</a>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTransform}
          className="relative w-[460px] mx-auto cursor-pointer group
                     transition-transform duration-300 ease-out"
        >
          {/* Glass reflection */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
            <div
              className="absolute -top-1/2 -left-1/2 w-full h-full
                         bg-gradient-to-br from-white/30 to-transparent
                         rotate-12 group-hover:translate-x-full
                         group-hover:translate-y-full
                         transition-all duration-700"
            ></div>
          </div>

          {/* Glow */}
          <div
            className="absolute inset-0 rounded-3xl
                       bg-orange-500 blur-[90px] opacity-40
                       group-hover:opacity-70 transition"
          ></div>

          {/* Profile Image */}
          <img
            src="/profile.png.png"
            alt="Surendra Kumar"
            className="relative w-full rounded-3xl
                       border border-orange-500/50
                       shadow-2xl
                       brightness-105 contrast-110 saturate-110"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;


