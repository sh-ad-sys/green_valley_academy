"use client";

import Image from "next/image";
import "../../../styles/department.css";

export default function ICTDept() {
  return (
    <div className="departmentPage">

      {/* HERO */}
      <section className="departmentHero">
        <h1>ICT Department</h1>
        <p>Innovating through technology and practical learning</p>
      </section>

      {/* HOD MESSAGE */}
      <section className="hodMessageSection">
        <div className="hodContainer">

          {/* HOD IMAGE */}
          <div className="hodImageWrapper">
            <Image
              src="/ict.png"
              alt="Head of ICT Department"
              width={350}
              height={400}
              className="hodImage"
            />
          </div>

          {/* HOD MESSAGE */}
          <div className="hodMessageContent">
            <h2>Message from the Head of Department</h2>
            <p>
              Welcome to the ICT Department at Green Valley Academy. Our goal is to equip students 
              with cutting-edge technological skills, problem-solving abilities, and digital literacy 
              essential for the 21st century.
            </p>
            <p>
              Students are evaluated through practical projects, coding assignments, and theory exams. 
              Those needing additional support receive mentorship to ensure mastery of concepts, while 
              advanced students are encouraged to explore innovative projects.
            </p>
            <p>
              The ICT Department participates in interschool tech competitions, coding hackathons, 
              and robotics challenges, giving students a platform to showcase their skills and creativity.
            </p>
            <p>
              Overall, our department is committed to nurturing competent, confident, and innovative 
              students who excel academically and practically in ICT.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
