"use client";

import { useState } from "react";
import "../../styles/apply.css";

export default function ApplyPage() {
  const [formStatus, setFormStatus] = useState<null | string>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simulate form submission
    const success = Math.random() > 0.2; // 80% chance success

    if (success) {
      setFormStatus("Your application has been submitted successfully!");
    } else {
      setFormStatus("Submission failed. Please try again later.");
    }

    // Reset message after 5 seconds
    setTimeout(() => setFormStatus(null), 5000);
  };

  return (
    <div className="applyPage">

      {/* HERO */}
      <section className="applyHero">
        <h1>Apply to Green Valley Academy</h1>
        <p>Complete the application form below to join our school community.</p>
      </section>

      {/* DOWNLOADABLE FORMS */}
      <section className="downloadForms">
        <h2>Downloadable Forms</h2>
        <div className="formLinks">
          <a href="/forms/day_student_form.pdf" download className="downloadButton">
            Download Day Student Form
          </a>
          <a href="/forms/boarding_form.pdf" download className="downloadButton">
            Download Boarding Student Form
          </a>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="applyFormSection">
        <h2>Application Form</h2>

        <form className="applyForm" onSubmit={handleSubmit}>

          {/* Personal Information */}
          <fieldset>
            <legend>Personal Information</legend>

            <div className="formGroup">
              <label>Full Name</label>
              <input type="text" placeholder="Enter full name" required />
            </div>

            <div className="formGroup">
              <label>Date of Birth</label>
              <input type="date" required />
            </div>

            <div className="formGroup">
              <label>Gender</label>
              <select required>
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div className="formGroup">
              <label>Grade/Class Applying For</label>
              <input type="text" placeholder="e.g., Grade 6, Form 1" required />
            </div>
          </fieldset>

          {/* Guardian Information */}
          <fieldset>
            <legend>Guardian Information</legend>

            <div className="formGroup">
              <label>Guardian Name</label>
              <input type="text" placeholder="Enter guardian name" required />
            </div>

            <div className="formGroup">
              <label>Phone Number</label>
              <input type="tel" placeholder="+254 700 000 000" required />
            </div>

            <div className="formGroup">
              <label>Email Address</label>
              <input type="email" placeholder="guardian@example.com" required />
            </div>
          </fieldset>

          {/* Academic Information */}
          <fieldset>
            <legend>Academic Information</legend>

            <div className="formGroup">
              <label>Previous School</label>
              <input type="text" placeholder="Enter previous school" required />
            </div>

            <div className="formGroup">
              <label>Previous Grade/Class</label>
              <input type="text" placeholder="e.g., Grade 5, Form 2" required />
            </div>

            <div className="formGroup">
              <label>Attach Academic Reports</label>
              <input type="file" accept=".pdf,.jpg,.png" required />
            </div>
          </fieldset>

          {/* Boarding / Day Option */}
          <fieldset>
            <legend>Enrollment Type</legend>
            <div className="formGroup">
              <label>
                <input type="radio" name="enrollment" value="day" required />
                Day Student
              </label>
              <label>
                <input type="radio" name="enrollment" value="boarding" required />
                Boarding Student
              </label>
            </div>
          </fieldset>

          <button type="submit" className="submitButton">Apply Now</button>

          {formStatus && (
            <div className={`formStatus ${formStatus.includes("successfully") ? "success" : "error"}`}>
              {formStatus}
            </div>
          )}
        </form>
      </section>

    </div>
  );
}
