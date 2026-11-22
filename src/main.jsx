import React from 'react'
import { createRoot } from 'react-dom/client'
import { Github, Linkedin, Instagram, Mail, Phone, FileText, ArrowUpRight, Code2, Database, BriefcaseBusiness, GraduationCap, ExternalLink, FolderGit2, Terminal, Download, MessageCircle } from 'lucide-react'
import './style.css'

const links = {
  linkedin: 'https://www.linkedin.com/in/abhinai1864',
  github: 'https://github.com/Abhinai1864',
  leetcode: 'https://leetcode.com/u/Abhinai1864/',
  instagram: 'https://www.instagram.com/_a.b.h.iiii_1808/',
  email: 'mailto:maddela.abhinay2004@gmail.com',
  phone: 'tel:+916300364024',
  whatsapp: 'https://wa.me/916300364024',
}

const projects = [
  {
    number: '01', title: 'Delivery Management System', type: 'Full-stack web application',
    description: 'A shipment management application to create, view, update and delete shipment records, with a React interface connected to a Spring Boot REST API.',
    stack: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'React'],
    github: 'https://github.com/Abhinai1864/Delhivery-Management-System', status: 'Project repository',
  },
  {
    number: '02', title: 'Image Steganography using LSB', type: 'Cybersecurity project',
    description: 'A tool for hiding and extracting text messages in image files using the Least Significant Bit technique, with a Streamlit interface.',
    stack: ['Python', 'LSB', 'Pillow', 'Streamlit'],
    github: 'https://github.com/Abhinai1864/Image-Steganography-LSB', status: 'Project repository',
  },
  {
    number: '03', title: 'Detecting Mobile Malicious Webpages', type: 'Academic cybersecurity project',
    description: 'An academic project focused on identifying potentially malicious webpages targeting mobile users.',
    stack: ['Cybersecurity', 'Web security'],
    github: 'https://github.com/Abhinai1864/Detecting-Mobile-Malicious-Webpages-in-Real-Time-F', status: 'Project repository',
  },
]

function App() {
  return <>
    <header className="nav"><a className="brand" href="#home">ABHINAI<span>.</span></a><nav><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#resume">Resume</a><a href="#contact" className="nav-cta">Contact <ArrowUpRight size={14}/></a></nav></header>
    <main>
      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse"/> JAVA BACKEND DEVELOPER ASPIRANT <span className="line"/></div>
          <h1>Building useful<br/><span>software solutions.</span></h1>
          <p className="intro">I'm <strong>Abhinai Maddela</strong>, a Computer Science graduate focused on Java backend development, Spring Boot and building practical applications.</p>
          <div className="hero-actions"><a className="button primary" href="#projects">Explore projects <ArrowUpRight size={17}/></a><a className="button secondary" href="/my-portfolio/resume.pdf" target="_blank" rel="noreferrer">View resume <FileText size={16}/></a></div>
          <div className="socials"><a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a><a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a><a href={links.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode"><Code2/></a><a href={links.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram/></a></div>
        </div>
        <div className="hero-art"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="code-card"><div className="card-top"><span/><span/><span/><small>developer.java</small></div><pre><span className="syntax-purple">public class</span> <span className="syntax-blue">Abhinai</span> {'{'}{ '\n' }  <span className="syntax-purple">String</span> role = <span className="syntax-green">"Java Developer"</span>;{ '\n' }  <span className="syntax-purple">String</span>[] focus = {'{'}{ '\n' }    <span className="syntax-green">"Spring Boot"</span>,{ '\n' }    <span className="syntax-green">"REST APIs"</span>,{ '\n' }    <span className="syntax-green">"Problem Solving"</span>{ '\n' }  {'}'};{ '\n' }  <span className="syntax-purple">boolean</span> learning = <span className="syntax-orange">true</span>;{ '\n'}{'}'}</pre><div className="code-footer"><span>● Available to connect</span><span>Java · Backend</span></div></div><div className="float-tag tag-java">☕ Java</div><div className="float-tag tag-spring">Spring Boot</div><div className="float-tag tag-db">◈ MySQL</div></div>
        <div className="hero-bottom"><span>HYDERABAD, INDIA</span><span>SCROLL TO EXPLORE ↓</span><span>PORTFOLIO / 2026</span></div>
      </section>

      <section className="section about" id="about"><div className="section-label">01 / ABOUT ME</div><div className="section-grid"><h2>Curious by nature.<br/><span>Focused on building.</span></h2><div><p className="section-lead">I’m a Computer Science and Engineering graduate specializing in Cyber Security, with a strong interest in Java backend development.</p><p className="muted">I have worked on a full-stack Delivery Management System using Java, Spring Boot, React and MySQL. I’m continuing to strengthen my skills in Spring, REST APIs, databases and microservices fundamentals while exploring cybersecurity.</p><div className="facts"><div><GraduationCap/><span><b>B.Tech</b><small>CSE – Cyber Security · 2021–2025</small></span></div><div><BriefcaseBusiness/><span><b>Assistant Team Leader</b><small>Delhivery Limited · Oct 2025 – Jul 2026</small></span></div></div></div></div></section>

      <section className="section skills" id="skills"><div className="section-label">02 / TOOLKIT</div><div className="section-heading"><h2>Technologies I work with</h2><p className="muted">My current technical foundation and areas of learning.</p></div><div className="skill-grid"><article><Code2/><h3>Programming</h3><p>Java · SQL · JavaScript</p></article><article><Terminal/><h3>Backend</h3><p>Spring · Spring Boot · REST APIs · JDBC · JPA · Hibernate · Maven</p></article><article><Database/><h3>Databases</h3><p>MySQL · PostgreSQL</p></article><article><FolderGit2/><h3>Frontend & Tools</h3><p>React · HTML · CSS · Axios · Git · GitHub · Postman · IntelliJ IDEA · VS Code</p></article></div></section>

      <section className="section projects" id="projects"><div className="section-label">03 / SELECTED WORK</div><div className="section-heading"><h2>Projects & experiments</h2><p className="muted">A selection of applications and technical work.</p></div><div className="project-list">{projects.map(p=><article className="project" key={p.number}><div className="project-number">{p.number}</div><div className="project-content"><div className="project-type">{p.type}</div><h3>{p.title}</h3><p>{p.description}</p><div className="chips">{p.stack.map(s=><span key={s}>{s}</span>)}</div></div><a className="project-link" href={p.github} target="_blank" rel="noreferrer" aria-label={`Open ${p.title} repository`}><ArrowUpRight/></a></article>)}</div><p className="project-note">More projects and live demonstrations will be added as they are deployed.</p></section>

      <section className="section resume" id="resume"><div className="section-label">04 / RESUME</div><div className="resume-panel"><div className="resume-icon"><FileText size={30}/></div><div className="resume-copy"><div className="project-type">LATEST PROFILE</div><h2>My resume</h2><p>View or download my current resume for a detailed overview of my education, experience, skills and projects.</p><span className="resume-file">PDF DOCUMENT · resume.pdf</span></div><a className="button primary" href="/my-portfolio/resume.pdf" target="_blank" rel="noreferrer">View / Download <Download size={16}/></a></div><div className="update-note"><strong>Resume update:</strong> When you update your resume, replace <code>public/resume.pdf</code> in this GitHub repository and commit the change. The portfolio will continue using the same resume link.</div></section>

      <section className="section profiles"><div className="section-label">05 / FIND ME ONLINE</div><div className="section-heading"><h2>Connect & follow my journey</h2><p className="muted">Professional profiles, code repositories and learning platforms.</p></div><div className="profile-grid"><a href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin/><span><b>LinkedIn</b><small>Professional network</small></span><ExternalLink/></a><a href={links.github} target="_blank" rel="noreferrer"><Github/><span><b>GitHub</b><small>Projects & source code</small></span><ExternalLink/></a><a href={links.leetcode} target="_blank" rel="noreferrer"><Code2/><span><b>LeetCode</b><small>Coding practice</small></span><ExternalLink/></a><a href={links.instagram} target="_blank" rel="noreferrer"><Instagram/><span><b>Instagram</b><small>Personal profile</small></span><ExternalLink/></a><div className="profile-pending"><BriefcaseBusiness/><span><b>Naukri</b><small>Profile link to be added</small></span><span className="pending">Coming soon</span></div><div className="profile-pending"><Terminal/><span><b>Codeforces</b><small>Profile link to be added</small></span><span className="pending">Coming soon</span></div></div></section>

      <section className="contact" id="contact"><div className="section-label">06 / CONTACT</div><h2>Have an opportunity<br/>or an idea? <span>Let's talk.</span></h2><p>I'm open to connecting with developers, collaborators and teams working on interesting software projects.</p><div className="contact-actions"><a href={links.email}><Mail size={17}/> maddela.abhinay2004@gmail.com</a><a href={links.phone}><Phone size={17}/> +91 6300364024</a><a href={links.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp me</a></div></section>
    </main>
    <footer><a className="brand" href="#home">ABHINAI<span>.</span></a><span>Designed & built with care · 2026</span><a href="#home">Back to top ↑</a></footer>
  </>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>)
