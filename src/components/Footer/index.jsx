import Link from "next/link";

const Footer = ({ currentYear, link, name }) => {
  return (
    <>
      <footer className="flex justify-around text-anime-primary">
        <div className="items-center py-3 my-5">
          <p className="text-center">
            © 2023 - {currentYear} Distributed by{" "}
            <Link href={link} target="_blank" key={name}>
              {name}
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
