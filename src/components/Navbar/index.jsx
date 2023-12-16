import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-anime-accent">
      <div className="flex flex-col justify-between gap-2 p-4 md:flex-row md:items-center">
        <Link href="/" className="text-2xl font-bold uppercase text-anime-primary">
          Jikanimelist
        </Link>
        <Link href="/about" className="text-2xl font-bold uppercase text-anime-primary">About</Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
