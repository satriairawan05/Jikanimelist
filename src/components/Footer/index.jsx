import Link from "next/link";

const Footer = ({ currentYear, link, name }) => {
  return (
    <>
      <footer className="flex justify-around text-anime-primary">
        <div className="items-center py-3 my-5">
          <p className="text-sm text-center lg:text-md xl:text-2xl">
            © 2023 - {currentYear} Distributed by{" "}
            <Link href={link} target="_blank" key={name} className="hover:text-anime-accent">
              {name}
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
