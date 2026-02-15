"use client";

import "../../styles/discipline.css";

export default function DisciplinePage() {
  return (
    <div className="disciplinePage">

      {/* HERO SECTION */}
      <section className="disciplineHero">
        <div className="heroOverlay"></div>
        <div className="heroContent">
          <h1 className="heroTitle">Discipline at Green Valley Academy</h1>
          <p className="heroSubtitle">
            Fostering responsibility, respect, and integrity in every student.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="disciplineIntro">
        <h2 className="sectionTitle">Our Approach to Discipline</h2>
        <p className="sectionText">
          At Green Valley Academy, discipline is not about punishment but about guiding students 
          to develop self-respect, accountability, and positive behavior. We aim to create a safe, 
          respectful, and nurturing environment where students can grow academically, socially, and personally.
        </p>
      </section>

      {/* PRINCIPLES */}
      <section className="disciplinePrinciples">
        <h2 className="sectionTitle">Key Principles</h2>
        <div className="principlesGrid">
          <div className="principleCard">
            <h3>Respect</h3>
            <p>Students are taught to respect themselves, peers, staff, and the community.</p>
          </div>
          <div className="principleCard">
            <h3>Responsibility</h3>
            <p>Students learn to take responsibility for their actions and decisions.</p>
          </div>
          <div className="principleCard">
            <h3>Integrity</h3>
            <p>Honesty and ethical behavior are emphasized in every aspect of school life.</p>
          </div>
          <div className="principleCard">
            <h3>Consistency</h3>
            <p>Rules are applied fairly and consistently to ensure trust and understanding.</p>
          </div>
        </div>
      </section>

      {/* DISCIPLINE PROGRAMS */}
      <section className="disciplinePrograms">
        <h2 className="sectionTitle">Programs & Support</h2>
        <ul className="programList">
          <li>Positive Behavior Workshops</li>
          <li>Peer Mentorship Programs</li>
          <li>Conflict Resolution Sessions</li>
          <li>Guidance & Counseling</li>
          <li>Character Development Activities</li>
        </ul>
      </section>

    </div>
  );
}
