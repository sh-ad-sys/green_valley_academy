"use client";

import "../../styles/about.css";
import Image from "next/image";

export default function About() {
  return (
    <div className="aboutPage">

      {/* ================= PAGE TITLE ================= */}
      <section className="aboutPageHeader">
        <h1 className="aboutPageTitle">About Us</h1>
        <p className="aboutPageSubtitle">
          Excellence in education, character, and community.
        </p>
      </section>

      {/* ================= SCHOOL HISTORY ================= */}
      <section className="aboutSection">
        <h2 className="sectionTitle">School History</h2>
        <p className="sectionText">
          Green Valley Academy was founded in 1995 with a vision to provide world-class education 
          rooted in values and innovation. Over the past 25+ years, we have grown into one of the 
          most respected institutions in the region, known for academic excellence, discipline, and 
          nurturing future leaders.
        </p>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="aboutSection bg-graySection">
        <h2 className="sectionTitle">Vision & Mission</h2>
        <p className="sectionText">
          <strong>Vision:</strong> To empower students to become confident, innovative, and responsible 
          global citizens.
        </p>
        <p className="sectionText">
          <strong>Mission:</strong> To provide holistic education, combining strong academics with values, 
          character-building, and real-world skills.
        </p>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="aboutSection">
        <h2 className="sectionTitle">Core Values</h2>
        <ul className="valuesList">
          <li>Integrity & Honesty</li>
          <li>Excellence in Learning</li>
          <li>Discipline & Responsibility</li>
          <li>Innovation & Creativity</li>
          <li>Community & Respect</li>
        </ul>
      </section>

      {/* ================= PRINCIPAL’S MESSAGE ================= */}
      <section className="aboutSection bg-graySection principalSection">
        <h2 className="sectionTitle">Principal&apos;s Message</h2>
        <div className="principalContainer">
         <Image
  src="/principal.png"
  alt="Principal"
  width={200}          // set fixed width
  height={200}         // set fixed height
  className="principalImage"
/>

          <p className="principalText">
            Welcome to Green Valley Academy! It is my privilege to lead a school that values excellence, 
            integrity, and innovation. Our dedicated faculty and staff are committed to nurturing students 
            academically, socially, and personally. At Green Valley Academy, every student is encouraged 
            to explore, grow, and realize their fullest potential. We take pride in shaping future leaders 
            who will make a difference in the world.
          </p>
        </div>
      </section>

      {/* ================= WHY IT MATTERS ================= */}
      <section className="aboutSection">
        <h2 className="sectionTitle">Why It Matters</h2>
        <p className="sectionText">
          Schools care deeply about identity because it shapes who students become. At Green Valley Academy, 
          we focus not just on academics, but on cultivating values, leadership, and a sense of belonging. 
          Understanding oneself and one’s community prepares students to thrive in life beyond school.
        </p>
      </section>

    </div>
  );
}
