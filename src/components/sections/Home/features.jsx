import React from "react";

function Features({ onNavClick }) {
  const workItems = [
    {
      title: "Leadership & Community Resilience",
      body:
        "We nurture, train and skill communities, youth and local leaders to strengthen people-led efforts in driving change from within. Our work amplifies the agency and creativity of youth, women, girls, migrants, displaced communities and civil society actors, enabling them to organise, advocate, and lead development pathways that reflect their needs and aspirations. These efforts build resilience that is sustainable and self-propelled.",
    },
    {
      title: "Sustainability",
      body:
        "We promote regenerative development and environmental justice rooted in local knowledge and collective stewardship. Our work supports equitable access to land, energy, food systems, and climate solutions that benefit both people and the planet. We recognise the interconnectedness of biodiversity, ecosystem health, and community wellbeing, and contribute to achieving the Sustainable Development Goals (SDGs) through inclusive and people-led environmental action.",
    },
    {
      title: "Human Mobility & Inclusion",
      body:
        "We work in solidarity with migrants, displaced people, and diaspora communities to expand leadership, inclusion, and rights-based development. Our initiatives support people to reclaim their voice, participate fully in community life, and lead solutions that foster equity.",
    },
    {
      title: "Policy & Advocacy",
      body:
        "We convene and advocate for people-centred policies and systemic shifts that prioritise dignity, access, participation and real action. We equip and facilitate communities to influence decisions, strengthen civic space, and shape narratives around justice and equity.",
    },
    {
      title: "Community Support",
      body:
        "We mobilise practical support and no-strings-attached solidarity-driven care during moments of urgency or despair. Our giving work is reciprocal and rooted in dignity, recognising that everyone has something to contribute. We especially focus on children, seniors, orphans, people with disabilities, street children and other community members living in precarious and disadvantaged situations.",
    },
  ];

  const impactItems = [
    "Trained over 500 youth and women in leadership, advocacy, climate action, and sustainable livelihoods, strengthening grassroots capacity for community-led development.",
    "Facilitated policy dialogues that generated community-led recommendations on climate change adaptation, human rights, and development, contributing to informed local and civil society engagement",
    "Expanded access to education for children affected by displacement, working in partnership with a youth-led NGO and educators to support learning continuity and inclusion.",
    "Collaborated on the implementation of an agroecological farming project, providing tailored training, access to high-quality seedlings, and irrigation support to promote climate-resilient agriculture.",
  ];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">

        {/* ================= OUR WORK ================= */}
        <h2 className="text-center text-3xl font-extrabold text-[#206333] sm:text-4xl">
          Our Work
        </h2>

        <div className="mx-auto mt-4 h-1 w-64 bg-[#FAD244] sm:w-[34rem]" />

        <div className="mt-14 grid grid-cols-1 gap-x-16 gap-y-14 md:grid-cols-3">
          {workItems.slice(0, 3).map((item) => (
            <div key={item.title}>
              <h3 className="text-xl font-extrabold text-emerald-700">
                <span className="mr-2">—</span>
                {item.title}
              </h3>
              <p className="mt-6 text-sm leading-7 text-slate-600">
                {item.body}
              </p>
            </div>
          ))}

          <div className="md:col-span-3">
            <div className="grid grid-cols-1 gap-x-16 gap-y-14 md:grid-cols-2 md:px-24">
              {workItems.slice(3).map((item) => (
                <div key={item.title}>
                  <h3 className="text-xl font-extrabold text-emerald-700">
                    <span className="mr-2">—</span>
                    {item.title}
                  </h3>
                  <p className="mt-6 text-sm leading-7 text-slate-600">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <button
            onClick={() => onNavClick?.("work")}
            className="rounded-full bg-blue-600 px-10 py-3 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-blue-700"
          >
            Read More
          </button>
        </div>

        {/* ================= OUR IMPACT ================= */}
        <div className="mt-28">
          <h2 className="text-center text-3xl font-extrabold text-[#206333] sm:text-4xl">
            Our Impact
          </h2>

          <div className="mx-auto mt-4 h-1 w-64 bg-[#FAD244] sm:w-[34rem]" />

          <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {impactItems.map((text, idx) => (
              <p
                key={idx}
                className="text-sm leading-7 text-slate-600"
              >
                {text}
              </p>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <button
              onClick={() => onNavClick?.("impact")}
              className="rounded-full bg-blue-600 px-10 py-3 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-blue-700"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
