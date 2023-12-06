import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold text-anime-primary">{title}</h1>
      {linkHref && linkTitle ? (
        <Link href={linkHref} className="md:text-xl text-sm underline hover:text-anime-accent text-anime-primary transition-all">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};
export default Header;
