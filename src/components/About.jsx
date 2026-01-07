import Reveal from "./Reveal";

const About = () => {
  return (
    <Reveal>
      <section
        id="about"
        className="bg-[#0f0f0f] py-16 sm:py-20 md:py-24"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            About Me
          </h2>

          {/* Content Wrapper */}
          <div
            className="
              text-gray-400
              text-sm sm:text-base md:text-lg
              leading-relaxed
              max-w-3xl mx-auto
            "
          >
            <p>
              I am a passionate and motivated MERN Stack Developer with a strong
              interest in building modern, scalable, and user-friendly web
              applications. I have a solid foundation in HTML, CSS, JavaScript,
              React, Node.js, Express, and MongoDB, and I enjoy turning ideas into
              real-world projects.
            </p>

            <p className="mt-4">
              Currently, I am undergoing professional MERN Stack training at
              Excellence Technology, Hamirpur, where I am gaining hands-on
              experience by developing practical projects such as portfolio
              websites, admin dashboards, and CRUD-based applications. I am
              always eager to learn new technologies, improve my skills, and
              grow as a full-stack developer.
            </p>
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default About;
