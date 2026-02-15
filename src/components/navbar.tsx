"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import "../styles/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Principal email
  const principalEmail = "john.mwangi@greenvalley.ac.ke";

  return (
    <header className="navbar">
      <div className="navContainer">

        {/* LEFT SIDE */}
        <div className="navLeft">
          <Image
            src="/logo.png"
            alt="School Logo"
            width={55}
            height={55}
            className="logo"
          />
          <span className="schoolName">Green Valley Academy</span>
        </div>

        {/* RIGHT SIDE */}
        <div className="navRight">
          <nav className="navLinks">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/academics">Academics</Link>
            <Link href="/admissions">Admissions</Link>
            <Link href="/news">News & Events</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact Us</Link>
          </nav>

          {/* Staff Mail Button */}
          <a
            href={`mailto:${principalEmail}`}
            className="joinBtn staffMailBtn"
          >
            Staff Mail
          </a>

          {/* HAMBURGER */}
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <div className={`mobileMenu ${isOpen ? "show" : ""}`}>
        <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
        <Link href="/academics" onClick={() => setIsOpen(false)}>Academics</Link>
        <Link href="/admissions" onClick={() => setIsOpen(false)}>Admissions</Link>
        <Link href="/news" onClick={() => setIsOpen(false)}>News & Events</Link>
        <Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
        <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
        <a
          href={`mailto:${principalEmail}`}
          className="joinBtn staffMailBtn"
          onClick={() => setIsOpen(false)}
        >
          Staff Mail
        </a>
      </div>
    </header>
  );
}
