import Reveal from "./Reveal";

const Experience = () => {
  return (
    <Reveal>
      <section
        id="experience"
        className="bg-[#0f0f0f]
                   py-14 sm:py-18 md:py-24"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Heading */}
          <h2
            className="
              text-2xl sm:text-3xl md:text-4xl
              text-white font-bold
              mb-8 sm:mb-10 md:mb-12
              text-center
            "
          >
            Experience
          </h2>

          {/* Timeline */}
          <div
            className="
              border-l-2 border-orange-500
              pl-4 sm:pl-6 md:pl-8
              space-y-8 sm:space-y-10
            "
          >
            {/* Training */}
            <div>
              <span className="text-orange-500 text-xs sm:text-sm font-semibold">
                2024 – Present
              </span>

              <h3
                className="
                  text-white
                  text-base sm:text-lg
                  font-semibold mt-1
                "
              >
                MERN Stack Trainee
              </h3>

              <p className="text-gray-400 text-sm sm:text-base mt-1">
                Excellence Technology, Hamirpur
              </p>

              <p
                className="
                  text-gray-400
                  text-sm sm:text-base
                  mt-3 leading-relaxed
                "
              >
                Currently undergoing professional training in MERN Stack,
                focusing on building real-world web applications using
                React, Node.js, Express.js, MongoDB, and Tailwind CSS.
              </p>
            </div>

            {/* Projects */}
            <div>
              <span className="text-orange-500 text-xs sm:text-sm font-semibold">
                Hands-on Project Experience
              </span>

              <h3
                className="
                  text-white
                  text-base sm:text-lg
                  font-semibold mt-1
                "
              >
                MERN Stack Projects
              </h3>

              <ul
                className="
                  text-gray-400
                  text-sm sm:text-base
                  mt-3
                  list-disc list-inside
                  space-y-2
                "
              >
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
