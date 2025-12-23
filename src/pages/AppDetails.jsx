import React, { useMemo, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { installId, isInstalled } from "../utils/storage.js";

function fmt(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1) + "K";
  return String(n);
}

export default function AppDetails() {
  const { app } = useLoaderData();
  const [installed, setInstalled] = useState(app ? isInstalled(app.id) : false);

  const chartData = useMemo(() => {
    if (!app) return [];
    return app.ratings.map((r) => ({
      name: r.name.replace(" star", "★"),
      count: r.count,
    }));
  }, [app]);

  if (!app) {
    return (
      <div className="card p-10 text-center">
        <img
          src="/assets/App-Error.png"
          alt="App not found"
          className="mx-auto w-full max-w-md"
        />
        <p className="mt-6 text-2xl font-extrabold">App Not Found</p>
        <p className="mt-2 text-sm text-slate-600">
          The app you are looking for does not exist. Please go back to the apps
          page.
        </p>
        <div className="mt-6">
          <Link
            to="/apps"
            className="rounded-xl bg-brand-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-700"
          >
            Back to Apps
          </Link>
        </div>
      </div>
    );
  }

  function handleInstall() {
    if (installed) return;
    installId(app.id);
    setInstalled(true);
    toast.success(`Installed: ${app.title}`);
  }

  return (
    <div className="space-y-8">
      {/* App Information */}
      <section className="card p-7">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-slate-100">
            <img
              src={app.image}
              alt={app.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-bold text-brand-700">
              {app.companyName}
            </p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight">
              {app.title}
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Size: <span className="font-semibold">{app.size} MB</span>
            </p>

            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <p className="text-xs font-semibold text-slate-600">Rating</p>
                <p className="mt-1 text-xl font-extrabold">{app.ratingAvg}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <p className="text-xs font-semibold text-slate-600">Downloads</p>
                <p className="mt-1 text-xl font-extrabold">{fmt(app.downloads)}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <p className="text-xs font-semibold text-slate-600">Reviews</p>
                <p className="mt-1 text-xl font-extrabold">{fmt(app.reviews)}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <p className="text-xs font-semibold text-slate-600">ID</p>
                <p className="mt-1 text-xl font-extrabold">{app.id}</p>
              </div>
            </div>

            <button
              onClick={handleInstall}
              disabled={installed}
              className={
                "mt-6 w-full rounded-xl px-5 py-3 text-sm font-extrabold text-white transition md:w-auto " +
                (installed
                  ? "cursor-not-allowed bg-slate-400"
                  : "bg-teal hover:brightness-95")
              }
            >
              {installed ? "Installed" : "Install"}
            </button>
          </div>
        </div>
      </section>

      {/* Review Chart */}
      <section className="card p-7">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-extrabold">Review Chart</h2>
            <p className="mt-1 text-sm text-slate-600">
              Ratings distribution for this app.
            </p>
          </div>
        </div>

        <div className="mt-6 h-[320px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Description */}
      <section className="card p-7">
        <h2 className="text-xl font-extrabold">Description</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {app.description}
        </p>

        <div className="mt-5 rounded-2xl bg-brand-50 p-5 ring-1 ring-brand-100">
          <p className="text-sm font-bold text-brand-700">Why you’ll love it</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>Simple UI, fast performance, and responsive layout.</li>
            <li>Install tracking with localStorage (no login required).</li>
            <li>Clear review visualization using Recharts.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
