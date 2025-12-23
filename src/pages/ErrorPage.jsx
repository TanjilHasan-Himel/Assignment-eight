import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const err = useRouteError();

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container-pad py-14">
        <div className="card mx-auto max-w-3xl p-10 text-center">
          <img
            src="/assets/error-404.png"
            alt="404"
            className="mx-auto w-full max-w-md"
          />
          <p className="mt-6 text-3xl font-extrabold">Page Not Found</p>
          <p className="mt-2 text-sm text-slate-600">
            The page you requested doesn’t exist (or something went wrong).
          </p>

          {err?.statusText || err?.message ? (
            <p className="mt-4 rounded-2xl bg-slate-100 p-4 text-xs text-slate-700">
              {err.statusText || err.message}
            </p>
          ) : null}

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="rounded-xl bg-brand-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-700"
            >
              Back Home
            </Link>
            <Link
              to="/apps"
              className="rounded-xl bg-slate-100 px-5 py-3 text-sm font-bold text-slate-800 transition hover:bg-slate-200"
            >
              Browse Apps
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
