import React from "react";

export default function Loader({ label = "Loading..." }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/30 backdrop-blur-sm">
      <div className="card w-[320px] p-6 text-center">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-brand-600" />
        <p className="text-sm font-medium text-slate-700">{label}</p>
      </div>
    </div>
  );
}
