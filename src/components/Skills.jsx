import Reveal from "./Reveal";

const skills = [
  { name: "HTML", level: "75%" },
  { name: "CSS", level: "75%" },
  { name: "JavaScript", level: "70%" },
  { name: "Bootstrap", level: "70%" },
  { name: "React", level: "75%" },
  { name: "Node.js", level: "70%" },
  { name: "Express.js", level: "70%" },
  { name: "MongoDB", level: "65%" },
  { name: "Python", level: "65%" },
  { name: "Git", level: "70%" },
  { name: "GitHub", level: "75%" },
];

const Skills = () => {
  return (
    <Reveal>
      <section
        id="skills"
        className="bg-black
                   py-16 sm:py-20 md:py-24"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          {/* Heading */}
          <h2
            className="
              text-3xl sm:text-4xl
              text-white font-bold
              mb-8 sm:mb-10 md:mb-12
              text-center
            "
          >
            Technical Skills
          </h2>

          {/* Skills Grid */}
          <div
            className="
              grid grid-cols-1
              sm:grid-cols-2
              gap-5 sm:gap-6
            "
          >
            {skills.map((skill, i) => (
              <div key={i}>

                {/* Skill Header */}
                <div className="flex justify-between text-white mb-1">
                  <span className="font-medium text-sm sm:text-base">
                    {skill.name}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-400">
                    {skill.level}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="
                      bg-orange-500 h-2 rounded-full
                      shadow-[0_0_10px_rgba(255,120,0,0.6)]
                      transition-all duration-700
                    "
                    style={{ width: skill.level }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default Skills;
