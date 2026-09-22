import { Container } from "@/components/container";
import { ExperienceItem } from "@/components/experience-item";
import { ProjectRail } from "@/components/project-rail";
import { Reveal } from "@/components/reveal";
import { experiences } from "@/content/experience";
import { projects } from "@/content/projects";
import { siteConfig } from "@/content/site";
import { skillCategories } from "@/content/skills";

export default function Home() {
  return (
    <Container className="home-content">
      <section id="about" className="hero" aria-labelledby="intro-title">
        <p className="eyebrow">Mechatronics & Robotics · Queen’s University</p>
        <h1 id="intro-title">Hi, I’m<br /><span>{siteConfig.name}.</span></h1>
        <p className="hero-description">{siteConfig.introduction}</p>
        <p className="mt-4 text-sm text-muted">{siteConfig.education} · {siteConfig.educationPeriod}</p>
        <div className="flex flex-wrap gap-3 mt-8">
          <a className="button button-primary" href="#projects">Explore my work <span aria-hidden="true">↘</span></a>
          <a className="button" href={siteConfig.links.resume} target="_blank" rel="noreferrer">Resume ↗</a>
        </div>
        <div className="hero-bottom">
          <div className="flex gap-6 text-sm text-muted">
            <a href={siteConfig.links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={siteConfig.links.devpost} target="_blank" rel="noreferrer">Devpost ↗</a>
          </div>
          <a href="#projects" className="text-sm text-muted">Scroll to discover <span className="inline-block ml-3" aria-hidden="true">↓</span></a>
        </div>
      </section>
      <section id="projects" className="home-section" aria-labelledby="projects-title">
        <Reveal><div className="section-intro"><p className="eyebrow">01 / Selected work</p><h2 id="projects-title">A few things I’ve built.</h2><p>From embedded systems to the web. Select a project for a closer look.</p></div></Reveal>
        <ProjectRail projects={projects} />
      </section>
      <section id="experience" className="home-section" aria-labelledby="experience-title">
        <Reveal><div className="section-intro"><p className="eyebrow">02 / Experience</p><h2 id="experience-title">Learning by doing.</h2><p>Engineering experience, collaboration, and hands-on problem solving.</p></div></Reveal>
        <div className="experience-list">{experiences.map(experience => <Reveal key={experience.organization + experience.position}><ExperienceItem experience={experience} /></Reveal>)}</div>
      </section>
      <section id="skills" className="home-section" aria-labelledby="skills-title">
        <Reveal><div className="section-intro"><p className="eyebrow">03 / Toolkit</p><h2 id="skills-title">Tools I work with.</h2><p>Across software, hardware, and everything in between.</p></div></Reveal>
        <div>{skillCategories.map(category => <Reveal key={category.name}><div className="skill-row"><h3>{category.name}</h3><div className="flex flex-wrap gap-2">{category.skills.map(skill => <span className="tag" key={skill}>{skill}</span>)}</div></div></Reveal>)}</div>
      </section>
      <section id="contact" className="home-section contact-section" aria-labelledby="contact-title">
        <Reveal><p className="eyebrow">04 / Get in touch</p><h2 id="contact-title">Let’s build something<br /><span className="text-muted">worth talking about.</span></h2><p className="mt-6 max-w-lg text-muted leading-7">Have a role, a project, or an idea in mind? I’d love to hear from you.</p><a className="button button-primary mt-8" href={`mailto:${siteConfig.links.email}`}>Say hello ↗</a><div className="flex flex-wrap gap-6 mt-8 text-sm text-muted"><a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={siteConfig.links.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={`mailto:${siteConfig.links.email}`}>{siteConfig.links.email}</a></div></Reveal>
      </section>
    </Container>
  );
}
