"use client";

import { FileSearch } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center max-w-xl min-h-screen mx-auto">
      <div className="flex flex-col items-center justify-center gap-4">
        <FileSearch size={44} className="text-anime-accent" />
        <h3 className="text-4xl font-bold text-anime-accent">404 | NOT FOUND</h3>
        <button onClick={() => router.back()} className="underline transition-all text-anime-primary hover:text-anime-accent">
          Kembali
        </button>
      </div>
    </div>
  );
};

export default Page;
