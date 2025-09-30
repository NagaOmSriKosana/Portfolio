import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="home section" style={{ padding: '80px 20px', display: 'flex', justifyContent: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: 700,
          backgroundColor: '#1e293b', // dark-blue card
          padding: '50px 30px',
          borderRadius: '15px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
          color: '#ffffff',
          textAlign: 'center'
        }}
      >
        <h1 style={{ fontSize: '38px', marginBottom: '20px', color: '#3b82f6' }}>
          Hi, I'm <span style={{ color: '#60a5fa' }}>Naga Om Sri Kosana</span>
        </h1>

        <p style={{ fontSize: '18px', marginBottom: '15px' }}>
          Aspiring Web Developer skilled in React, Python, and Full-Stack projects.
        </p>

        <p style={{ fontSize: '16px', marginBottom: '25px' }}>
          I also create AI-powered applications using YOLO, NLP, and OpenCV. Passionate about building modern web apps.
        </p>

        <a
          href="/resume.pdf"
          download
          style={{
            display: 'inline-block',
            padding: '12px 30px',
            backgroundColor: '#3b82f6',
            color: '#ffffff',
            borderRadius: '8px',
            fontWeight: '500',
            textDecoration: 'none',
            transition: '0.3s'
          }}
          onMouseEnter={e => (e.target.style.backgroundColor = '#2563eb')}
          onMouseLeave={e => (e.target.style.backgroundColor = '#3b82f6')}
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
