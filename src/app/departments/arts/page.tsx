"use client";

import Image from "next/image";
import "../../../styles/department.css";

export default function ArtsDept() {
  return (
    <div className="departmentPage">

      {/* HERO */}
      <section className="departmentHero">
        <h1>Arts & Creative Studies Department</h1>
        <p>Inspiring creativity, expression, and artistic excellence</p>
      </section>

      {/* HOD MESSAGE */}
      <section className="hodMessageSection">
        <div className="hodContainer">

          {/* HOD IMAGE */}
          <div className="hodImageWrapper">
            <Image
              src="/arts.png"
              alt="Head of Arts Department"
              width={250}
              height={300}
              className="hodImage"
            />
          </div>

          {/* HOD MESSAGE */}
          <div className="hodMessageContent">
            <h2>Message from the Head of Department</h2>
            <p>
              Welcome to the Arts & Creative Studies Department at Green Valley Academy. 
              Our mission is to nurture creativity, imagination, and self-expression through 
              diverse artistic disciplines including visual arts, music, drama, and design.
            </p>
            <p>
              Students are assessed based on practical projects, performances, and portfolio submissions. 
              Constructive feedback and mentorship ensure that every student develops their talent and 
              achieves academic excellence.
            </p>
            <p>
              Our department actively participates in interschool arts competitions, exhibitions, 
              concerts, and theatre productions, allowing students to showcase their creativity and 
              build confidence.
            </p>
            <p>
              Overall, the Arts & Creative Studies Department is committed to helping students 
              excel artistically and academically, fostering innovative thinkers and confident 
              performers.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
