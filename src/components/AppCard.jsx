import React from "react";
import { Link } from "react-router-dom";

function fmt(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1) + "K";
  return String(n);
}

export default function AppCard({ app }) {
  return (
    <Link
      to={`/apps/${app.id}`}
      className="card group block overflow-hidden transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={app.image}
          alt={app.title}
          className="h-full w-full object-cover transition group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <p className="text-base font-extrabold text-slate-900">{app.title}</p>
        <p className="mt-0.5 text-xs text-slate-500">{app.companyName}</p>

        <div className="mt-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-slate-700">
            <img
              src="/assets/icon-downloads.png"
              alt="downloads"
              className="h-4 w-4"
            />
            <span className="font-semibold">{fmt(app.downloads)}</span>
          </div>

          <div className="flex items-center gap-2 text-slate-700">
            <img
              src="/assets/icon-ratings.png"
              alt="rating"
              className="h-4 w-4"
            />
            <span className="font-semibold">{app.ratingAvg}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
