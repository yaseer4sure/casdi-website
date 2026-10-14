import React from "react";

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl lg:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-xs leading-relaxed text-slate-800 sm:text-sm">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
