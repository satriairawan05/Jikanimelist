import Link from "next/link";

const Footer = ({ currentYear, link, name }) => {
  return (
    <>
      <footer className="flex justify-around text-anime-primary">
        <div className="items-center py-3 my-5">
          <h3 className="text-xl text-center lg:text-2xl xl:text-3xl">
            &copy; 2023 - {currentYear} Distributed by{" "}
            <Link href={link} target="_blank" key={name}>
              {name}
            </Link>
          </h3>
        </div>
      </footer>
    </>
  );
};

export default Footer;
