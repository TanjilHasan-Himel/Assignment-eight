import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import AppCard from "../components/AppCard.jsx";

export default function Home() {
  const apps = useLoaderData();
  const topApps = [...apps].sort((a, b) => b.downloads - a.downloads).slice(0, 8);

  // Stats data
  const stats = [
    { label: "Total Downloads", value: "29.6M", growth: "21% More Than Last Month" },
    { label: "Total Reviews", value: "906K", growth: "40% More Than Last Month" },
    { label: "Active Apps", value: "132+", growth: "31 More Web Launches" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Hero Content */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              We Build{" "}
              <span className="text-purple-600">Productive</span>{" "}
              Apps
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
              At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-slate-200 rounded-lg font-semibold text-slate-900 hover:shadow-lg transition"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 13.5v8.8c0 .84.935 1.34 1.58.98l8.63-5.87a.5.5 0 000-.82L4.58 9.72C3.935 9.36 3 9.86 3 10.7v2.8zm0-5V3.7c0-.84.935-1.34 1.58-.98l8.63 5.87a.5.5 0 000 .82L4.58 15.28c-.645.36-1.58-.14-1.58-.98z"/>
                </svg>
                Google Play
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-slate-200 rounded-lg font-semibold text-slate-900 hover:shadow-lg transition"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 13.5c-.17-2.33 1.86-3.46 1.95-3.52-1.06-1.56-2.73-1.77-3.32-1.8-1.41-.14-2.76.84-3.46.84-.7 0-1.78-.82-2.93-.8-1.51.02-2.91.88-3.69 2.24-1.57 2.73-.4 6.75 1.12 8.97.75 1.08 1.64 2.3 2.8 2.25 1.1-.04 1.52-.71 2.86-.71s1.72.71 2.9.69c1.2-.02 1.97-1.1 2.71-2.18.85-1.24 1.2-2.44 1.23-2.5-.05-.02-2.32-.89-2.35-3.54zm-2.2-6.52c.62-.74 1.04-1.77.93-2.81-.9.05-1.98.6-2.63 1.35-.57.66-1.08 1.72-.95 2.73 1 .08 2.03-.5 2.65-1.27z"/>
                </svg>
                App Store
              </a>
            </div>
          </div>

          {/* Phone Mockup with Floating Icons */}
          <div className="mt-16 flex justify-center items-center relative h-96 md:h-[500px]">
            {/* Central Phone Image */}
            <div className="relative z-10">
              <img
                src="/assets/hero.png"
                alt="App showcase"
                className="h-64 md:h-80 object-contain"
              />
            </div>

            {/* Floating Icons */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Top Left - Clock */}
              <div className="absolute top-8 left-8 md:left-0 h-12 w-12 rounded-full bg-teal-500 flex items-center justify-center text-white shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              {/* Left - Checkmark */}
              <div className="absolute left-4 md:left-0 top-1/3 h-12 w-12 rounded-full bg-teal-700 flex items-center justify-center text-white shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              {/* Left Bottom - Power */}
              <div className="absolute left-8 md:left-4 bottom-12 h-12 w-12 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3a1 1 0 00-1 1v5a1 1 0 102 0V6a1 1 0 00-1-1z"/>
                </svg>
              </div>

              {/* Right Top - Music Note */}
              <div className="absolute right-8 md:right-0 top-12 h-12 w-12 rounded-full bg-red-500 flex items-center justify-center text-white shadow-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 12h-2v-2h-2v2H8v-2H6v4h12v-4h-2v2z"/>
                </svg>
              </div>

              {/* Right - Book */}
              <div className="absolute right-4 md:right-0 top-1/3 h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                </svg>
              </div>

              {/* Right Bottom - Target */}
              <div className="absolute right-8 md:right-4 bottom-12 h-12 w-12 rounded-full bg-cyan-500 flex items-center justify-center text-white shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner Section */}
      <section className="bg-purple-600 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Trusted By Millions, Built For You
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-purple-100 text-sm mb-1">
                  {stat.label}
                </div>
                <div className="text-purple-200 text-xs">
                  {stat.growth}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Apps Section */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Trending Apps
            </h2>
            <p className="mt-2 text-slate-600">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>

          {/* Apps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {topApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>

          {/* Show All Button */}
          <div className="flex justify-center">
            <Link
              to="/apps"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Show All
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
