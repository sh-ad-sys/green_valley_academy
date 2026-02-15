"use client";

import "../../styles/performance.css";

export default function PerformancePage() {
  const performanceHighlights = [
    {
      title: "Academic Excellence",
      description:
        "Our students consistently achieve top grades in national and international examinations.",
    },
    {
      title: "Sports Achievements",
      description:
        "Green Valley Academy champions in athletics, football, basketball, and swimming competitions.",
    },
    {
      title: "Arts & Culture",
      description:
        "Students excel in music, drama, and visual arts at local and national competitions.",
    },
    {
      title: "Community Engagement",
      description:
        "Students participate in community service and social responsibility projects, shaping future leaders.",
    },
  ];

  return (
    <div className="performancePage">

      {/* HERO SECTION */}
      <section className="performanceHero">
        <div className="heroOverlay"></div>
        <div className="heroContent">
          <h1 className="heroTitle">Our Performance</h1>
          <p className="heroSubtitle">
            Excellence in academics, sports, arts, and community engagement
          </p>
        </div>
      </section>

      {/* PERFORMANCE HIGHLIGHTS */}
      <section className="performanceSection">
        <h2 className="sectionTitle">Performance Highlights</h2>
        <div className="highlightGrid">
          {performanceHighlights.map((highlight, index) => (
            <div className="highlightCard" key={index}>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STUDENT STATISTICS */}
      <section className="performanceStats">
        <h2 className="sectionTitle">Student Achievements</h2>
        <div className="statsGrid">
          <div className="statCard">
            <h3>95%</h3>
            <p>Exam Pass Rate</p>
          </div>
          <div className="statCard">
            <h3>50+</h3>
            <p>Sports Trophies Won</p>
          </div>
          <div className="statCard">
            <h3>30+</h3>
            <p>Arts Awards</p>
          </div>
          <div className="statCard">
            <h3>100%</h3>
            <p>Community Service Participation</p>
          </div>
        </div>
      </section>

    </div>
  );
}
