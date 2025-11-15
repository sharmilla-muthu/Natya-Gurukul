// 

import "./about.css";

export default function About() {
  return (
    <section className="about-section">
      <h3 className="sub-heading">Our Vision</h3>

      <p className="vm-text">
        To preserve, promote, and pass on the timeless tradition of Bharatanatyam by 
        nurturing disciplined, culturally rooted, and artistically inspired individuals, 
        who carry forward the sacred legacy of Indian classical arts with grace and pride.
      </p>

      {/* MISSION */}
      <h3 className="sub-heading">Our Mission</h3>

      <ul className="vm-list">
        <li>To provide authentic, structured, and holistic training in Bharatanatyam rooted in the Guru-Shishya parampara.</li>

        <li>To instil in every student the values of discipline, devotion (bhakti), and dedication (shraddha) through the art of dance.</li>

        <li>To create a learning space where classical art is celebrated, respected, and experienced as a form of spiritual and personal growth.</li>

        <li>To empower students to express themselves through movement, emotion, and storytelling, while understanding the deeper cultural and philosophical significance of the art form.</li>

        <li>To conduct performances, workshops, and community engagements that build appreciation for Bharatanatyam within and beyond the classroom.</li>
      </ul>

    </section>
  );
}
