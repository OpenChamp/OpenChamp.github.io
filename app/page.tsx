/* eslint-disable @next/next/no-img-element */
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
import {
  faDiscord,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Headbar from "./components/Headbar";

config.autoAddCss = false; // Tell FontAwesome to skip adding the CSS automatically since it's being imported above

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      <div className="grid grid-cols-1 grid-rows-2 min-h-screen">
        <div className="grid grid-cols-1 grid-rows-1">
          {/* Nav */}
          <Headbar />

          {/* Hero */}
          <div className="h-screen xl:h-full bg-stone-950 grid place-items-center relative overflow-hidden">
            <img
              src="/hero.webp"
              alt="OpenChamp Logo"
              className="absolute opacity-25 border rounded-xl select-text object-cover h-full w-full blur-xl"
            />
            <img
              src="/champeye.webp"
              alt="OpenChamp Logo"
              className="absolute opacity-50 blur-lg animate-spinSlow select-text max-h-[420px] max-w-[420px] w-full h-full p-8"
            />
            <div className="grid place-items-center gap-8 z-10">
              <h1 className="text-5xl font-bold text-stone-200">OpenChamp</h1>
              <a
                href="https://discord.gg/f6DGjvTWYT"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-6 py-4 mt-4 text-stone-100 bg-[#b68236] font-bold border border-[#b99f4c] hover:bg-[#f3da8b] hover:text-stone-800 transition-all duration-300 hover:shadow-glow ">
                  JOIN OUR DISCORD
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="p-2 grid place-items-center h-screen xl:h-full bg-stone-950">
          <div className="grid grid-cols-1 xl:grid-cols-2 p-8 gap-8 place-items-center">
            <div className="flex flex-col gap-8 items-center">
              <h2>
                <span className="text-2xl font-medium text-[#b68236]">
                  EPIC
                </span>
                <br />
                <span className="text-5xl font-bold text-stone-200">
                  CHAMPIONS
                </span>
              </h2>

              <p className="text-stone-500 text-lg max-w-xl">
                From Blue Steve, to Red John. or something in between (purple
                Bob?), we have every color of the champion rainbow.
              </p>
              <div className="flex gap-8">
                <button className="px-6 py-4 text-stone-100 bg-[#b68236] font-bold border border-[#b99f4c] hover:bg-[#f3da8b] hover:text-stone-800 transition-all duration-300">
                  CHAMPIONS*
                </button>
                <button className="px-6 py-4 text-stone-100 bg-cyan-800 font-bold hover:bg-cyan-400 hover:text-stone-800 transition-all duration-300">
                  PLAY*
                </button>
              </div>
            </div>

            <div className="grid place-items-center p-8">
              <img
                src="/champeye.webp"
                alt="OpenChamp Logo"
                className="rounded-lg opacity-90 max-w-[400px] w-full select-text"
              />
            </div>
          </div>
        </div>
      </div>

      <footer className="min-h-[400px] grid place-items-center p-4 bg-stone-900">
        <div className="flex flex-col gap-8 items-center">
          <div className="flex gap-4 items-center">
            <a
              href="https://discord.gg/f6DGjvTWYT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="h-16 w-16 grid place-items-center rounded-lg aspect-square text-stone-100 bg-stone-800 font-bold hover:bg-[#f3da8b] hover:text-stone-800 transition-all duration-300">
                <FontAwesomeIcon icon={faDiscord} size="2x" />
              </button>
            </a>
            {/* Github */}
            <a
              href="https://github.com/OpenChamp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="h-16 w-16 grid place-items-center rounded-lg aspect-square text-stone-100 bg-green-800 font-bold hover:bg-green-400 hover:text-stone-800 transition-all duration-300">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </button>
            </a>
            {/* Youtube */}
            <a
              href="https://www.youtube.com/channel/UCHQjCkTokQBNpS3vunY7d7Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="h-16 w-16 grid place-items-center rounded-lg aspect-square text-stone-100 bg-red-800 font-bold hover:bg-red-400 hover:text-stone-800 transition-all duration-300">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </button>
            </a>
            {/* Ko-fi */}
            <a
              href="https://ko-fi.com/openchamp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="h-16 w-16 grid place-items-center rounded-lg aspect-square text-stone-100 bg-cyan-800 font-bold hover:bg-cyan-400 hover:text-stone-800 transition-all duration-300">
                <FontAwesomeIcon icon={faHandHoldingDollar} size="2x" />
              </button>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/champeye.webp"
              alt="OpenChamp Logo"
              height={42}
              width={42}
              className=""
            />
            <h1 className="text-3xl font-bold text-stone-200">OpenChamp</h1>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-stone-400 text-md max-w-xl text-center italic opacity-80">
              *: Coming soon!
            </p>
            <p className="text-stone-400 text-md max-w-4xl text-center">
              OpenChamp is an Open Source MOBA built by the community for the
              community, with custom servers, game modes, and champions. Join
              our official discord server, checkout the source code on GitHub,
              watch our YouTube for updates, or support the game&apos;s
              development on Ko-fi!
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
