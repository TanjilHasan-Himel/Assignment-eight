import React from "react";

function fmt(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1) + "K";
  return String(n);
}

export default function StatsCards({ apps }) {
  const totalApps = apps.length;
  const totalDownloads = apps.reduce((sum, a) => sum + (a.downloads || 0), 0);
  const avgRating =
    apps.length === 0
      ? 0
      : (
          apps.reduce((sum, a) => sum + (Number(a.ratingAvg) || 0), 0) / apps.length
        ).toFixed(2);

  const cards = [
    { label: "Total Apps", value: totalApps, icon: "📦" },
    { label: "Total Downloads", value: fmt(totalDownloads), icon: "⬇️" },
    { label: "Avg Rating", value: avgRating, icon: "⭐" },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map((c) => (
        <div key={c.label} className="card p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-600">{c.label}</p>
              <p className="mt-2 text-3xl font-extrabold text-slate-900">
                {c.value}
              </p>
            </div>
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-50 text-lg">
              {c.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
