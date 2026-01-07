import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="flex items-center gap-2 cursor-pointer select-none"
    >
      {/* Logo Icon */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center
                   bg-gradient-to-br from-orange-500 to-pink-500
                   text-white font-bold text-lg shadow-lg"
      >
        SK
      </div>

      {/* Name */}
      <span className="text-white font-semibold tracking-wide">
        Surendra
      </span>
    </motion.div>
  );
};

export default Logo;
