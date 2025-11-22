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
        <Link href="/">
          <img
            src="/champeye.webp"
            alt="OpenChamp Logo"
            height={48}
            width={48}
            className="select-text"
          />
        </Link>
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
        <Link href="/">
          <img
            src="/champeye.webp"
            alt="OpenChamp Logo"
            height={40}
            width={40}
            className="select-text"
          />
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-stone-200 hover:text-cyan-400 transition-colors"
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
      {mobileMenuOpen && (
        <nav className="xl:hidden bg-stone-900 border-t border-stone-700">
          <ul className="flex flex-col gap-2 p-4 font-bold text-sm tracking-wider text-stone-200">
            <li>
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-4 hover:bg-stone-800 rounded transition-colors"
              >
                GAME*
              </Link>
            </li>
            <li>
              <Link
                href="/patch_notes"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-4 hover:bg-stone-800 rounded transition-colors"
              >
                PATCH NOTES*
              </Link>
            </li>
            <li>
              <Link
                href="/dev_blog"
                onClick={() => setMobileMenuOpen(false)}
                className="dev-blog-transition block py-2 px-4 hover:bg-stone-800 rounded transition-colors"
              >
                DEV BLOG
              </Link>
            </li>
            <li className="pt-2 border-t border-stone-700">
              <a
                href="https://discord.gg/f6DGjvTWYT"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <button className="w-full px-4 py-2 bg-cyan-800 font-bold hover:bg-cyan-400 transition-all duration-300 hover:text-stone-800 rounded-lg">
                  DISCORD
                </button>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
