import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { FC, memo } from "react";

import { SectionId } from "../../data/data";
import Socials from "../Socials";

const currentYear = new Date().getFullYear();

const Footer: FC = memo(() => (
  <div
    className="relative bg-neutral-900 px-4 pb-6 pt-12 sm:px-8 sm:pb-8 sm:pt-14"
    id="Footer"
  >
    <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
      <a
        aria-label="Aller en haut de page"
        className="rounded-full bg-neutral-100 p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
        href={`/#${SectionId.Description}`}
      >
        <ChevronUpIcon className="h-6 w-6 bg-transparent sm:h-8 sm:w-8" />
      </a>
    </div>
    <div className="flex flex-col items-center gap-y-6">
      <div className="flex gap-x-4 text-neutral-400">
        <Socials />
      </div>
      <a
        className="flex items-center gap-x-1 text-neutral-400 rounded-md p-2 ring-yellow focus:outline-none focus:ring-2"
        href="https://11e-foxhole.com"
      >
        © Copyright {currentYear} 11e-Foxhole.com
      </a>
    </div>
  </div>
));

Footer.displayName = "Footer";
export default Footer;
