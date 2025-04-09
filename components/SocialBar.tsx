"use client";

import Link from "next/link";
import { FaInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6";
import { RiBlueskyLine } from "react-icons/ri";

export default function SocialBar() {
  return (
    <div>
      {/* Mobile: full-width footer */}
      <div className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-center gap-6 px-6 py-4 bg-black text-white border-t border-white/10 md:hidden">
        <SocialIcons />
      </div>

      {/* Desktop: floating bar */}
      <div className="hidden md:flex fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-black/90 text-white rounded-full shadow-lg backdrop-blur border border-white/10 items-center gap-4">
        <SocialIcons />
      </div>
    </div>
  );
}

function SocialIcons() {
  return (
    <>
      <Link
        href="https://instagram.com/barrelmasterbbq"
        target="_blank"
        aria-label="Instagram"
      >
        <FaInstagram className="h-5 w-5 hover:text-bbq-flame transition-colors" />
      </Link>{" "}
      <Link
        href="https://www.tiktok.com/@barrelmasterbbq"
        target="_blank"
        aria-label="Tiktok"
      >
        <FaTiktok className="h-5 w-5 hover:text-bbq-flame transition-colors" />
      </Link>{" "}
      <Link
        href="https://x.com/barrelmasterbbq"
        target="_blank"
        aria-label="X/Twitter"
      >
        <FaXTwitter className="h-5 w-5 hover:text-bbq-flame transition-colors" />
      </Link>
      <Link
        href="https://bsky.app/profile/barrelmasterbbq.bsky.social"
        target="_blank"
        aria-label="Bluesky"
      >
        <RiBlueskyLine className="h-5 w-5 hover:text-bbq-flame transition-colors" />
      </Link>
    </>
  );
}
