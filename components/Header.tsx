import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-900 text-white py-4 shadow-md">
      <div id="header-title" className="text-2xl font-bold pl-4">
        Joseph Bowen
      </div>
      <nav className="max-w-4xl px-4 flex justify-start items-l">
        <ul className="flex gap-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
