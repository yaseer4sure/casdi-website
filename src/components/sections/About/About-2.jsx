import React from "react";
import storyImg from "../../../assets/images/outreach.jpg"; // replace with the exact image you want

export default function AboutSection() {
  const standFor = [
    {
      bold: "Community-centred approaches",
      rest: " approaches that respect local knowledge, mobilise resources, and strengthen locally led development.",
    },
    {
      bold: "Inclusive leadership",
      rest: " that values youth, women, displaced people, and other underrepresented voices.",
    },
    {
      bold: "Cross-sector partnerships",
      rest: " that connect government, civil society, and grassroots actors.",
    },
    {
      bold: "Integrated programming",
      rest: " across climate justice, environmental stewardship, civic participation, and skills development.",
    },
    {
      bold: "Solutions with purpose,",
      rest: " combining practical impact with long-term vision.",
    },
  ];

  return (
    <section id="about" className="w-full bg-white">
      {/* TOP: Our Story (image left, text right) */}
      <div className="mx-auto  px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left image */}
          <div className="flex justify-center">
            <div className="w-full h-auto max-w-[680px] overflow-hidden bg-white">
              <img
                src={storyImg}
                alt="CASDI story"
                className="h-[420px] w-full object-cover object-center sm:h-[520px]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right content */}
          <div className="max-w-4xl">
            <h3 className="text-lg font-extrabold text-[#206333]">Our Story</h3>

            <div className="mt-6 space-y-8 text-[15px] leading-7 text-slate-700 sm:text-base sm:leading-8">
              <p>
                Climate Alaramma Sustainable Development Initiative (CASDI) was born from a shared understanding 
                that many Nigerian communities are already living the impacts of climate change, often without 
                having the language, information, or power to fully understand its root causes. Across Northern 
                Nigeria and other vulnerable regions, people face the realities of climate (im)mobilities, 
                conflict and displacement, food insecurity, environmental degradation, and deepening poverty, 
                experiencing the consequences of a changing climate in their everyday lives.
              </p>

              <p>
                Through early community conversations and local consultations, we recognized a critical gap: while 
                communities were living the impacts, climate change was often framed as distant, technical, or 
                external to their realities. At the same time, these same communities hold rich indigenous knowledge, 
                environmental practices, and adaptive strategies that have sustained livelihoods and ecosystems across 
                generations, but which are increasingly overlooked or disconnected from conventional climate science 
                and policy responses
              </p>

              <div className="pt-2">
                <h4 className="text-lg font-extrabold text-[#206333]">
                  So how do we work?
                </h4>
                <p className="mt-4">
                  Our work is grounded in dialogue, collaboration, and actions
                  for long-term impact.
                </p>
                <p className="mt-6">
                  We partner with communities, public institutions, and civil
                  society to support resilience, sustainability, and
                  participation. Our approach is holistic and practical, linking
                  leadership with livelihoods, environment with society, and
                  knowledge with action. Beyond just stories!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM: What We Stand For (light blue block) */}
      <div className="w-full bg-sky-100">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#206333] sm:text-4xl">
            What We Stand For:
          </h2>

          <ul className="mt-8 space-y-6 text-[15px] leading-7 text-slate-700 sm:text-base sm:leading-8">
            {standFor.map((item, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-slate-500" />
                <p>
                  <span className="font-extrabold text-slate-900">
                    {item.bold}
                  </span>
                  {item.rest}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
