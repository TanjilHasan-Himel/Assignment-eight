import React from "react";

export default function InlineSpinner({ className = "" }) {
  return (
    <span
      className={
        "inline-block h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-brand-600 " +
        className
      }
      aria-label="Loading"
    />
  );
}
