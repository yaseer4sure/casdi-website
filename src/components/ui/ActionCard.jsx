import React from "react";

function ActionCard({ title, ctaLabel, children }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-emerald-700/40 bg-slate-950/80 p-5 shadow-md shadow-emerald-500/10">
      <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
      <p className="mt-2 text-xs text-slate-300 flex-1">{children}</p>
      <button className="mt-3 inline-flex items-center text-[11px] font-semibold text-emerald-300 hover:text-emerald-200">
        {ctaLabel} →
      </button>
    </div>
  );
}

export default ActionCard;
