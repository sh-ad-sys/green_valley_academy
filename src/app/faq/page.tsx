"use client";

import { useState } from "react";
import "../../styles/faq.css";

export default function FAQPage() {
  const faqs = [
    {
      question: "How do I apply for admission?",
      answer:
        "You can apply for admission by downloading the admission form from the Downloads page, filling it, and submitting it to the school office or via email.",
    },
    {
      question: "What curriculum does the school follow?",
      answer:
        "Green Valley Academy follows the CBC curriculum for all classes, integrating both academic excellence and co-curricular activities.",
    },
    {
      question: "Are there boarding facilities available?",
      answer:
        "Yes, we have boarding facilities for students who live far from the school, with safe and comfortable accommodations.",
    },
    {
      question: "How can I contact the principal’s office?",
      answer:
        "You can contact the principal’s office via the Staff Mail page or by calling the school office during working hours.",
    },
    {
      question: "What co-curricular activities are offered?",
      answer:
        "We offer a wide range of co-curricular activities including sports, arts, music, drama, debate, and community service.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqPage">

      {/* HERO SECTION */}
      <section className="faqHero">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common queries about Green Valley Academy</p>
      </section>

      {/* FAQ SECTION */}
      <section className="faqSection">
        <div className="faqContainer">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faqItem ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faqQuestion">
                {faq.question}
                <span className="faqToggle">{openIndex === index ? "-" : "+"}</span>
              </div>
              {openIndex === index && (
                <div className="faqAnswer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
