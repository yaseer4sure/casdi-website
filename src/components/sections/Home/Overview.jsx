import React from "react";
import dialogueIcon from "../../../assets/images/Icons/Dialogue & Listening.svg";
import leadershipIcon from "../../../assets/images/Icons/Inclusive, Community-Led Leadership.svg";
import solidarityIcon from "../../../assets/images/Icons/Solidarity & Collective Action.svg";
import fairnessIcon from "../../../assets/images/Icons/Fairness.svg";


export default function Overview() {
  return (
    <section className="w-full bg-lime-100 text-slate-900">
      {/* wrapper */}
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        {/* top green line */}
        <div className="mx-auto mb-10 h-1 w-[70%] max-w-3xl rounded-full bg-[#FAD244]" />

        {/* Mission */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-extrabold text-[#206333] sm:text-3xl">
            Our Mission
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed tracking-[0.25em] text-slate-800 sm:text-base sm:tracking-[0.30em]">
            To promote environmental consciousness, empower grassroots and vulnerable communities with 
            education on clean environments and climate adaptation, and advocate for sustainable policies that support Nigeria’s climate goals and energy transition. 
          </p>
        </div>

        {/* Vision */}
        <div className="mx-auto mt-14 max-w-4xl text-center">
          <h2 className="text-2xl font-extrabold text-[#206333] sm:text-3xl">
            Our Vision
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed tracking-[0.25em] text-slate-800 sm:text-base sm:tracking-[0.30em]">
           A climate-resilient and environmentally just Nigeria where empowered communities rooted in local knowledge and lived experience thrive in clean, 
           healthy ecosystems and actively shape the country’s climate and sustainable development pathway.
          </p>
        </div>

        {/* Quote */}
        <div className="mx-auto mt-14 max-w-4xl text-center">
          <p className="text-xl font-medium italic text-emerald-700 sm:text-2xl">
            Transformative change starts locally, through collective action, everyday practice, and shared purpose.
          </p>
        </div>

        {/* Principles */}
        <div className="mx-auto mt-16 max-w-5xl text-center">
          <h2 className="text-2xl font-extrabold text-[#206333] sm:text-3xl">
            Our Principles
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center">
              <p className="mb-6 text-lg font-bold text-emerald-700">
                Dialogue & Listening
              </p>
              <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-emerald-800 bg-white">
                <img src={dialogueIcon} alt="Dialogue & Listening" className="h-14 w-14" />
              </div>
            </div>

            {/* Inclusive Leadership */}
            <div className="flex flex-col items-center">
              <p className="mb-6 text-lg font-bold text-emerald-700">
                Inclusive, Community-Led Leadership
              </p>
              <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-emerald-800 bg-white">
                <img src={leadershipIcon} alt="Inclusive, Community-Led Leadership" className="h-14 w-14" />
              </div>
            </div>

            {/* Solidarity */}
            <div className="flex flex-col items-center">
              <p className="mb-6 text-lg font-bold text-emerald-700">
                Solidarity & Collective Action

              </p>
              <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-emerald-800 bg-white">
                <img src={solidarityIcon} alt="Solidarity & Collective Action" className="h-14 w-14" />
              </div>
            </div>

            {/* Fairness & Accountability */}
            <div className="flex flex-col items-center">
              <p className="mb-6 text-lg font-bold text-emerald-700">
                Fairness, Transparency &amp;
                <br />
                Accountability
              </p>
              <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-emerald-800 bg-white">
                <img src={fairnessIcon} alt="Fairness, Transparency & Accountability" className="h-14 w-14" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
