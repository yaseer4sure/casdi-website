import React from "react";

function Card({ title, children, badge, badgeColor }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-rose-950 p-5">
      {badge && (
        <span
          className={`inline-flex items-center rounded-full bg-gradient-to-r ${badgeColor} px-3 py-1 text-[10px] font-semibold text-slate-950`}
        >
          {badge}
        </span>
      )}
      <h3 className="mt-2 text-sm font-semibold text-slate-100">{title}</h3>
      <div className="mt-2">{children}</div>
    </div>
  );
}

export default Card;
