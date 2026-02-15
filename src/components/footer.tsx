"use client";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">

        {/* ================= LEFT COLUMN: About / Contact ================= */}
        <div className="footerCol">
          <h3 className="footerTitle">Green Valley Academy</h3>
          <p className="footerText">
            Excellence in education and character development. Nurturing tomorrow&apos;s leaders today.
          </p>
          <p className="footerText">
            123 Main Street, Nairobi, Kenya<br/>
            Email: info@greenvalley.ac.ke<br/>
            Phone: +254 700 123 456
          </p>
          <div className="footerSocials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* ================= MIDDLE COLUMN: Useful Links ================= */}
        <div className="footerCol">
          <h3 className="footerTitle">Useful Links</h3>
          <ul className="footerList">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/admissions">Admissions</Link></li>
            <li><Link href="/academics">Academics</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* ================= RIGHT COLUMN: Resource Centre ================= */}
        <div className="footerCol">
          <h3 className="footerTitle">Resource Centre</h3>
          <ul className="footerList">
            <li><Link href="/news">News & Updates</Link></li>
            <li><Link href="/downloads">Downloads</Link></li>
            <li><Link href="/policies">Policies</Link></li>
            <li><Link href="/faq">FAQs</Link></li>
          </ul>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="footerBottom">
        &copy; {new Date().getFullYear()} Green Valley Academy. All rights reserved.
      </div>
    </footer>
  );
}
