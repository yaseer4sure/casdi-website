import React from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";

import riverImg from "../../../assets/images/flood.jpg";
import disasterImg from "../../../assets/images/pic-3.jpeg";
import renewableImg from "../../../assets/images/sustainableApiculus.jpg";
import clubsImg from "../../../assets/images/climateEducation.jpg";
import Knowledge from "../../../assets/images/capacity-b.JPG";

const projects = [
  {
    title: "Grassroots Climate and Disaster Action – Northern Nigeria",
    body:
      "This project focuses on strengthening community preparedness and resilience to climate-related disasters, including flooding, drought, and extreme heat. CASDI will support communities to develop localized disaster preparedness and response strategies, drawing on indigenous risk knowledge and accessible climate information.",
    image: riverImg,
  },
  {
    title: "School Environmental Clubs and Climate Leadership Programme – Northern Nigeria",
    body:
      "This programme focuses on establishing and strengthening environmental clubs in primary and secondary schools, nurturing climate awareness, environmental stewardship, and leadership among young people.",
    image: disasterImg,
  },
  {
    title: "Youth for Renewable Energy and Just Transition – Nigeria",
    body:
      "The Youth for Renewable Energy & Just Transition Initiative engages young people (aged 18–35) with skills, leadership opportunities, and practical experience in the renewable energy sector. Focusing on solar energy and productive uses, the project links clean energy access with livelihoods, community services, and climate justice.",
    image: renewableImg,
  },
  {
    title: "Climate Mobility, Seasonal Migration and Peace-building Initiative – Northern Nigeria",
    body:
      "This initiative addresses the growing link between climate change, seasonal migration, and farmer–herder conflicts across Northern Nigeria. As changing rainfall patterns, land degradation, and shrinking grazing routes disrupt traditional mobility systems, tensions over land and water resources have intensified.",
    image: clubsImg,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" },
  }),
};

function Pipelineprojects() {
  return (
    <section id="pipeline-projects" className="w-full bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {projects.map((project, idx) => (
            <Motion.div
              key={project.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={idx}
              className="flex flex-col items-center text-start gap-6"
            >
              <div className="w-full overflow-hidden rounded-sm shadow-sm">
                <img src={project.image} alt={project.title} className="h-80 w-full object-cover" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-extrabold text-[#206333] leading-tight">{project.title}</h3>
                <p className="text-base leading-relaxed text-slate-800">{project.body}</p>
              </div>
              <Link to="/contact" className="button button-green">
                Discuss this project
              </Link>
            </Motion.div>
          ))}
        </div>

        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 flex flex-col items-center text-start gap-6 lg:w-1/2"
        >
          <div className="w-full overflow-hidden rounded-sm shadow-sm">
            <img src={Knowledge} alt="Indigenous Knowledge Archive" className="h-96 w-full object-cover" />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold text-[#206333] leading-tight">
              Indigenous Knowledge Archive and Intergenerational Learning Project – Nigeria
            </h3>
            <p className="text-base leading-relaxed text-slate-800">
              This project aims to document, preserve, and amplify indigenous knowledge systems related to climate adaptation,
              agriculture, water management, mobility, and ecosystem stewardship. Working with elders, women, youth, and
              traditional leaders, CASDI will support intergenerational knowledge exchange through storytelling, participatory
              documentation, and local-language platforms.
              <br />
              <br />
              The archive will strengthen community identity, inform climate action, and contribute African-led knowledge to
              national and global climate discourse.
            </p>
          </div>
          <Link to="/contact" className="button button-green">
            Discuss this project
          </Link>
        </Motion.div>
      </div>

      <div className="bg-[#e7f2fb] py-6" />
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-5xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 text-center"
      >
        <h3 className="text-3xl font-extrabold text-[#206333] sm:text-4xl">Support Us</h3>
        <div className="mt-4 h-1 w-40 bg-[#FAD244] mx-auto" />
        <p className="mt-8 text-lg italic leading-relaxed text-slate-800">
          Want to be part of the change? You can support our work by donating, volunteering your skills and time, or partnering
          with us to amplify our impact. Every contribution helps us expand our reach and create meaningful change.
        </p>
        <Link to="/get-involved?tab=donates" className="button button-green mt-10">
          Support our work
        </Link>
      </Motion.div>
    </section>
  );
}

export default Pipelineprojects;

