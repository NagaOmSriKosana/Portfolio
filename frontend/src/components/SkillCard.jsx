import { motion } from "framer-motion";

export default function SkillCard({ skill }) {
  return (
    <motion.div
      className="skill-card"
      whileHover={{ scale: 1.07 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      {skill}
    </motion.div>
  );
}
