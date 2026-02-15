"use client";

import Image from "next/image";
import "../../styles/facilities.css";

// Sample facility images
const facilities = [
  { title: "Library", src: "/facilities/library.jpg" },
  { title: "Science Lab", src: "/facilities/science_lab.jpg" },
  { title: "Computer Lab", src: "/facilities/computer_lab.jpg" },
  { title: "Sports Ground", src: "/facilities/sports_ground.jpg" },
  { title: "Auditorium", src: "/facilities/auditorium.jpg" },
  { title: "Art & Music Studio", src: "/facilities/art_music_studio.jpg" },
];

export default function FacilitiesPage() {
  return (
    <div className="facilitiesPage">

      {/* HERO SECTION */}
      <section className="facilitiesHero">
        <div className="heroOverlay"></div>
        <div className="heroContent">
          <h1 className="heroTitle">Our Facilities</h1>
          <p className="heroSubtitle">
            Modern and well-equipped spaces to support learning and development
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="facilitiesIntro">
        <h2 className="sectionTitle">A Glimpse of Our Campus</h2>
        <p className="sectionText">
          Green Valley Academy provides state-of-the-art facilities to support
          both academic excellence and co-curricular development. Our campus
          is designed to create an engaging, safe, and inspiring environment
          for all students.
        </p>
      </section>

      {/* FACILITIES GALLERY */}
      <section className="facilitiesGallery">
        <div className="galleryGrid">
          {facilities.map((facility, index) => (
            <div className="galleryCard" key={index}>
              <div className="imageWrapper">
                <Image
                  src={facility.src}
                  alt={facility.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="facilityImage"
                  priority={index < 3} // prioritize first few images
                />
              </div>
              <h3 className="facilityTitle">{facility.title}</h3>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
