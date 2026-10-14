import React from "react";

import dialogueIcon from "../../../assets/images/Icons/Dialogue & Listening.svg";
import leadershipIcon from "../../../assets/images/Icons/Inclusive, Community-Led Leadership.svg";
import solidarityIcon from "../../../assets/images/Icons/Solidarity & Collective Action.svg";
import fairnessIcon from "../../../assets/images/Icons/Fairness.svg";

import missionImg from "../../../assets/images/hero-bg-2.jpg"; // top right image
import visionImg from "../../../assets/images/climateEducation.jpg"; // bottom right image

function AboutSection() {
  const principles = [
    {
      title: "Principle 1: We are committed to dialogue.",
      icon: dialogueIcon,
      body: [
        "At CASDI, dialogue is not a one-off consultation but a continuous practice rooted in listening with humility, especially in Northern Nigeria where communities have experienced exclusion, conflict, and broken promises from external actors. We recognize that traditional leaders, women, farmers, pastoralists, and youth possess deep contextual knowledge shaped by history, culture, and lived experience. In regions affected by climate stress, displacement, and insecurity, meaningful dialogue builds trust, reduces misinformation, and creates space for shared problem-solving.",
        "We prioritizes community forums, informal conversations, and local-language engagement to ensure voices are not only heard but influence decisions. Through listening first, we avoid imposing solutions and instead co-create responses that reflect community realities, cultural norms, and priorities, laying the foundation for lasting climate resilience and social cohesion.",
      ],
    },
    {
      title: "Principle 2: We are committed to inclusive leadership.",
      icon: leadershipIcon,
      body: [
        "Inclusive leadership is central to CASDI’s work, where power and decision-making have traditionally been concentrated among a few actors, often excluding women, youth, and persons with disabilities. CASDI promotes leadership that is shared, representative, and rooted in community structures, recognizing that resilience grows when leadership reflects the diversity of the community.",
        "We intentionally create pathways for young people, women, and marginalized groups to lead climate and environmental action through capacity building, mentorship, and safe spaces for participation. Inclusive leadership also means respecting traditional governance systems while supporting intergenerational collaboration. Through strengthening local leadership from within, CASDI ensures that climate solutions are owned by communities, culturally legitimate, and capable of sustaining impact beyond project cycles.",
      ],
    },
    {
      title: "Principle 3: We are committed to practical solidarity.",
      icon: solidarityIcon,
      body: [
        "Our work is grounded in solidarity, standing with communities, not above them particularly in Nigeria, where climate shocks, poverty, and insecurity have weakened social systems and trust. We understand that no single group or individual can address climate and ecological challenges alone. Solidarity means building alliances across communities, generations, and sectors, and recognizing shared struggles and responsibilities.",
        "We fosters collective action by strengthening community networks, supporting mutual aid, and encouraging collaboration between farmers, pastoralists, youth groups, women’s associations, and traditional institutions. In contexts where division and competition over scarce resources are common, solidarity helps rebuild social cohesion and collective resilience. Through this principle, CASDI promotes cooperation as a powerful tool for climate action and peacebuilding.",
      ],
    },
    {
      title: "Principle 4: We are committed to fairness and accountability.",
      icon: fairnessIcon,
      body: [
        "In Nigeria, where communities have often experienced neglect, corruption, or unfulfilled development promises, fairness and accountability are essential for building trust. CASDI is committed to ethical practice, transparency in decision-making, and accountability to the communities we serve. This means clearly communicating objectives, roles, and resources, and ensuring communities are informed participants rather than passive recipients. Fairness also involves recognizing power imbalances and actively working to ensure equitable access to information, opportunities, and benefits especially for women, youth, and marginalized groups.",
        "We promotes community-led monitoring, feedback mechanisms, and shared responsibility to ensure interventions remain responsive and credible. Accountability, for us, is not only upward to partners and donors, but downward to communities and future generations.",
      ],
    },
  ];

  return (
    <section id="about" className="w-full bg-white">
      {/* MISSION + VISION (left text, right stacked images) */}
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        {/* Mission */}
        <div className="mb-16 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-[#206333] sm:text-5xl">
              Our Mission
            </h2>
            <div className="mt-4 h-1 w-full max-w-[520px] bg-[#FAD244]" />
            <p className="mt-7 max-w-[520px] text-2xl font-extrabold leading-snug text-slate-900 sm:text-[1.75rem]">
              To promote environmental consciousness, empower grassroots and vulnerable communities with 
               education on clean environments and climate adaptation, and advocate for sustainable policies
               that support Nigeria’s climate goals and energy transition.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-sm">
            <img
              src={missionImg}
              alt="CASDI mission activity"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Vision */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-[#206333] sm:text-5xl">
              Our Vision
            </h2>
            <div className="mt-4 h-1 w-full max-w-[520px] bg-[#FAD244]" />
            <p className="mt-7 max-w-[520px] text-2xl font-extrabold leading-snug text-slate-900 sm:text-[1.75rem]">
              A climate-resilient and environmentally just Nigeria where empowered communities rooted in local 
              knowledge and lived experience thrive in clean,healthy ecosystems and actively shape the country’s
              climate and sustainable development pathway.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-sm">
            <img
              src={visionImg}
              alt="CASDI vision activity"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* QUOTE LINE */}
        <p className="mt-14 text-left text-2xl font-semibold italic text-emerald-700 sm:text-3xl">
          Transformative change starts locally, through collective action, everyday practice, and shared purpose.
        </p>
      </div>

      {/* PRINCIPLES */}
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <h3 className="text-center text-4xl font-extrabold tracking-tight text-[#206333] sm:text-5xl">
          Our Principles
        </h3>

        <div className="mt-10 grid gap-x-14 gap-y-14 md:grid-cols-2 md:gap-y-16">
          {principles.map(({ title, icon, body }) => (
            <div key={title} className="grid grid-cols-[56px,1fr] gap-2">
              {/* icon */}
              <div className="pt-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-800 ">
                  <img src={icon} alt={title} className="h-12 w-12" />
                </div>
              </div>

              {/* text */}
              <div>
                <h4 className="text-xl font-extrabold text-emerald-700 sm:text-2xl">
                  {title}
                </h4>

                <div className="mt-4 space-y-6 text-[15px] leading-7 text-slate-700 sm:text-base">
                  {body.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
