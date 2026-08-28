const projects = [
  {
    id: "01",
    name: "Portfolio App",
    type: "Web experience",
    description:
      "A clear, responsive home for the team, our process, and the work we are proud to share.",
    tech: ["React", "Vite", "CSS"],
  },
  {
    id: "02",
    name: "Task Tracker",
    type: "Productivity tool",
    description:
      "A focused workspace for turning a busy project backlog into visible, actionable progress.",
    tech: ["React", "Jira", "Git"],
  },
];

export default function Projects() {
  return (
    <main className="page projects-page">
      <header className="projects-header">
        <div>
          <p className="eyebrow">Selected work</p>
          <h1>Projects with purpose.</h1>
        </div>
        <p className="projects-intro">
          A collection of practical, thoughtful digital work built by Group3.
        </p>
      </header>

      <section className="project-list" aria-label="Group3 projects">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-card-topline">
              <span className="project-number">{project.id}</span>
              <span>{project.type}</span>
            </div>
            <div className="project-card-content">
              <div>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
              </div>
              <div
                className="project-tech"
                aria-label={`${project.name} technologies`}
              >
                {project.tech.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
            <a
              className="project-link"
              href={`/projects#${project.name.toLowerCase().replaceAll(" ", "-")}`}
            >
              View project <span aria-hidden="true">-&gt;</span>
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}
