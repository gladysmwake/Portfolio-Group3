const projects = [
  { id: 1, name: "Portfolio App", tech: "React, Vite" },
  { id: 2, name: "Task Tracker", tech: "Jira, Git" },
];

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <ul>
        {projects.map((p) => (
          <li key={p.id}>
            <strong>{p.name}</strong> — {p.tech}
          </li>
        ))}
      </ul>
    </section>
  );
}
