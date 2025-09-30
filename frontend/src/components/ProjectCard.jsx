import { motion } from "framer-motion";

export default function ProjectCard({ title, desc, img, github, live }) {
  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
      <div style={{marginTop:10}}>
        <a href={github} target="_blank" rel="noreferrer" style={{marginRight:10}}>GitHub</a>
        {live && <a href={live} target="_blank" rel="noreferrer">Live</a>}
      </div>
    </motion.div>
  );
}
