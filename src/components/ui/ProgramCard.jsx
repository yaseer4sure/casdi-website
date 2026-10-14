import React from "react";

function ProgramCard({ title, tag, children }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-rose-950 bg-rose-950 p-5">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
        {tag}
      </p>
      <h3 className="mt-2 text-sm font-semibold text-slate-100">{title}</h3>
      <p className="mt-2 text-xs text-slate-300">{children}</p>
    </div>
  );
}

export default ProgramCard;
