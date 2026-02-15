"use client";

import Link from "next/link";
import "../../styles/admissions.css";

export default function Admissions() {
  return (
    <div className="admissionsPage">

      {/* ================= HEADER ================= */}
      <section className="admissionsHeader">
        <h1 className="admissionsTitle">Admissions</h1>
        <p className="admissionsSubtitle">
          Begin your journey toward excellence at Green Valley Academy.
        </p>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="admissionsSection">
        <h2 className="sectionTitle">Why Choose Us</h2>

        <div className="infoGrid">
          <div className="infoCard">
            <h3>Academic Excellence</h3>
            <p>Consistently high academic performance with modern teaching methods.</p>
          </div>

          <div className="infoCard">
            <h3>Holistic Development</h3>
            <p>Strong co-curricular programs including sports, arts, and leadership.</p>
          </div>

          <div className="infoCard">
            <h3>Modern Facilities</h3>
            <p>Well-equipped science labs, ICT centers, and boarding facilities.</p>
          </div>

          <div className="infoCard">
            <h3>Safe & Supportive Environment</h3>
            <p>Secure campus with experienced and caring staff.</p>
          </div>
        </div>
      </section>

      {/* ================= ADMISSION PROCESS ================= */}
      <section className="admissionsSection bg-graySection">
        <h2 className="sectionTitle">Admission Process</h2>

        <div className="processSteps">
          <div className="step">
            <span>1</span>
            <p>Download or complete the online application form.</p>
          </div>

          <div className="step">
            <span>2</span>
            <p>Submit required academic documents and identification.</p>
          </div>

          <div className="step">
            <span>3</span>
            <p>Attend assessment interview (if applicable).</p>
          </div>

          <div className="step">
            <span>4</span>
            <p>Receive admission letter and confirm enrollment.</p>
          </div>
        </div>
      </section>

      {/* ================= IMPORTANT DATES ================= */}
      <section className="admissionsSection">
        <h2 className="sectionTitle">Important Admission Dates</h2>

        <div className="datesCard">
          <p><strong>Application Opens:</strong> January 5th</p>
          <p><strong>Application Deadline:</strong> March 30th</p>
          <p><strong>Entrance Interviews:</strong> April 10th - April 20th</p>
          <p><strong>Term Begins:</strong> May 6th</p>
        </div>
      </section>

      {/* ================= FEES STRUCTURE ================= */}
      <section className="admissionsSection bg-graySection">
        <h2 className="sectionTitle">Fees Structure</h2>

        <div className="feesTableWrapper">
          <table className="feesTable">
            <thead>
              <tr>
                <th>Class/Grade</th>
                <th>Day Scholar (Per Term)</th>
                <th>Boarding (Per Term)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Grade 1 - 3</td>
                <td>KES 30,000</td>
                <td>KES 55,000</td>
              </tr>
              <tr>
                <td>Grade 4 - 6</td>
                <td>KES 35,000</td>
                <td>KES 60,000</td>
              </tr>
              <tr>
                <td>Grade 7 - 9</td>
                <td>KES 40,000</td>
                <td>KES 70,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="downloadSection">
          <a href="/fee-structure.pdf" download className="downloadButton">
            Download Full Fee Structure
          </a>
        </div>
      </section>

      {/* ================= APPLY SECTION ================= */}
      <section className="admissionsSection">
        <h2 className="sectionTitle">Start Your Application</h2>

        <div className="admissionsActions">
          <a href="/admission-form.pdf" download className="downloadButton">
            Download Admission Form
          </a>

          <Link href="/apply">
            <button className="applyButton">
              Apply Online
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}
