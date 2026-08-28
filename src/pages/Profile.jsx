function Profile() {
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "25px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ textAlign: "center" }}>My Profile</h1>

      <h2>Faith Mathenge</h2>
      <p>Software Developer</p>

      <p>
        <strong>Email:</strong> faith@example.com
      </p>
      <p>
        <strong>Phone:</strong> +254 700 000 000
      </p>

      <h3>Skills</h3>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>Python</li>
        <li>Git & GitHub</li>
      </ul>

      <h3>Projects</h3>
      <ul>
        <li>React Web Application</li>
        <li>Python Trading Project</li>
      </ul>
    </div>
  );
}

export default Profile;
