"use client";

import Image from "next/image";
import "../../../styles/department.css";

export default function ScienceDept() {
  return (
    <div className="departmentPage">

      {/* HERO */}
      <section className="departmentHero">
        <h1>Science Department</h1>
        <p>Innovative learning and hands-on experiments</p>
      </section>

      {/* HOD MESSAGE */}
      <section className="hodMessageSection">
        <div className="hodContainer">
          
          {/* HOD IMAGE */}
          <div className="hodImageWrapper">
            <Image
              src="/science.png"
              alt="Head of Science Department"
              width={350}
              height={400}
              className="hodImage"
            />
          </div>

          {/* HOD MESSAGE */}
          <div className="hodMessageContent">
            <h2>Message from the Head of Department</h2>
            <p>
              Welcome to the Science Department at Green Valley Academy. Our goal 
              is to foster curiosity, critical thinking, and practical application 
              of scientific concepts through interactive lessons and laboratory work.
            </p>
            <p>
              Students are regularly assessed through theory and practical exams. 
              Those who need extra support receive targeted guidance to ensure 
              they meet academic standards. High-achieving students are encouraged 
              to explore advanced projects.
            </p>
            <p>
              We actively participate in interschool science fairs, Olympiads, and 
              competitions. These opportunities allow students to demonstrate their 
              creativity and problem-solving skills in real-world scenarios.
            </p>
            <p>
              Overall, the Science Department is committed to helping every student 
              achieve excellence, develop a strong foundation in scientific principles, 
              and perform confidently in both academics and competitions.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
