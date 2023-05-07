import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <section className="socialMediaIcons">
      <a
        href="https://github.com/Rydwan94/Country-Info-Searcher-In-React-Api"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/%C5%82ukasz-rydwa%C5%84ski-237469173/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
      <FaLinkedin />
      </a>
    </section>
  );
};

export default SocialMedia;
