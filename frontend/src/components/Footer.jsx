import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Naga Om Sri Kosana | All Rights Reserved</p>
      <div className="socials">
        <a href="https://github.com/NagaOmSriKosana" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/naga-om-sri-kosana/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      </div>
    </footer>
  );
}
