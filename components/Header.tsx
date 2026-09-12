import NavLinks from "@/components/NavLinks";
export default function Header() {
  return (
    <header className="bg-blue-900 text-white py-4 shadow-md">
      <div id="header-title" className="text-2xl font-bold pl-4">
        Joseph Bowen
      </div>
      <NavLinks />
    </header>
  );
}
