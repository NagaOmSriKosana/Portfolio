import { projects } from "../data";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="projects section">
      <div style={{maxWidth:1100, margin:'0 auto'}}>
        <h2 style={{textAlign:'center'}}>My Projects</h2>
        <div className="project-grid" style={{marginTop:20}}>
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <ProjectCard {...p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
