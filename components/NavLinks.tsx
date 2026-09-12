"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Primary"
      className="max-w-4xl px-4 flex justify-start items-l"
    >
      <ul className="flex gap-6">
        <li>
          <Link
            href="/"
            className={pathname === "/" ? "active" : ""}
            aria-current={pathname === "/" ? "page" : undefined}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={pathname === "/about" ? "active" : ""}
            aria-current={pathname === "/about" ? "page" : undefined}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={pathname === "/projects" ? "active" : ""}
            aria-current={pathname === "/projects" ? "page" : undefined}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/contribute"
            className={pathname === "/contribute" ? "active" : ""}
            aria-current={pathname === "/contribute" ? "page" : undefined}
          >
            Contribute
          </Link>
        </li>
      </ul>
    </nav>
  );
}
