/* eslint-disable @next/next/no-img-element */

import { Link } from "next-view-transitions";

export default function Headbar() {
  return (
    <div className="flex justify-center items-center xl:grid xl:grid-cols-3 gap-4 xl:gap-8 p-2 px-4 xl:p-4 xl:px-8 absolute top-0 z-10 w-full bg-gradient-to-b from-stone-950 to-transparent">
      <img
        src="/champeye.webp"
        alt="OpenChamp Logo"
        height={48}
        width={48}
        className="select-text"
      />
      <nav className="justify-center overflow-auto hidden xl:flex">
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

      <div className="justify-end hidden xl:flex">
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
  );
}
