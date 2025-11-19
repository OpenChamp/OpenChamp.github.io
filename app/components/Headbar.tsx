/* eslint-disable @next/next/no-img-element */
"use client";

import { Link } from "next-view-transitions";
import { useState } from "react";

export default function Headbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="absolute top-0 z-10 w-full bg-gradient-to-b from-stone-950 to-transparent">
      {/* Desktop Navigation */}
      <div className="hidden xl:flex justify-center items-center grid-cols-3 gap-4 xl:gap-8 p-4 px-8">
        <img
          src="/champeye.webp"
          alt="OpenChamp Logo"
          height={48}
          width={48}
          className="select-text"
        />
        <nav className="justify-center overflow-auto">
          <ul className="flex gap-12 font-bold text-sm tracking-wider text-stone-200">
            <li>
              <Link href="/">GAME*</Link>
            </li>
            <li>
              <Link href="/patch_notes">PATCH NOTES*</Link>
            </li>
            <li>
              <Link href="/dev_blog" className="dev-blog-transition">
                DEV BLOG
              </Link>
            </li>
          </ul>
        </nav>

        <div className="justify-end flex">
          <a
            href="https://discord.gg/f6DGjvTWYT"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-4 py-2 bg-cyan-800 font-bold hover:bg-cyan-400 transition-all duration-300 hover:text-stone-800 rounded-lg">
              DISCORD
            </button>
          </a>
        </div>
      </div>

      {/* Mobile Navigation Header */}
      <div className="xl:hidden flex justify-between items-center p-2 px-4">
        <img
          src="/champeye.webp"
          alt="OpenChamp Logo"
          height={40}
          width={40}
          className="select-text"
        />
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-stone-200 transition-colors hover:text-cyan-400"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <nav
        id="mobile-navigation"
        className={`xl:hidden flex flex-col overflow-hidden border-t border-stone-700 bg-stone-900 shadow-lg shadow-stone-950/40 transition-[max-height,opacity] duration-300 ease-out ${
          mobileMenuOpen
            ? "pointer-events-auto max-h-96 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4">
          <ul
            className={`flex flex-col gap-2 pt-4 font-bold text-sm tracking-wider text-stone-200 transition-transform duration-300 ease-out ${
              mobileMenuOpen ? "translate-y-0" : "-translate-y-16"
            }`}
          >
            <li>
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded px-4 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:bg-stone-800"
              >
                GAME*
              </Link>
            </li>
            <li>
              <Link
                href="/patch_notes"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded px-4 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:bg-stone-800"
              >
                PATCH NOTES*
              </Link>
            </li>
            <li>
              <Link
                href="/dev_blog"
                onClick={() => setMobileMenuOpen(false)}
                className="dev-blog-transition block rounded px-4 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:bg-stone-800"
              >
                DEV BLOG
              </Link>
            </li>
            <li>
              <a
                href="https://discord.gg/f6DGjvTWYT"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <button className="w-full rounded-lg bg-cyan-800 px-4 py-2 font-bold transition-all duration-300 hover:bg-cyan-400 hover:text-stone-800">
                  DISCORD
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
