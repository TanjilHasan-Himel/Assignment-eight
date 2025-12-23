import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="card p-10 text-center">
      <img
        src="/assets/error-404.png"
        alt="Not found"
        className="mx-auto w-full max-w-md"
      />
      <p className="mt-6 text-3xl font-extrabold">404 — Not Found</p>
      <p className="mt-2 text-sm text-slate-600">
        This route doesn’t exist. Use the navigation to go back.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="rounded-xl bg-brand-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-700"
        >
          Home
        </Link>
        <Link
          to="/apps"
          className="rounded-xl bg-slate-100 px-5 py-3 text-sm font-bold text-slate-800 transition hover:bg-slate-200"
        >
          Apps
        </Link>
      </div>
    </div>
  );
}
