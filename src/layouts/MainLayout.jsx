import React from "react";
import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Loader from "../components/Loader.jsx";

export default function MainLayout() {
  const navigation = useNavigation();
  const busy = navigation.state === "loading";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {busy && <Loader label="Loading page..." />}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
