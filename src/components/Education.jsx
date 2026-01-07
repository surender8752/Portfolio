import Reveal from "./Reveal";

const Education = () => {
  return (
    <Reveal>
      <section id="education" className="bg-black py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl text-white font-bold mb-12 text-center">
            Education
          </h2>

          <div className="space-y-8 border-l border-orange-500 pl-6">

            {/* MCA */}
            <div>
              <h3 className="text-white text-lg font-semibold">
                Master of Computer Applications (MCA)
              </h3>
              <p className="text-gray-400 text-sm">
                Shoolini University <span className="text-orange-500">• 2024</span>
              </p>
            </div>

            {/* BSc Physics */}
            <div>
              <h3 className="text-white text-lg font-semibold">
                Bachelor of Science (B.Sc) in Physics
              </h3>
              <p className="text-gray-400 text-sm">
                Himachal Pradesh University <span className="text-orange-500">• 2020</span>
              </p>
            </div>

            {/* BA Sociology */}
            <div>
              <h3 className="text-white text-lg font-semibold">
                Bachelor of Arts (B.A) in Sociology
              </h3>
              <p className="text-gray-400 text-sm">
                Indira Gandhi National Open University (IGNOU)
                <span className="text-orange-500"> • 2021</span>
              </p>
            </div>

            {/* MERN Course */}
            <div>
              <h3 className="text-white text-lg font-semibold">
                MERN Stack Development Course
              </h3>
              <p className="text-gray-400 text-sm">
                Excellence Technology, Hamirpur
                <span className="text-orange-500"> • 2025</span>
              </p>
            </div>

          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default Education;
