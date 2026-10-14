import React from "react";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import heroImg from "../../../assets/images/climate-education.jpg"; // change to the School Clubs image you want

function WorkSection() {
  const navigate = useNavigate();
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" },
    }),
  };
  // main “our work” pillars
  const workItemsTop = [
     {
      title: "— Leadership & Community Resilience",
      body:
        "We nurture, train and skill communities, youth and local leaders to strengthen people-led efforts in driving change from within. Our work amplifies the agency and creativity of youth, women, girls, migrants, displaced communities and civil society actors, enabling them to organise, advocate, and lead development pathways that reflect their needs and aspirations. These efforts build resilience that is sustainable and self-propelled.",
    },
    {
      title: "— Sustainability",
      body:
        "We promote regenerative development and environmental justice rooted in local knowledge and collective stewardship. Our work supports equitable access to land, energy, food systems, and climate solutions that benefit both people and the planet. We recognise the interconnectedness of biodiversity, ecosystem health, and community wellbeing, and contribute to achieving the Sustainable Development Goals (SDGs) through inclusive and people-led environmental action.",
    },
    {
      title: "— Human Mobility & Inclusion",
      body:
        "We work in solidarity with migrants, displaced people, and diaspora communities to expand leadership, inclusion, and rights-based development. Our initiatives support people to reclaim their voice, participate fully in community life, and lead solutions that foster equity.",
    },
  ];

  const workItemsBottom = [
    {
      title: "— Policy & Advocacy",
      body:
        "We convene and advocate for people-centred policies and systemic shifts that prioritise dignity, access, participation and real action. We equip and facilitate communities to influence decisions, strengthen civic space, and shape narratives around justice and equity.",
    },
    {
      title: "— Community Support",
      body:
        "We mobilise practical support and no-strings-attached solidarity-driven care during moments of urgency or despair. Our giving work is reciprocal and rooted in dignity, recognising that everyone has something to contribute. We especially focus on children, seniors, orphans, people with disabilities, street children and other community members living in precarious and disadvantaged situations.",
    },
  ];

  const impactItems = [
    "Trained over 500 youth and women in leadership, advocacy, climate action, and sustainable livelihoods, strengthening grassroots capacity for community-led development.",
    "Facilitated policy dialogues that generated community-led recommendations on climate change adaptation, human rights, and development, contributing to informed local and civil society engagement.",
    "Expanded access to education for children affected by displacement, working in partnership with a youth-led NGO and educators to support learning continuity and inclusion.",
    "Collaborated on the implementation of an agroecological farming project, providing tailored training, access to high-quality seedlings, and irrigation support to promote climate-resilient agriculture.",
  ];

  const pipelineProjects = [
    {
      title: "Indigenous Knowledge Archive & Intergenerational Learning Project – Nigeria",
      body: "This project aims to document, preserve, and amplify indigenous knowledge systems related to climate adaptation, agriculture, water management, mobility, and ecosystem stewardship. Working with elders, women, youth, and traditional leaders, CASDI will support intergenerational knowledge exchange through storytelling, participatory documentation, and local-language platforms.",
    },
    {
      title: "Youth for Renewable Energy & Just Transition – Nigeria",
      body: "The Youth for Renewable Energy & Just Transition Initiative engages young people (aged 18–35) with skills, leadership opportunities, and practical experience in the renewable energy sector. Focusing on solar energy and productive uses, the project links clean energy access with livelihoods, community services, and climate justice.",
    },
    {
      title: "Climate Mobility, Seasonal Migration & Peacebuilding Initiative – Northern Nigeria",
      body: "This initiative addresses the growing link between climate change, seasonal migration, and farmer–herder conflicts across Northern Nigeria. As changing rainfall patterns, land degradation, and shrinking grazing routes disrupt traditional mobility systems, tensions over land and water resources have intensified.",
    },
  ];

  return (
    <section id="work" className="w-full bg-[#F6FBFF]">
      {/* OUR WORK */}
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 lg:px-8">
        {/* Heading */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-[#206333] sm:text-4xl md:text-5xl">
            Our Work
          </h2>
          <div className="mt-4 mb-14 h-1 w-3xl max-w-full bg-[#FAD244] mx-auto" />
        </Motion.div>

        {/* Top row: 3 columns */}
        <div className="grid gap-12 md:grid-cols-3">
          {workItemsTop.map((item, idx) => (
            <Motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={idx}
              className="text-left text-slate-800"
            >
              <h3 className="text-2xl font-extrabold text-emerald-700 mb-4 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed sm:text-base">
                {item.body}
              </p>
            </Motion.div>
          ))}
        </div>

        {/* Bottom row: 2 columns */}
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {workItemsBottom.map((item, idx) => (
            <Motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={idx}
              className="text-left text-slate-800"
            >
              <h3 className="text-2xl font-extrabold text-emerald-700 mb-4 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed sm:text-base">
                {item.body}
              </p>
            </Motion.div>
          ))}
        </div>

        {/* Read more button under “Our Work” */}
        <div className="mt-16 flex justify-center">
          <button onClick={() => navigate("/work-programs")} className="button button-green">
            READ MORE
          </button>
        </div>
      </div>

      {/* OUR IMPACT */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-[#206333] sm:text-4xl">
              Our Impact
            </h2>
            <div className="mt-4 mb-14 h-1 w-3xl max-w-full bg-[#FAD244] mx-auto" />
          </Motion.div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {impactItems.map((text, idx) => (
              <Motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={idx}
                className="flex h-full flex-col items-center text-center px-2"
              >
                <div className="flex flex-1 flex-col items-center gap-3">
                  <div className="text-7xl sm:text-8xl leading-none text-[#206333] -mb-10">
                    &rdquo;
                  </div>
                  <p className="text-sm leading-relaxed text-slate-800 sm:text-base">
                    {text}
                  </p>
                </div>
                <button onClick={() => navigate("/work-projects")} className="button button-green mt-auto">
                  READ MORE
                </button>
              </Motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* PIPELINE PROJECTS – cards on soft gradient */}
      <div className="bg-gradient-to-b from-white via-[#f2fbf4] to-[#e7f6ee] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-[#206333] sm:text-4xl">
              Pipeline Projects
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {pipelineProjects.map((project, idx) => (
              <Motion.div
                key={project.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={idx}
                className="flex h-full flex-col text-left text-slate-800"
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-extrabold text-emerald-700 mb-4 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed sm:text-base">
                    {project.body}
                  </p>
                </div>
                <button onClick={() => navigate("/work-research")} className="button button-green mt-6">
                  READ MORE
                </button>
              </Motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FULL-WIDTH SCHOOL ENVIRONMENTAL CLUBS BANNER */}
      <div className="relative w-full overflow-hidden bg-emerald-900">
        {/* background image */}
        <img
          src={heroImg}
          alt="School Environmental Clubs Program"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* soft colour overlay so text is readable */}
        <div className="absolute inset-0 bg-emerald-900/40" />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:py-24 lg:px-8">
          <div className="w-full lg:w-1/2" />
          <div className="mt-10 w-full bg-emerald-900/70 p-6 rounded-2xl text-left text-white shadow-xl lg:mt-0 lg:w-1/2 lg:ml-8">
            <h3 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              School Environmental Clubs & Climate Leadership Programme – Northern Nigeria
            </h3>
            <p className="mt-6 text-sm leading-relaxed sm:text-base text-white/90">
              This programme focuses on establishing and strengthening environmental 
              clubs in primary and secondary schools, nurturing climate awareness, 
              environmental stewardship, and leadership among young people
            </p>
            <button onClick={() => navigate("/work-programs")} className="button button-yellow mt-8">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;


