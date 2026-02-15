"use client";

import "../../styles/staff.css";

export default function PrincipalEmailPage() {
  const principal = {
    name: "Green Valley Academy",
    email: "info@greenvalleyacademy.co.ke",
  };

  return (
    <div className="staffEmailPage">

      {/* HERO SECTION */}
      <section className="staffEmailHero">
        <h1>Contact the Principal</h1>
        <p>Click the email below to write directly to the Principal.</p>
      </section>

      {/* PRINCIPAL EMAIL */}
      <section className="staffEmailContainer">
        <div className="staffEmailCard">
          <span className="staffName">{principal.name}</span>
          <a href={`mailto:${principal.email}`} className="staffEmailLink">
            {principal.email}
          </a>
        </div>
      </section>

    </div>
  );
}
