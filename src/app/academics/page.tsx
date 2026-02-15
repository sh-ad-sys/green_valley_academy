"use client";

import Link from "next/link";
import "../../styles/academics.css";

export default function Academics() {
  return (
    <div className="academicsPage">

      {/* ================= PAGE HEADER ================= */}
      <section className="academicsHeader">
        <h1 className="academicsTitle">Academics</h1>
        <p className="academicsSubtitle">
          Delivering quality education with holistic development.
        </p>
      </section>

      {/* ================= CURRICULUM ================= */}
      <section className="academicsSection bg-graySection">
        <h2 className="sectionTitle">Curriculum Offered</h2>
        <p className="sectionText">
          At Green Valley Academy, we follow the <strong>CBC (Competency-Based Curriculum)</strong> 
          designed to develop skills, critical thinking, and creativity alongside academic excellence.
        </p>
      </section>

      {/* ================= SUBJECTS ================= */}
      <section className="academicsSection">
        <h2 className="sectionTitle">Subjects</h2>
        <ul className="subjectsList">
          <li>Mathematics</li>
          <li>English Language & Literature</li>
          <li>Science (Biology, Chemistry, Physics)</li>
          <li>Social Studies & History</li>
          <li>ICT & Computer Science</li>
          <li>Languages (French / Kiswahili)</li>
          <li>Arts & Music</li>
        </ul>
      </section>

      {/* ================= DEPARTMENTS ================= */}
      <section className="academicsSection bg-graySection">
        <h2 className="sectionTitle">Departments</h2>
        <ul className="departmentsList">
          <li><Link href="/departments/mathematics">Mathematics Department</Link></li>
          <li><Link href="/departments/science">Science Department</Link></li>
          <li><Link href="/departments/languages">Languages & Literature Department</Link></li>
          <li><Link href="/departments/ict">ICT Department</Link></li>
          <li><Link href="/departments/arts">Arts & Creative Studies Department</Link></li>
        </ul>
      </section>

      {/* ================= CO-CURRICULAR ACTIVITIES ================= */}
      <section className="academicsSection">
        <h2 className="sectionTitle">Co-Curricular Activities</h2>
        <ul className="activitiesList">
          <li><Link href="/activities/sports">Sports: Football, Basketball, Athletics, Swimming</Link></li>
          <li><Link href="/activities/music-drama">Music & Drama Club</Link></li>
          <li><Link href="/activities/debate">Debate & Public Speaking Club</Link></li>
          <li><Link href="/activities/stem-robotics">STEM & Robotics Club</Link></li>
          <li><Link href="/activities/community-service">Community Service & Volunteering</Link></li>
        </ul>
      </section>

    </div>
  );
}
