

import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 1024) return;

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `
      perspective(1000px)
      rotateX(${-rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
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
      className="bg-black text-white
                 pt-24 pb-16
                 sm:pt-28 sm:pb-20
                 md:pt-32 md:pb-24"
    >
      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
          grid grid-cols-1 lg:grid-cols-2
          gap-12 lg:gap-20
          items-center
        "
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <p className="text-orange-500 font-semibold tracking-widest mb-3 text-xs sm:text-sm">
            HELLO, I’M
          </p>

          <motion.h1
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="
              text-4xl sm:text-5xl md:text-6xl
              font-bold leading-tight
            "
          >
            Surender Kumar <br />
            <span className="text-orange-500">
              MERN Stack Developer
            </span>
          </motion.h1>

          <p
            className="
              text-gray-400 mt-6
              text-sm sm:text-base md:text-lg
              max-w-xl mx-auto lg:mx-0
              leading-relaxed
            "
          >
            I am a passionate MERN Stack Developer currently pursuing
            professional training at Excellence Technology, Hamirpur.
            I specialize in building modern, scalable, and responsive
            web applications using React, Node.js, Express, MongoDB,
            and Tailwind CSS.
          </p>

          <div
            className="
              mt-10 flex flex-wrap gap-4
              justify-center lg:justify-start
            "
          >
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="
                bg-orange-500 px-7 py-3
                text-sm sm:text-base
                rounded-xl text-white
                hover:scale-105 transition
              "
            >
              Let's Talk
            </button>

            <a
              href="/resume.pdf"
              download="Surender_Kumar_Resume.pdf"
              className="
                border border-orange-500
                px-7 py-3 text-sm sm:text-base
                rounded-xl text-orange-500
                hover:bg-orange-500 hover:text-white
                transition
              "
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTransform}
          className="
            relative mx-auto
            w-[240px] sm:w-[300px] md:w-[360px] lg:w-[420px]
            cursor-pointer
            transition-transform duration-300
          "
        >
          {/* Glow */}
          <div
            className="
              absolute inset-0 rounded-3xl
              bg-orange-500 blur-[80px]
              opacity-40
            "
          ></div>

          {/* Image */}
          <img
            src="/profile.png"
            alt="Surender Kumar"
            className="
              relative w-full rounded-3xl
              border border-orange-500/50
              shadow-2xl
              brightness-105 contrast-110 saturate-110
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

