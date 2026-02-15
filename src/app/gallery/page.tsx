"use client";
import Image from "next/image";

import { useState } from "react";
import "../../styles/gallery.css";

const images = [
  { src: "/gallery1.jpg", category: "Events", title: "Science Fair 2026" },
  { src: "/gallery2.jpg", category: "Academics", title: "Classroom Session" },
  { src: "/gallery3.jpg", category: "Sports", title: "Annual Sports Day" },
  { src: "/gallery4.jpg", category: "Campus", title: "School Main Block" },
  { src: "/gallery5.jpg", category: "Events", title: "Cultural Day" },
  { src: "/gallery6.jpg", category: "Academics", title: "ICT Lab" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");

  const filteredImages =
    filter === "All"
      ? images
      : images.filter((img) => img.category === filter);

  return (
    <div className="galleryPage">
      {/* HERO */}
      <section className="galleryHero">
        <h1>Our Gallery</h1>
        <p>Capturing moments of excellence, growth, and achievement.</p>
      </section>

      {/* FILTER BUTTONS */}
      <div className="filterContainer">
        {["All", "Events", "Academics", "Sports", "Campus"].map((cat) => (
          <button
            key={cat}
            className={`filterButton ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* IMAGE GRID */}
      <section className="galleryGrid">
        {filteredImages.map((img, index) => (
          <div key={index} className="galleryCard">
            <Image
  src={img.src}
  alt={img.title}
  fill
  sizes="(max-width: 768px) 100vw, 33vw"
  className="galleryImage"
/>

            <div className="overlay">
              <h3>{img.title}</h3>
              <p>{img.category}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
