import './App.css';

const projects = [
  {
    title: 'Electrical Hazards Safety System',
    desc: 'Designed an IoT safety system using Arduino UNO, ultrasonic sensors, relays, and automatic power cut-off logic to protect against electrical hazards.',
  },
  {
    title: 'Virtual Drawing Pad',
    desc: 'Built a Python OpenCV application that enables drawing on-screen using hand gestures and real-time webcam tracking.',
  },
  {
    title: 'Finger Count to Speech System',
    desc: 'Implemented a hand gesture recognition tool that counts fingers and converts the output into spoken words in multiple languages.',
  },
  {
    title: 'Face Recognition Attendance System',
    desc: 'Created a real-time employee attendance tracker with Python, OpenCV, and face recognition models for accurate logging and reporting.',
  },
];

const skills = [
  'Python',
  'Machine Learning',
  'Deep Learning',
  'Computer Vision',
  'Blockchain Fundamentals',
  'JavaScript',
  'C# & .NET',
];

const education = [
  {
    institution: 'Amity University Bengaluru',
    degree: 'Master of Computer Application (MCA)',
    year: '2024 – Present',
    grade: '6.4 CGPA',
  },
  {
    institution: "KLE's PC Jabin Science College",
    degree: 'B.Sc. in Electronics, Physics and Mathematics',
    year: '2023',
    grade: '6.8 CGPA',
  },
];

const certifications = [
  'Swayam Data Analysis with SPSS (NPTEL)',
  'C# and .NET Certification',
  'Cisco Certified Network Associate (CCNA)',
];

const gallery = [
  {
    src: '/assets/2.jpeg',
    caption: 'Project work and creative highlights',
  },
  {
    src: '/assets/3.jpeg',
    caption: 'Professional portfolio showcase',
  },
];

function App() {
  return (
    <div className="portfolio-page">
      <nav className="topbar">
        <div className="topbar-profile">
          <img src="/assets/1.jpeg" alt="Navodaya V. Kallur" className="profile-pic" />
          <div>
            <h1>Navodaya V. Kallur</h1>
            <p>MCA Candidate · Python & ML Developer</p>
          </div>
        </div>
        <a className="button" href="/resume.pdf" target="_blank" rel="noreferrer">
          View Resume
        </a>
      </nav>

      <header className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Aspiring Software Developer</p>
          <h2>Building intelligent experiences with Python, AI, and computer vision.</h2>
          <p>
            I create practical applications that solve real problems through machine learning, computer vision, IoT,
            and full-stack development. My work spans gesture-driven interfaces, attendance automation, and safety systems.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/resume.pdf" target="_blank" rel="noreferrer">
              Download Resume
            </a>
            <a className="button secondary" href="mailto:navodayakallur@gmail.com">
              Email Me
            </a>
          </div>
        </div>
        <div className="hero-details">
          <div className="detail-card">
            <h3>Contact</h3>
            <p>navodayakallur@gmail.com</p>
            <p>9071293225</p>
          </div>
          <div className="detail-card">
            <h3>Languages</h3>
            <p>English · Hindi · Kannada</p>
          </div>
          <div className="detail-card">
            <h3>Location</h3>
            <p>Hubballi, Karnataka</p>
          </div>
        </div>
      </header>

      <main className="content-grid">
        <section className="section about-section">
          <h2>About Me</h2>
          <p>
            Aspiring Software Developer and MCA candidate with a strong foundation in Python, machine learning, and full-stack
            application development. Experienced in designing and deploying solutions for computer vision, attendance automation,
            and electrical safety systems.
          </p>
        </section>

        <section className="section skills-section">
          <h2>Skills</h2>
          <div className="chips">
            {skills.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="section projects-section">
          <h2>Featured Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section gallery-section">
          <h2>Photo Gallery</h2>
          <div className="gallery-grid">
            {gallery.map((item) => (
              <div key={item.src} className="gallery-card">
                <img src={item.src} alt={item.caption} />
                <p>{item.caption}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section education-section">
          <h2>Education</h2>
          <div className="education-list">
            {education.map((item) => (
              <div key={item.institution} className="education-card">
                <h3>{item.institution}</h3>
                <p>{item.degree}</p>
                <p>{item.year} · {item.grade}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section certification-section">
          <h2>Certifications</h2>
          <ul>
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>View the full resume anytime from the button above.</p>
      </footer>
    </div>
  );
}

export default App;
