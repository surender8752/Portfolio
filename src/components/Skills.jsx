import Reveal from "./Reveal";

const skills = [
  { name: "HTML", level: "95%" },
  { name: "CSS", level: "90%" },
  { name: "JavaScript", level: "90%" },
  { name: "Bootstrap", level: "85%" },
  { name: "React", level: "90%" },
  { name: "Node.js", level: "85%" },
  { name: "Express.js", level: "80%" },
  { name: "MongoDB", level: "80%" },
  { name: "Python", level: "75%" },
  { name: "Git", level: "85%" },
  { name: "GitHub", level: "85%" },
];

const Skills = () => {
  return (

    <Reveal>
    <section id="skills" className="bg-black py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl text-white font-bold mb-12 text-center">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <div key={i}>
              <div className="flex justify-between text-white mb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-gray-400">
                  {skill.level}
                </span>
              </div>

              <div className="w-full bg-gray-800 rounded-full h-2">
                <div
                className="bg-orange-500 h-2 rounded-full 
shadow-[0_0_10px_rgba(255,120,0,0.6)] 
transition-all duration-700"

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
