import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import treePlanting from "../../../assets/images/tree-planting.jpg";
import outreach from "../../../assets/images/outreach.jpg";
import climateEducation from "../../../assets/images/climateEducation.jpg";
import COP30 from "../../../assets/images/COP30.JPG";
import climateHangout from "../../../assets/images/climate-hangout.jpg";
import heroBg1 from "../../../assets/images/hero-bg-1.jpg";
import heroBg2 from "../../../assets/images/hero-bg-2.jpg";

export default function PhotoCarousel() {
  const photos = [
    COP30,
    treePlanting,
    outreach,
    climateEducation,
    climateHangout,
    heroBg1,
    heroBg2,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  // responsive behaviour
  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = photos.length - itemsPerView;
  const visibleIndex = Math.min(currentIndex, maxIndex);
  const descriptions = ["CASDI at COP30", "Young people planting a tree", "Community outreach gathering", "Climate education session", "Climate dialogue participants", "CASDI community activity", "CASDI environmental action"];

  const next = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="w-full bg-[#eaf6fb] ">
      <div className="section-shell !py-8"><p className="eyebrow">IN PICTURES</p><h2 className="text-3xl">Community action, captured.</h2></div>
      <div className="relative w-full overflow-hidden" aria-label="Community photo gallery" aria-roledescription="carousel">
        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:scale-105 transition"
          aria-label="Previous"
        >
          <ChevronLeft className="h-6 w-6 text-slate-700" />
        </button>

        {/* SLIDER */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(100 / itemsPerView) * visibleIndex}%)`,
            }}
          >
            {photos.map((src, idx) => (
              <div
                key={idx}
                className="w-full flex-shrink-0"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <img
                  src={src}
                  alt={descriptions[idx]}
                  loading="lazy"
                  className="h-[320px] w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:scale-105 transition"
          aria-label="Next"
        >
          <ChevronRight className="h-6 w-6 text-slate-700" />
        </button>
      </div>
    </section>
  );
}
