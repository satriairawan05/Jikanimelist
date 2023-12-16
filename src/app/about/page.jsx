import ImagePreview from "@/components/Utilities/ImagePreview";
import { getGithubUser } from "@/libs/api";
import Link from "next/link";

const Page = async() => {
  const user = await getGithubUser();
  return (
    <>
      <div className="flex items-center justify-center my-5">
        <ImagePreview user={user} />
      </div>
      <p className="my-1 text-2xl text-center text-anime-primary">{user.name}</p>
      <p className="my-1 text-xl text-center text-anime-primary">{user.bio}</p>
      <div className="flex items-center justify-center my-1">
        <Link href={user.html_url} target="_blank" key={user.name} className="text-xl text-center text-anime-primary hover:text-anime-accent">
          See Profile
        </Link>
      </div>
    </>
  );
};

export default Page;
