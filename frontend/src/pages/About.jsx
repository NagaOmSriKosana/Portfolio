export default function About() {
  return (
    <section className="about section" style={{ padding: '60px 20px' }}>
      <div 
        style={{ 
          maxWidth: 900, 
          margin: '0 auto', 
          lineHeight: 1.6, 
          backgroundColor: '#1e293b', // slightly lighter dark-blue box
          padding: '30px', 
          borderRadius: '10px', 
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          color: '#ffffff' // white text
        }}
      >
        <h2 style={{ fontSize: '36px', color: '#3b82f6', marginBottom: '20px', textAlign: 'center' }}>
          About Me
        </h2>

        <p style={{ fontSize: '17px', marginBottom: '25px' }}>
          I'm a passionate developer skilled in React, Flask, Python, and AI features using YOLO, NLP, and OpenCV.
          I enjoy building real-world applications and exploring new technologies to create impactful projects.
        </p>

        <h3 style={{ fontSize: '26px', color: '#60a5fa', marginBottom: '12px' }}>My Journey</h3>
        <p style={{ fontSize: '16px', marginBottom: '20px' }}>
          I started with web development by learning HTML, CSS, and JavaScript, then progressed to React for frontend 
          and Flask for backend development. I enjoy creating full-stack applications and integrating AI features like 
          object detection, NLP, and computer vision.
        </p>

        <h3 style={{ fontSize: '26px', color: '#60a5fa', marginBottom: '12px' }}>Skills & Expertise</h3>
        <ul style={{ fontSize: '16px', marginBottom: '20px', paddingLeft: '20px' }}>
          <li>Frontend: React.js, HTML, CSS, JavaScript, Responsive Design</li>
          <li>Backend: Flask, Python, REST APIs, SQL</li>
          <li>AI Features: YOLO, NLP, OpenCV</li>
          <li>Tools: Git, GitHub, VS Code, NPM</li>
        </ul>

        <h3 style={{ fontSize: '26px', color: '#60a5fa', marginBottom: '12px' }}>Interests</h3>
        <p style={{ fontSize: '16px' }}>
          Besides coding, I enjoy exploring new web technologies, building AI-powered applications, and collaborating 
          on projects that challenge me to learn and grow as a developer.
        </p>
      </div>
    </section>
  );
}
