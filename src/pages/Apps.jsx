import React, { useMemo, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppCard from "../components/AppCard.jsx";
import InlineSpinner from "../components/InlineSpinner.jsx";

export default function Apps() {
  const apps = useLoaderData();
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("none");
  const [searching, setSearching] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = q
      ? apps.filter((a) => a.title.toLowerCase().includes(q))
      : [...apps];

    if (sort === "high-low") list.sort((a, b) => b.downloads - a.downloads);
    if (sort === "low-high") list.sort((a, b) => a.downloads - b.downloads);

    return list;
  }, [apps, query, sort]);

  function onSearchChange(e) {
    const value = e.target.value;
    setQuery(value);
    setSearching(true);
    window.clearTimeout(window.__heroio_search_to);
    window.__heroio_search_to = window.setTimeout(() => setSearching(false), 350);
  }

  return (
    <div className="space-y-8">
      {/* Title section */}
      <section className="card p-7">
        <h1 className="text-2xl font-extrabold tracking-tight">All Apps</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Search apps by title, sort by downloads, and open any app to see
          details, reviews, and install status.
        </p>
      </section>

      {/* Search + count */}
      <section className="card p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-semibold text-slate-700">
            Total Apps: <span className="font-extrabold">{apps.length}</span>
          </p>

          <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:items-center">
            <div className="relative w-full md:w-[320px]">
              <input
                value={query}
                onChange={onSearchChange}
                placeholder="Search apps by title..."
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 pr-10 text-sm outline-none transition focus:border-brand-600"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                {searching ? <InlineSpinner /> : "🔎"}
              </div>
            </div>

            {/* Sort dropdown */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 outline-none transition focus:border-brand-600 md:w-[190px]"
            >
              <option value="none">Sort: Default</option>
              <option value="high-low">Downloads: High-Low</option>
              <option value="low-high">Downloads: Low-High</option>
            </select>
          </div>
        </div>
      </section>

      {/* Apps grid */}
      <section>
        {filtered.length === 0 ? (
          <div className="card p-10 text-center">
            <p className="text-lg font-extrabold">No App Found</p>
            <p className="mt-2 text-sm text-slate-600">
              Try a different keyword.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
