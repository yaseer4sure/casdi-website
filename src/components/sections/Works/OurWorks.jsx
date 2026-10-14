import React from "react";

// 🔁 Update these paths to the exact images you want to use
import heroIntro from "../../../assets/images/Community-Center.png";

import leadershipImg from "../../../assets/images/capacity-b.JPG";
import sustainabilityImg from "../../../assets/images/tree-planting.jpg";
import mobilityImg from "../../../assets/images/COP30.JPG";
import policyImg from "../../../assets/images/climateEducation.jpg";
import communityImg from "../../../assets/images/hero-bg-1.jpg";

function OurWorks() {
  return (
    <section id="about" className="w-full bg-white text-slate-900">
      {/* HERO: systems-thinking intro */}
      <div className="relative w-full overflow-hidden">
        <img
          src={heroIntro}
          alt="Community dialogue"
          className="h-[70vh] w-full object-cover md:h-[80vh]"
        />

        {/* soft dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* centred text */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <p className="max-w-5xl text-center  text-lg font-medium italic leading-relaxed text-white sm:text-xl md:text-2xl">
            At Climate Alaramma Sustainable Development Initiative (CASDI), we understand that climate 
            change, environmental degradation, inequality, insecurity, displacement, and civic exclusion 
            are deeply interconnected realities shaping everyday life in Nigeria—particularly in 
            climate-vulnerable regions. Our programmes are designed to reflect this complexity.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="mx-auto max-w-6xl px-4 py-0 sm:px-6 md:py-0 lg:px-8">
        {/* ===== 1. LEADERSHIP & COMMUNITY RESILIENCE ===== */}
        <section className="py-0 md:py-5">
    {/* top row: text left, image right */}
    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
      {/* Text */}
      <div className="md:pr-10">
        <h2 className="text-3xl font-extrabold tracking-tight text-[#206333] sm:text-3xl">
          Collective Leadership &amp; Community Resilience
        </h2>

        <p className="mt-6 max-w-xl  text-base leading-relaxed text-slate-800 sm:text-lg ">
          We strengthens community resilience by nurturing collective leadership and 
          supporting people-led efforts to drive change from within. We amplify the agency, 
          creativity, and leadership of youth, women, girls, persons with disabilities, 
          displaced communities, and grassroots civil society actors, enabling them to 
          organize, advocate, and lead development pathways that reflect their lived 
          realities, priorities, and aspirations.
        </p>
      </div>

      {/* Image */}
      <div className="overflow-hidden rounded-xl shadow-lg">
        <img
          src={leadershipImg}
          alt="Leadership and community resilience"
          className="h-full w-full object-cover"
        />
      </div>
    </div>

    {/* Focus includes */}
    <p className="mt-12 text-center text-lg font-semibold text-[#206333]">
      Our Focus Includes
    </p>

    <div className="mt-6 grid gap-10 md:grid-cols-2">
      <div>
        <h3 className="text-lg font-semibold text-emerald-700">
          Leadership &amp; Civic Engagement
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">
          Supporting youth and women to build confidence, skills, and collective 
          power to participate meaningfully in civic and community decision-making spaces.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-emerald-700">
          Civil Society &amp; Culture
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">
          Strengthening grassroots organizations through participatory approaches that draw 
          on culture, storytelling, and local knowledge to create platforms for voice, 
          visibility, and influence.
        </p>
      </div>
    </div>

    {/* divider line */}
    <div className="mt-12 h-[3px] w-full bg-[#FAD244]" />
  </section>

        {/* ===== 2. SUSTAINABILITY ===== */}
         <section className="py-0 md:py-5">
    {/* top row: text left, image right */}
    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
      {/* Text */}
      <div className="md:pr-10">
        <h2 className="text-3xl font-extrabold tracking-tight text-[#206333] sm:text-3xl">
           Climate Resilience, Sustainability &amp;  Environmental 
          Justice
        </h2>

        <p className="mt-6 max-w-xl  text-base leading-relaxed text-slate-800 sm:text-lg ">
          CASDI promotes climate resilience and environmental justice grounded in indigenous 
          knowledge, collective stewardship, and community wellbeing. We recognize that access 
          to land, water, energy, food systems, and healthy ecosystems is central to dignity, 
          livelihoods, and peace. <br className=" sm:block" /><br className=" sm:block" /> Our work supports communities 
          to adapt to climate impacts, restore ecosystems, and pursue regenerative development 
          pathways that benefit both people and the environment.
        </p>
      </div>

      {/* Image */}
      <div className="overflow-hidden rounded-xl shadow-lg">
        <img
          src={sustainabilityImg}
          alt="Leadership and community resilience"
          className="h-full w-full object-cover"
        />
      </div>
    </div>

    {/* Focus includes */}
    <p className="mt-12 text-center text-lg font-semibold text-[#206333]">
      Our Focus Includes
    </p>

    <div className="mt-6 grid gap-10 md:grid-cols-2">
      <div>
        <h3 className="text-lg font-semibold text-emerald-700">
          Climate, Energy &amp; Justice
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">
          Supporting communities to steward ecosystems, adapt to climate 
          risks, and engage in just and inclusive energy transition pathways.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-emerald-700">
          Sustainable Livelihoods &amp; Nature-Positive Economies
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">
          Promoting climate-resilient, environmentally sustainable 
          livelihoods that strengthen income security while protecting ecosystems.
        </p>
      </div>
    </div>

    {/* divider line */}
    <div className="mt-12 h-[3px] w-full bg-[#FAD244]" />
  </section>

        {/* ===== 3. HUMAN MOBILITY & INCLUSION ===== */}
         <section className="py-0 md:py-5">
    {/* top row: text left, image right */}
    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
      {/* Text */}
      <div className="md:pr-10">
        <h2 className="text-3xl font-extrabold tracking-tight text-[#206333] sm:text-3xl">
          Climate (Im)mobilities, Human Mobility &amp; Inclusion
        </h2>

        <p className="mt-6 max-w-xl  text-base leading-relaxed text-slate-800 sm:text-lg ">
          We works in solidarity with migrants, displaced people, pastoralists, seasonal migrants, 
          and host communities, recognizing that climate change, environmental degradation, and 
          insecurity are reshaping patterns of mobility and immobility across Nigeria.<br className=" sm:block" /><br className=" sm:block" />
          We center the voices, knowledge, and leadership of people on the move and those unable to 
          move, supporting rights-based, inclusive, and climate-informed responses that strengthen 
          participation, dignity, and social cohesion..
        </p>
      </div>

      {/* Image */}
      <div className="overflow-hidden rounded-xl shadow-lg">
        <img
          src={policyImg}
          alt="Leadership and community resilience"
          className="h-full w-full object-cover"
        />
      </div>
    </div>

    {/* Focus includes */}
    <p className="mt-12 text-center text-lg font-semibold text-[#206333]">
      Our Focus Includes
    </p>

    <div className="mt-6 grid gap-10 md:grid-cols-2">
      <div>
        <h3 className="text-lg font-semibold text-emerald-700">
          Inclusive Mobility &amp; Development
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">
          Enabling people affected by displacement, seasonal migration, and 
          immobility to shape equitable development systems, policies, and opportunities.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-emerald-700">
          Belonging &amp; Social Cohesion
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">
          Fostering trust, dialogue, and peace-building across diverse communities 
          facing pressure from climate stress, resource scarcity, and social change.
        </p>
      </div>
    </div>

    {/* divider line */}
    <div className="mt-12 h-[3px] w-full bg-[#FAD244]" />
  </section>

        {/* ===== 4. POLICY & ADVOCACY ===== */}
         <section className="py-0 md:py-5">
    {/* top row: text left, image right */}
    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
      {/* Text */}
      <div className="md:pr-10">
        <h2 className="text-3xl font-extrabold tracking-tight text-[#206333] sm:text-3xl">
          Policy Engagement, Knowledge&amp;  Advocacy
        </h2>

        <p className="mt-6 max-w-xl  text-base leading-relaxed text-slate-800 sm:text-lg ">
          advocates for people-centred policies and systemic change that prioritize dignity, access, 
          participation, and meaningful action. We work to bridge the gap between communities and 
          decision-makers by supporting policy access, co-creation, and evidence-informed advocacy 
          rooted in local realities from local to global decision making tables.<br className=" sm:block" /><br className=" sm:block" />
          We also promote knowledge equity, ensuring that indigenous knowledge, community evidence, 
          and lived experience inform policy, research, and development practice.
        </p>
      </div>

      {/* Image */}
      <div className="overflow-hidden rounded-xl shadow-lg">
        <img
          src={mobilityImg}
          alt="Leadership and community resilience"
          className="h-full w-full object-cover"
        />
      </div>
    </div>

    {/* Focus includes */}
    <p className="mt-12 text-center text-lg font-semibold text-[#206333]">
      Our Focus Includes
    </p>

    <div className="mt-6 grid gap-10 md:grid-cols-2">
      <div>
        <h3 className="text-lg font-semibold text-emerald-700">
          Policy Access &amp; Influence
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">
          Supporting communities to engage decision-making processes 
          through participation, advocacy, and knowledge brokerage 
          across climate, environment, education, and governance.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-emerald-700">
          Democracy &amp; Knowledge Equity
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">
          Democratizing knowledge and participation, and promoting 
          research, innovation, and technology that serve the public good.
        </p>
      </div>
    </div>

    {/* divider line */}
    <div className="mt-12 h-[3px] w-full bg-[#FAD244]" />
  </section>

        {/* ===== 5. COMMUNITY SUPPORT ===== */}
        <section className="py-12 md:py-16">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            {/* Text */}
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#206333] sm:text-4xl">
                Community Support &amp; Practical Solidarity
              </h2>

              <p className="mt-6 text-base leading-relaxed text-slate-800 sm:text-lg">
                CASDI mobilizes practical, dignity-centred support during moments of urgency, 
                crisis, or deep vulnerability. Our approach to support is rooted in solidarity, 
                reciprocity, and care, recognizing that everyone has something to contribute 
                and that assistance should strengthen, not undermine, agency. <br className=" sm:block" /><br className=" sm:block" />
                We prioritize children, older persons, persons with disabilities, displaced families, 
                street-connected children, and others living in precarious conditions—ensuring 
                support is responsive, respectful, and community-informed. This work reflects 
                our belief that climate justice and resilience must be grounded in human dignity 
                and compassion.
              </p>
            </div>

            {/* Image */}
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img
                src={communityImg}
                alt="Community support"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default OurWorks;
