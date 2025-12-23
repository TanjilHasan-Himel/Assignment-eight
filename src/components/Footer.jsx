import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-lg font-bold">HERO.IO</span>
            </Link>
          </div>
          <div />
          <div className="flex justify-end gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="h-10 w-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition"
              title="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9-3 9-3z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="h-10 w-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition"
              title="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="h-10 w-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition"
              title="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a1 1 0 011-1h3z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="border-t border-slate-800" />
        <div className="py-6 text-center text-sm text-slate-400">
          <p>Copyright © 2025 - All right reserved</p>
        </div>
      </div>
    </footer>
  );
}
