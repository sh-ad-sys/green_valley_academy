"use client";

import "../../styles/policies.css";

export default function PoliciesPage() {
  const policies = [
    {
      title: "Academic Policy",
      description:
        "Our academic policy outlines expectations for learning, grading, and examinations to ensure fairness and excellence.",
    },
    {
      title: "Code of Conduct",
      description:
        "Students are expected to uphold integrity, respect, and responsibility within the school community.",
    },
    {
      title: "Safety & Security Policy",
      description:
        "The safety and wellbeing of students and staff are prioritized through clear rules, emergency procedures, and supervision.",
    },
    {
      title: "Attendance Policy",
      description:
        "Regular attendance is crucial. Our policy details procedures for excused and unexcused absences.",
    },
    {
      title: "Technology & Internet Policy",
      description:
        "Guidelines on responsible use of school IT resources and internet access for learning and research.",
    },
  ];

  return (
    <div className="policiesPage">

      {/* HERO SECTION */}
      <section className="policiesHero">
        <h1>School Policies</h1>
        <p>Understand the rules, guidelines, and frameworks that govern Green Valley Academy.</p>
      </section>

      {/* POLICIES CARDS */}
      <section className="policiesSection">
        <div className="policiesGrid">
          {policies.map((policy, index) => (
            <div className="policyCard" key={index}>
              <h3>{policy.title}</h3>
              <p>{policy.description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
