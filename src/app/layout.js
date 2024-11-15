// src/app/layout.js (Server-side layout without 'use client')
import Navigation from './components/Navigation';  // Import Navigation component
import './globals.css';  // Import relative to layout.js

export const metadata = {
  title: "My Portfolio - Galingan",
  description: "Explore my projects, skills, and experience.",
  keywords: "Portfolio, Web Developer, React, Next.js, Projects, Skills",
  author: "Galingan, Christian Marc",
};

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
    themeColor: "#0070f3",
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="antialiased theme-dark">
        <Navigation />
        <section>{children}</section>
      </body>
    </html>
  );
}
