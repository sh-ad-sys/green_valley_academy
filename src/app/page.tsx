"use client";

import Link from "next/link";
import "../styles/home.css";
import HighlightCard from "../components/HighlightCard";
import { FaBook, FaChalkboardTeacher, FaBuilding, FaChartLine } from "react-icons/fa";

export default function Home() {
  return (
    <div className="homePage">

      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <div className="heroOverlay"></div>

        <div className="heroContent">
          <h1 className="heroTitle">
            Welcome <br /> to Our School
          </h1>

          <p className="heroSubtitle">
            Nurturing Excellence Through Education
          </p>

          <div className="heroButtons">
            <Link href="/admissions" className="heroButton">
              Admissions
            </Link>
            <Link href="/contact" className="heroButton secondary">
              Contact School
            </Link>
          </div>
        </div>
      </section>

      {/* ================= HIGHLIGHTS SECTION ================= */}
      <section className="welcomeSection">
        <h2 className="welcomeTitle text-3xl md:text-4xl font-semibold text-center mb-8">
          Our Highlights
        </h2>

        <div className="cardGrid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
          <HighlightCard
            title="Academics"
            icon={<FaBook className="text-4xl text-green-600" />}
            href="/academics"
          />
          <HighlightCard
            title="Discipline"
            icon={<FaChalkboardTeacher className="text-4xl text-blue-600" />}
            href="/discipline"
          />
          <HighlightCard
            title="Facilities"
            icon={<FaBuilding className="text-4xl text-yellow-600" />}
            href="/facilities"
          />
          <HighlightCard
            title="Performance"
            icon={<FaChartLine className="text-4xl text-red-600" />}
            href="/performance"
          />
        </div>
      </section>

    </div>
  );
}
