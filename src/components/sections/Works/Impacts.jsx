import React from "react";
import { motion } from "framer-motion";

import heroImg from "../../../assets/images/capacity-b.JPG";
import galleryLeft from "../../../assets/images/climate-education.jpg";
import galleryRight from "../../../assets/images/pic-2.jpeg";

const achievements = [
  "Trained over 500 youth and women in leadership, advocacy, climate action, and sustainable livelihoods, strengthening grassroots capacity for community-led development.",
  "Facilitated policy dialogues that generated community-led recommendations on climate change adaptation, human rights, and development, contributing to informed local and civil society engagement.",
  "Expanded access to education for children affected by displacement, working in partnership with a youth-led NGO and educators to support learning continuity and inclusion.",
  "Collaborated on the implementation of an agroecological farming project, providing tailored training, access to high-quality seedlings, and irrigation support to promote climate-resilient agriculture.",
];

const projectHighlights = [
  "Supported a just transition to cleaner household energy by implementing the Clean Cooking in Grassroots Communities Project, training 50 women and girls in biomass briquette production and providing starter packs.",
  "Enabled household-level adoption of clean cooking solutions by supporting 50 households in the Zabi community to transition to cleaner cooking practices.",
  "Expanded green livelihood opportunities for women by training 50 women in sustainable apiculture and providing starter packs to support income generation.",
  "Created youth-led learning and organizing spaces through a series of youth hangouts on climate action, strengthening awareness, leadership, and collective engagement.",
];

const policyHighlights = [
  "Amplified grassroots voices in global climate spaces by co-hosting two COP side events, bringing community perspectives into international dialogue.",
  "Strengthened learning and collaboration through participation in COP27, COP28, and COP30, engaging with civil society networks and policy actors.",
  "Contributed to national climate policy influence by working alongside civil society organizations to advance people-centred climate and environmental policy in Nigeria.",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" },
  }),
};

function Impacts() {
  return (
    <section className="w-full bg-white text-slate-900">
      {/* Hero with overlay */}
      <motion.div
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative isolate overflow-hidden"
      >
        <img
          src={heroImg}
          alt="Community impact"
          className="h-[70vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <p className="max-w-5xl text-center text-xl font-medium italic leading-relaxed text-white sm:text-2xl md:text-3xl">
            Our impact is measured not only by activities delivered, but by the power of people to lead, organize, and 
            influence systems. We focus on building leadership, strengthening community agency, and shaping policies and 
            partnerships that advance justice, resilience, and long-term transformation.
          </p>
        </div>
      </motion.div>

      {/* Key achievements */}
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-[#206333] sm:text-4xl">Key Achievements</h2>
          <div className="mt-4 h-1 w-90 bg-[#FAD244] mx-auto" />
        </motion.div>

        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {achievements.map((text, idx) => (
            <motion.div
              key={text}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={idx}
              className="flex flex-1 flex-col items-center gap-4"
            >
              <div className="text-8xl -mb-13 font-bold text-[#206333]">&rdquo;</div>
              <p className="text-base leading-relaxed text-slate-800">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="bg-[#e7f2fb] py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto flex max-w-6xl flex-col gap-0 px-4 sm:px-6 lg:px-8 lg:flex-row"
        >
          <div className="flex-1 overflow-hidden rounded-md shadow">
            <img src={galleryLeft} alt="Students planting trees" className="h-full w-full object-cover" />
          </div>
          <div className="flex-1 overflow-hidden rounded-md shadow">
            <img src={galleryRight} alt="Youth watering plants" className="h-full w-full object-cover" />
          </div>
        </motion.div>
      </div>

      {/* Project highlights */}
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-[#206333] sm:text-4xl">Community Climate Action &amp; Green Livelihoods</h2>
        </motion.div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {projectHighlights.map((text, idx) => (
            <motion.div
              key={text}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={idx}
              className="flex flex-1 flex-col items-center  gap-4"
            >
              <div className="text-8xl font-bold -mb-10 text-[#206333]">&rdquo;</div>
              <p className="text-base leading-relaxed text-slate-800">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Policy & Global Engagement */}
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-[#206333] sm:text-4xl">Policy &amp; Global Engagement</h2>
        </motion.div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {policyHighlights.map((text, idx) => (
            <motion.div
              key={text}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={idx}
              className="flex flex-1 flex-col items-center gap-4"
            >
              <div className="text-8xl font-bold -mb-10 text-[#206333]">&rdquo;</div>
              <p className="text-base leading-relaxed text-slate-800">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Numbers section */}
      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-[#206333] sm:text-4xl">Numbers Speak</h2>
          <div className="mt-4 h-1 w-90 bg-[#FAD244] mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 border border-slate-700 px-6 py-10 sm:px-10"
        >
          <p className="text-center text-5xl font-bold text-[#0a9a7f]">2000+</p>
          <p className="mt-6 text-center text-lg leading-relaxed text-slate-800">
            Number of youth, women and grassroots community members trained in leadership, advocacy, and sustainable
            livelihoods.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Impacts;
