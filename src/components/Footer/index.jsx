import { getGithubUser } from "@/libs/api";
import Link from "next/link";

const Footer = async({ currentYear, link }) => {
  const user = await getGithubUser("satriairawan05")
  return (
    <>
      <footer className="flex justify-around text-anime-primary">
        <div className="items-center py-3 my-5">
          <p className="text-sm text-center lg:text-md xl:text-2xl">
            © 2023 - {currentYear} Distributed by{" "}
            <Link href={link} target="_blank" key={user.name} className="hover:text-anime-accent">
              {user.name}
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
