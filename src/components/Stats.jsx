import { motion } from "framer-motion";
import Reveal from "./Reveal";

const Stats = () => {
  const stats = [
    { title: "10+", label: "Years Job Experience" },
    { title: "500+", label: "Projects Completed" },
    { title: "24/7", label: "Support Available" },
    { title: "30+", label: "Awards Achieved" },
  ];

  return (
   <Reveal>
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-[#141414] border border-orange-500/20 
            rounded-xl text-center p-6 hover:scale-105 transition"
          >
            <h2 className="text-3xl font-bold text-orange-500">
              {item.title}
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
    </Reveal>
  );
};

export default Stats;
