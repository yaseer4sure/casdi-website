import React, { useState } from "react";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";

import portrait1 from "../../../assets/images/hero-bg-1.jpg";
import portrait2 from "../../../assets/images/outreach.jpg";
import portrait3 from "../../../assets/images/hero-bg-2.jpg";
import portrait4 from "../../../assets/images/climateEducation.jpg";
import portrait5 from "../../../assets/images/tree-planting.jpg";
import portrait6 from "../../../assets/images/smook.jpg";

const teamMembers = [
  {
    name: "Ibrahim Muhammad Shamsuddin",
    role: "Strategic Lead / Founder",
    bio: "Leads CASDI's strategy and partnerships, aligning climate resilience, community leadership, and sustainable development across all programs.",
    img: portrait1,
    linkedin: "https://www.linkedin.com/in/ibrahim-muhammad-shamsuddin",
  },
  {
    name: "Zainab Baba Aliyu",
    role: "Communications Officer",
    bio: "Shapes CASDI messaging and storytelling, managing media, publications, and campaigns that amplify community impact.",
    img: portrait2,
    linkedin: "https://www.linkedin.com/in/zainab-baba-aliyu",
  },
  {
    name: "Yaseer S. Mikail",
    role: "IT and Innovation Officer",
    bio: "Designs and maintains CASDI's digital tools and data systems, ensuring reliability, security, and innovative solutions for program delivery.",
    img: portrait3,
    linkedin: "https://www.linkedin.com/in/yaseer-mikail",
  },
  {
    name: "Imrana Muhammad Nata'alah",
    role: "Admin. And Operations",
    bio: "Oversees operations, logistics, and vendor coordination to keep projects on schedule, compliant, and well supported.",
    img: portrait4,
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Rofiat Abubakar",
    role: "Social Media Manager",
    bio: "Leads social channels and content, growing community engagement and spotlighting CASDI stories and results.",
    img: portrait5,
    linkedin: "https://www.linkedin.com/in/rofiat-abubakar",
  },
  {
    name: "[placeholder name]",
    role: "Program Officer",
    bio: "Supports program design and delivery, coordinating activities with communities and partners to ensure quality execution.",
    img: portrait6,
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "[placeholder name]",
    role: "Program Assistant",
    bio: "Assists with field logistics, documentation, and reporting to keep projects running smoothly day to day.",
    img: portrait4,
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "[placeholder name]",
    role: "Gender and Social Protection Officer",
    bio: "Champions gender equity and safeguarding, integrating inclusive practices and protections across all programs.",
    img: portrait5,
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "[placeholder name]",
    role: "Community Engagement Officer",
    bio: "Builds relationships with communities and stakeholders, gathering feedback and mobilizing participation for sustained impact.",
    img: portrait6,
    linkedin: "https://www.linkedin.com",
  },
];

function OurTeam() {
  const [showAll, setShowAll] = useState(false);
  const visibleMembers = showAll ? teamMembers : teamMembers.slice(0, 3);

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
    }),
  };

  return (
    <section id="projects" className="w-full bg-[#e8f8ee] py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-emerald-800 sm:text-5xl">Our Leadership</h2>
          <p className="mt-3 text-base text-slate-700 sm:text-lg text-start">
            Climate Alaramma Sustainable Development Initiative (CASDI) is led by a committed team
            of youth leaders, community organisers, facilitators, and practitioners rooted in the
            communities we serve. We work side by side with communities, combining local knowledge,
            lived experience, and practical expertise to deliver climate action that is inclusive,
            grounded, and lasting. <br />
            <br />
            Our team brings together diverse skills across climate resilience, environmental
            education, policy engagement, and community mobilisation—guided by a shared commitment
            to local knowledge exchange, collective leadership, and community action.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={idx}
              className="flex h-full flex-col gap-4 rounded-2xl bg-white p-6 shadow-md shadow-emerald-100"
            >
              <div className="flex items-center gap-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="h-20 w-20 rounded-full object-cover"
                />
                <div className="flex flex-1 items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">{member.name}</h3>
                    <p className="text-sm font-semibold text-[#179e86]">{member.role}</p>
                  </div>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="rounded-full p-1 text-[#0a66c2] transition hover:bg-slate-100"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-base leading-relaxed text-slate-800">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="rounded-full bg-[#0a64ff] px-8 py-3 text-sm font-semibold text-white shadow hover:bg-[#0550d8]"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default OurTeam;
