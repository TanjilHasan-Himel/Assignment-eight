import React, { useEffect, useMemo, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";
import { getInstalledIds, uninstallId } from "../utils/storage.js";

function fmt(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1) + "K";
  return String(n);
}

export default function Installation() {
  const apps = useLoaderData();
  const [ids, setIds] = useState([]);

  useEffect(() => {
    setIds(getInstalledIds());
  }, []);

  const installedApps = useMemo(() => {
    const set = new Set(ids);
    return apps.filter((a) => set.has(a.id)).sort((a, b) => b.downloads - a.downloads);
  }, [apps, ids]);

  function handleUninstall(app) {
    const next = uninstallId(app.id);
    setIds(next);
    toast(`Uninstalled: ${app.title}`, { icon: "🗑️" });
  }

  return (
    <div className="space-y-8">
      <section className="card p-7">
        <h1 className="text-2xl font-extrabold tracking-tight">My Installation</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          All your installed apps are saved in localStorage. You can uninstall
          anytime.
        </p>
      </section>

      {installedApps.length === 0 ? (
        <section className="card p-10 text-center">
          <p className="text-xl font-extrabold">No Installed Apps</p>
          <p className="mt-2 text-sm text-slate-600">
            Install an app first from the apps list.
          </p>
          <div className="mt-6">
            <Link
              to="/apps"
              className="rounded-xl bg-brand-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-700"
            >
              Browse Apps
            </Link>
          </div>
        </section>
      ) : (
        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {installedApps.map((app) => (
            <div key={app.id} className="card overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={app.image}
                  alt={app.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-base font-extrabold">{app.title}</p>
                <p className="mt-0.5 text-xs text-slate-500">{app.companyName}</p>

                <div className="mt-4 flex items-center justify-between text-sm text-slate-700">
                  <span className="font-semibold">⬇️ {fmt(app.downloads)}</span>
                  <span className="font-semibold">⭐ {app.ratingAvg}</span>
                </div>

                <div className="mt-4 flex gap-2">
                  <Link
                    to={`/apps/${app.id}`}
                    className="flex-1 rounded-xl bg-slate-100 px-3 py-2 text-center text-sm font-bold text-slate-800 hover:bg-slate-200"
                  >
                    Details
                  </Link>
                  <button
                    onClick={() => handleUninstall(app)}
                    className="flex-1 rounded-xl bg-rose-600 px-3 py-2 text-sm font-extrabold text-white hover:bg-rose-700"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
