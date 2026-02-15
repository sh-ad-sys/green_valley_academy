"use client";

import Image from "next/image";
import "../../../styles/department.css";

export default function LanguagesDept() {
  return (
    <div className="departmentPage">

      {/* HERO */}
      <section className="departmentHero">
        <h1>Language & Literature Department</h1>
        <p>Developing communication, creativity, and critical thinking</p>
      </section>

      {/* HOD MESSAGE */}
      <section className="hodMessageSection">
        <div className="hodContainer">

          {/* HOD IMAGE */}
          <div className="hodImageWrapper">
            <Image
              src="/language.png"
              alt="Head of Languages Department"
              width={350}
              height={400}
              className="hodImage"
            />
          </div>

          {/* HOD MESSAGE */}
          <div className="hodMessageContent">
            <h2>Message from the Head of Department</h2>
            <p>
              Welcome to the Language & Literature Department at Green Valley Academy. 
              Our focus is to cultivate strong communication skills, creativity, 
              and appreciation for literature in all its forms.
            </p>
            <p>
              Students are assessed through essays, oral presentations, and examinations. 
              We provide support for students to ensure they achieve their best, 
              while encouraging advanced learners to explore literature critically 
              and creatively.
            </p>
            <p>
              The department actively participates in literary competitions, debates, 
              poetry recitals, and interschool language contests. These activities 
              enhance students’ confidence and foster teamwork.
            </p>
            <p>
              Overall, our department is committed to nurturing articulate, confident, 
              and thoughtful students who excel academically and creatively.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
