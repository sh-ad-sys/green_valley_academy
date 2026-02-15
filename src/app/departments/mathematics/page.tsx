"use client";

import Image from "next/image";
import "../../../styles/department.css";

export default function MathematicsDept() {
  return (
    <div className="departmentPage">

      {/* HERO */}
      <section className="departmentHero">
        <h1>Mathematics Department</h1>
        <p>Excellence in teaching and student achievement</p>
      </section>

      {/* HOD MESSAGE */}
      <section className="hodMessageSection">
        <div className="hodContainer">
          
          {/* HOD IMAGE */}
          <div className="hodImageWrapper">
            <Image
              src="/maths.png"
              alt="Head of Mathematics Department"
              width={450}
              height={500}
              className="hodImage"
            />
          </div>

          {/* HOD MESSAGE */}
          <div className="hodMessageContent">
            <h2>Message from the Head of Department</h2>
            <p>
              Welcome to the Mathematics Department at Green Valley Academy. 
              Our students are guided through a rigorous curriculum designed to 
              build strong analytical and problem-solving skills. 
            </p>
            <p>
              We monitor performance closely, ensuring students understand concepts 
              thoroughly before advancing. Students are assessed continuously; those 
              who excel are encouraged to challenge themselves further, while 
              additional support is provided to those who need help to meet 
              academic standards.
            </p>
            <p>
              Our department actively participates in interschool competitions, 
              math Olympiads, and problem-solving contests. These opportunities 
              help students apply knowledge in practical scenarios and build confidence.
            </p>
            <p>
              Overall, the Mathematics Department is committed to helping each 
              student achieve excellence, develop critical thinking, and perform 
              at the highest level academically.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
