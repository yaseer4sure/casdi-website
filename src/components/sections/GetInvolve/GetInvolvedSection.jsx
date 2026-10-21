import React from "react";
import { organisation } from "../../../data/organisation.js";
import { useSearchParams } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { Target, HeartHandshake, Award} from "lucide-react";

function GetInvolvedSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedTab = searchParams.get("tab");
  const activeTab = ["mission", "partner", "donates"].includes(selectedTab) ? selectedTab : "mission";
  const setActiveTab = (tab) => setSearchParams({ tab });

  const tabs = [
    { id: "mission", label: "Volunteer", icon: Target },
    { id: "partner", label: "Partner With Us", icon: Award },
    { id: "donates", label: "Support/Donate", icon: HeartHandshake },
  ];

  const content = {
    mission: {
      title: "Volunteer with CASDI",
      description:
        "Bring your skills and energy to community-led climate action. Contact us to discuss how you can support our team in these areas:",
      points: [
        "People and culture",
        "Grant and fundraising",
        "Finance and accounting",
        "Community and advocacy officer",
      ],
    },
    partner: {
      title: "Partner with Us",
      description:
        "Work with CASDI to strengthen climate education, community resilience and sustainable livelihoods. We welcome partnerships with communities, educators, researchers and development organisations.",
    },
    donates: {
      title: "Support our Initiatives",
      description:
        "Support grassroots climate education, environmental stewardship and youth leadership. Contact our team to discuss how your contribution can help our initiatives.",
    },
  };


  return (
    <section id="get-involved" className="involvement-page">
      <p className="eyebrow">TAKE ACTION WITH US</p>
      <h1 className="mb-8 text-4xl text-green-900">Be part of the change.</h1>
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mb-12 flex flex-wrap justify-center gap-2"
      >
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              aria-pressed={activeTab === tab.id}
              className={`flex items-center rounded-full px-6 py-3 transition-all ${
                activeTab === tab.id
                  ? "bg-green-700 text-white"
                  : "border border-green-200 bg-white text-gray-700 hover:bg-emerald-100"
              }`}
            >
              <IconComponent size={18} className="mr-2" />
              {tab.label}
            </button>
          );
        })}
      </Motion.div>

      <Motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 rounded-2xl bg-white p-8 shadow-lg"
      >
        <h3 className="mb-4 text-2xl font-bold text-green-800">{content[activeTab].title}</h3>
        {activeTab === "mission" && (
          <p className="mb-6 text-gray-600">{content[activeTab].description}</p>
        )}

        <div className="space-y-4">
          {activeTab === "donates" ? (
            <div className="flex flex-col items-center gap-6 text-start">
              <p className="text-lg leading-relaxed text-gray-700">
                {content[activeTab].description}
              </p>
              <a
                href={`mailto:${organisation.email}?subject=Donation%20Inquiry`}
                className="rounded-md bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-800"
              >
                Donate
              </a>
            </div>
          ) : activeTab === "partner" ? (
            <div className="flex flex-col items-center gap-6 text-start">
              <p className="text-lg leading-relaxed text-gray-700">
                {content[activeTab].description}
              </p>
              <a
                href={`mailto:${organisation.email}?subject=Partnership%20Inquiry`}
                className="rounded-md bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-800"
              >
                Get Started
              </a>
            </div>
          ) : (
            <ul className="space-y-3">
              {content[activeTab].points.map((point) => (
                <li key={point} className="flex items-start">
                  <div className="mr-3 mt-1 rounded-full bg-green-100 p-1">
                    <div className="h-2 w-2 rounded-full bg-green-600" />
                  </div>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        {activeTab === "mission" && <a className="button button-green mt-8" href={`mailto:${organisation.email}?subject=Volunteering%20with%20CASDI`}>Ask about volunteering</a>}
      </Motion.div>
    </section>
  );
}

export default GetInvolvedSection;
