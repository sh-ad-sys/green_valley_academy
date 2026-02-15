"use client";

import "../../styles/news.css";

export default function NewsPage() {
  return (
    <div className="newsContainer">
      
      {/* HERO SECTION */}
      <section className="heroSection">
        <h1>News & Events</h1>
        <p>Stay updated with the latest happenings at Green Valley Academy</p>
      </section>

      {/* SCHOOL EVENTS */}
      <section className="section">
        <h2>Upcoming School Events</h2>
        <div className="cardGrid">
          <div className="card">
            <h3>Annual Sports Day</h3>
            <p>Date: 15th March 2026</p>
            <p>
              A full day of athletics, teamwork, and celebration of student excellence.
            </p>
          </div>

          <div className="card">
            <h3>Science & Innovation Fair</h3>
            <p>Date: 10th April 2026</p>
            <p>
              Students showcase creative scientific projects and innovations.
            </p>
          </div>

          <div className="card">
            <h3>Parents-Teachers Conference</h3>
            <p>Date: 5th May 2026</p>
            <p>
              Meeting to discuss student progress and academic performance.
            </p>
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENTS */}
      <section className="sectionAlt">
        <h2>Announcements</h2>
        <div className="listContainer">
          <div className="listItem">
            📢 New school uniforms available at the administration office.
          </div>
          <div className="listItem">
            📢 Library hours extended during exam preparation week.
          </div>
          <div className="listItem">
            📢 CBC training workshop for teachers scheduled next week.
          </div>
        </div>
      </section>

      {/* TERM DATES */}
      <section className="section">
        <h2>Term Dates – 2026 Academic Year</h2>
        <div className="termTable">
          <div className="termRow">
            <span>Term 1</span>
            <span>January 6 – April 3</span>
          </div>
          <div className="termRow">
            <span>Term 2</span>
            <span>May 4 – August 7</span>
          </div>
          <div className="termRow">
            <span>Term 3</span>
            <span>September 1 – November 20</span>
          </div>
        </div>
      </section>

      {/* EXAMS NOTICE */}
      <section className="sectionAlt">
        <h2>Examination Notices</h2>
        <div className="cardGrid">
          <div className="card">
            <h3>Mid-Term Exams</h3>
            <p>Start Date: 18th February 2026</p>
            <p>
              Students are advised to clear fee balances before sitting for exams.
            </p>
          </div>

          <div className="card">
            <h3>End-Term Exams</h3>
            <p>Start Date: 12th November 2026</p>
            <p>
              Timetables will be shared two weeks before the examination period.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
