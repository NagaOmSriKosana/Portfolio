export default function Contact() {
  return (
    <section className="contact section" style={{ padding: '60px 20px' }}>
      <div 
        style={{ 
          maxWidth: 900, 
          margin: '0 auto', 
          textAlign: 'center', 
          backgroundColor: '#1e293b', // slightly lighter dark-blue for box
          padding: '30px', 
          borderRadius: '10px', 
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          color: '#ffffff',
          lineHeight: 1.6
        }}
      >
        <h2 style={{ fontSize: '36px', color: '#3b82f6', marginBottom: '20px' }}>Contact Me</h2>
        
        <p style={{ fontSize: '17px', marginBottom: '15px' }}>
          I’m always open to discussing new projects, opportunities, or collaborations.
        </p>

        <p style={{ fontSize: '16px', marginBottom: '25px' }}>
          Email: <a href="mailto:nagaomsrikosana@gmail.com" style={{ color: '#60a5fa' }}>nagaomsrikosana@gmail.com</a>
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '24px' }}>
          <a href="https://www.linkedin.com/in/nagaomsrikosana" target="_blank" rel="noopener noreferrer" style={{ color: '#0ea5e9' }}>LinkedIn</a>
          <a href="https://www.linkedin.com/in/naga-om-sri-kosana/" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8' }}>GitHub</a>
        </div>
      </div>
    </section>
  );
}
