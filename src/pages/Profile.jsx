function Profile() {
  return (
    <div style={{
      maxWidth: "500px",
      margin: "40px auto",
      padding: "25px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      fontFamily: "Arial"
    }}>
      <h1 style={{ textAlign: "center" }}>My Profile</h1>

      <h2 contentEditable="true">Your Name</h2>
      <p contentEditable="true">Software Developer</p>

      <p><strong>Email:</strong> <span contentEditable="true">your@email.com</span></p>
      <p><strong>Phone:</strong> <span contentEditable="true">+254 700 000 000</span></p>

      <h3>Skills</h3>
      <ul contentEditable="true">
        <li>React</li>
        <li>JavaScript</li>
        <li>Python</li>
        <li>Git & GitHub</li>
      </ul>

      <h3>Projects</h3>
      <ul contentEditable="true">
        <li>React Web Application</li>
        <li>Python Trading Project</li>
      </ul>
    </div>
  );
}

export default Profile;
