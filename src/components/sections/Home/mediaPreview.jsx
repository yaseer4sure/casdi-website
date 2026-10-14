import React, { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ✅ replace these with YOUR real images used in the screenshot section
import imgA from "../../../assets/images/pic-4.jpeg";
import imgB from "../../../assets/images/pic-5.jpeg";
import imgC from "../../../assets/images/pic-2.jpeg";

function AboutSection() {
  const slides = useMemo(
    () => [
      { src: imgA, alt: "CASDI media gallery 1" },
      { src: imgB, alt: "CASDI media gallery 2" },
      { src: imgC, alt: "CASDI media gallery 3" },
      // add more images if you want; dots + navigation will still work
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const onResize = () => setPerView(window.innerWidth < 768 ? 1 : 3);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const totalPages = Math.max(1, Math.ceil(slides.length / perView));

  const goPrev = () => setIndex((v) => (v - 1 + totalPages) % totalPages);
  const goNext = () => setIndex((v) => (v + 1) % totalPages);

  const start = index * perView;
  const visible = slides.slice(start, start + perView);

  // pad last page so you still see 3 tiles on desktop
  const padded =
    perView === 3 && visible.length < 3
      ? [...visible, ...slides.slice(0, 3 - visible.length)]
      : visible;

  return (
    <section id="about" className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-[#206333] sm:text-5xl">
          Media &amp; Publications
        </h2>

        {/* Thin green line */}
        <div className="mx-auto mt-6 h-1 w-[70%] max-w-4xl bg-[#FAD244]" />

        {/* Subtitle block (centered, mono-like spacing feel) */}
        <p className="mx-auto mt-10 max-w-3xl text-center font-mono text-sm leading-relaxed tracking-wide text-slate-700 sm:text-base">
          Stay informed with the latest updates from Grains Foundation. Our
          publications include research reports, policy briefs, impact stories,
          and blog articles highlighting key issues in leadership, climate
          action, migration, and development. Our media section features press
          releases, interviews, and news coverage of our initiatives.
        </p>

        {/* Read more button */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="rounded-full bg-[#0b5ed7] px-10 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition hover:brightness-95"
          >
            Read More
          </button>
        </div>

        {/* Image carousel (3 across desktop, 1 mobile) */}
        <div className="relative mx-auto mt-10 max-w-6xl">
          {/* Slides row */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {padded.map((item, i) => (
              <div key={`${item.alt}-${i}`} className="relative overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-52 w-full object-cover md:h-60"
                />

                {/* LEFT arrow overlay (only on first tile like screenshot) */}
                {i === 0 && (
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous"
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/0 p-2 transition hover:bg-white/10"
                  >
                    <ChevronLeft className="h-10 w-10 text-white drop-shadow" />
                  </button>
                )}

                {/* RIGHT arrow overlay (only on last tile like screenshot) */}
                {i === padded.length - 1 && (
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/0 p-2 transition hover:bg-white/10"
                  >
                    <ChevronRight className="h-10 w-10 text-white drop-shadow" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Dots (centered) */}
          <div className="mt-5 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, dot) => (
              <button
                key={dot}
                type="button"
                onClick={() => setIndex(dot)}
                aria-label={`Go to slide ${dot + 1}`}
                className={`h-2 w-2 rounded-full transition ${
                  dot === index ? "bg-black" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* YouTube embed (below carousel) */}
        <div className="mx-auto mt-10 max-w-4xl pb-4">
          <div className="aspect-video w-full overflow-hidden rounded-none bg-black">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/CiPvb4WNfxs?rel=0&modestbranding=1"
              title="CASDI Documentary"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
