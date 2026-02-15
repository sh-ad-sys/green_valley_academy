"use client";

import "../../styles/downloads.css";

export default function DownloadsPage() {
  const downloads = [
    {
      title: "Admission Form 2026",
      description: "Download the admission form for new students.",
      file: "/downloads/admission_form.pdf",
    },
    {
      title: "Academic Calendar 2026",
      description: "View or download the school academic calendar.",
      file: "/downloads/academic_calendar.pdf",
    },
    {
      title: "Exam Timetable",
      description: "Download the termly exam timetable.",
      file: "/downloads/exam_timetable.pdf",
    },
    {
      title: "School Prospectus",
      description: "Download the latest school prospectus.",
      file: "/downloads/prospectus.pdf",
    },
  ];

  return (
    <div className="downloadsPage">

      {/* HERO SECTION */}
      <section className="downloadsHero">
        <h1>Downloads</h1>
        <p>Access important forms, timetables, and school documents</p>
      </section>

      {/* DOWNLOAD CARDS */}
      <section className="downloadsSection">
        <div className="downloadsGrid">
          {downloads.map((doc, index) => (
            <div className="downloadCard" key={index}>
              <h3>{doc.title}</h3>
              <p>{doc.description}</p>
              <a
                href={doc.file}
                download
                className="downloadButton"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
