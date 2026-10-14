import React from "react";
import heroImg from "../../../assets/images/outreach.jpg"; // 👈 swap to your exact banner image

function Approach() {
  return (
    <section id="about" className="w-full bg-white">
      {/* PAGE TITLE (white top area like screenshot) */}
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-[#206333] text-center sm:text-4xl">
          Our approach
        </h1>
      </div>

      {/* HERO BANNER (image strip with text on dark overlay) */}
      <div className="relative mt-6 w-full overflow-hidden">
        <div className="relative h-[320px] w-full sm:h-[380px] lg:h-[420px]">
          <img
            src={heroImg}
            alt="CASDI approach"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/55" />

          {/* text block (left aligned) */}
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
              <p className="max-w-3xl text-base leading-relaxed text-white/95 sm:text-lg">
                We ground our climate and environmental work in indigenous and local knowledge,
                combining community wisdom with context-appropriate scientific tools to deliver
                solutions that are culturally grounded, inclusive, and sustainable. Rejecting 
                top-down models, we work in close partnership with communities—especially women,
                youth, and other frontline groups—placing local leadership at the center of design,
                implementation, and accountability.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BODY CONTENT */}
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Section 1 */}
        <div className="border-t border-slate-200 pt-10">
          <h2 className="text-2xl font-extrabold tracking-tight text-emerald-700 sm:text-3xl">
            Indigenous Knowledge First
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-slate-700">
            Our work begins with the recognition that communities already hold valuable 
            knowledge for understanding and responding to climate and environmental challenges. 
            We prioritize indigenous and local knowledge systems by working closely with traditional 
            leaders, smallholder farmers, women’s groups, and youth to identify existing practices, 
            coping strategies, and environmental stewardship methods.
          </p>
        </div>

        {/* Paragraph block like screenshot */}
        <div className="mt-5 max-w-4xl">
          <p className="text-base leading-relaxed text-slate-700">
            Rather than replacing local knowledge, we integrates it with context-appropriate 
            scientific tools and climate information, ensuring solutions are both culturally 
            grounded and technically sound. This approach builds trust, strengthens relevance, 
            and increases the likelihood that interventions are adopted and sustained over time. 
            By placing indigenous knowledge first, CASDI helps ensure that climate solutions are 
            rooted in lived realities and community wisdom.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mt-14">
          <h2 className="text-2xl font-extrabold tracking-tight text-emerald-700 sm:text-3xl">
            Community-Led, Not Top-Down
          </h2>

          <p className="mt-4 max-w-4xl text-base leading-relaxed text-slate-700">
            We rejects top-down development models that treat communities as passive beneficiaries. 
            Instead, we promote community-led approaches that place local actors at the center of 
            design, implementation, monitoring, and accountability.
          </p>

          <p className="mt-6 max-w-4xl text-base leading-relaxed text-slate-700">
            We invest in training local champions, work in local languages, and support community 
            structures to lead climate action processes. This includes enabling communities to define 
            priorities, track progress, and hold implementing actors accountable. By strengthening 
            local ownership and leadership, CASDI ensures that climate interventions are responsive, 
            inclusive, and sustainable beyond project timelines.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mt-14 pb-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-emerald-700 sm:text-3xl">
            Justice and Inclusion
          </h2>

          <p className="mt-4 max-w-4xl text-base leading-relaxed text-slate-700">
            Justice and inclusion are central to CASDI’s approach to climate action. We intentionally 
            center <b>women, youth, persons with disabilities, and frontline communities</b> who are often 
            most affected by climate change but least represented in decision-making.
          </p>

          <p className="mt-6 max-w-4xl text-base leading-relaxed text-slate-700">
            CASDI works to remove barriers to participation by using inclusive methods, accessible communication, 
            and safe spaces for engagement. We promote equitable access to knowledge, resources, and leadership 
            opportunities, recognizing that climate resilience cannot be achieved without addressing underlying 
            social and structural inequalities. Through this pillar, CASDI advances climate action that is not 
            only effective, but also fair and transformative.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Approach;
