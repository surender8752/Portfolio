import Reveal from "./Reveal";
const Experience = () => {
  return (
      <Reveal>
    <section id="experience"  className="bg-[#0f0f0f] py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl text-white font-bold mb-12 text-center">
          Experience
        </h2>

        <div className="border-l border-orange-500 pl-6 space-y-10">

          {/* Training */}
          <div>
            <span className="text-orange-500 text-sm font-semibold">
              2024 – Present
            </span>
            <h3 className="text-white text-lg font-semibold mt-1">
              MERN Stack Trainee
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Excellence Technology, Hamirpur
            </p>
            <p className="text-gray-400 mt-3 leading-relaxed">
              Currently undergoing professional training in MERN Stack,
              focusing on building real-world web applications using
              React, Node.js, Express.js, MongoDB, and Tailwind CSS.
            </p>
          </div>

          {/* Projects */}
          <div>
            <span className="text-orange-500 text-sm font-semibold">
              Hands-on Project Experience
            </span>
            <h3 className="text-white text-lg font-semibold mt-1">
              MERN Stack Projects
            </h3>
            <ul className="text-gray-400 mt-3 list-disc list-inside space-y-2">
              <li>Portfolio Website using React & Tailwind CSS</li>
              <li>Admin Dashboard with CRUD operations (MERN Stack)</li>
              <li>Project Management App (Local MongoDB)</li>
              <li>Contact Form with Backend API integration</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
    </Reveal>
  );
};

export default Experience;
