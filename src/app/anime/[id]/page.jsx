import { getAnimeResponse } from "@/libs/api";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const animeStatistics = await getAnimeResponse(`anime/${id}/statistics`);

  return (
    <>
      <div className="flex gap-2 px-4 pt-4 overflow-x-auto border-anime-primary text-anime-primary">
        <div className="flex flex-col items-center justify-center p-2 border rounded w-36">
          <h3 className="text-uppercase">Peringkat</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="flex flex-col items-center justify-center p-2 border rounded w-36">
          <h3 className="text-uppercase">Skor</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="flex flex-col items-center justify-center p-2 border rounded w-36">
          <h3 className="text-uppercase">Anggota</h3>
          <p>{anime.data.members}</p>
        </div>
        <div className="flex flex-col items-center justify-center p-2 border rounded w-36">
          <h3 className="text-uppercase">Episode</h3>
          <p>{anime.data.episodes}</p>
        </div>
        <div className="flex flex-col items-center justify-center p-2 border rounded w-36">
          <h3 className="text-uppercase">Watching</h3>
          <p>{animeStatistics.data.watching}</p>
        </div>
        <div className="flex flex-col items-center justify-center p-2 border rounded w-36">
          <h3 className="text-uppercase">Completed</h3>
          <p>{animeStatistics.data.completed}</p>
        </div>
        <div className="flex flex-col items-center justify-center p-2 border rounded w-36">
          <h3 className="text-uppercase">Total</h3>
          <p>{animeStatistics.data.total}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 px-4 pt-4 sm:flex-nowrap text-anime-primary">
        <Image src={anime.data.images.webp.image_url} alt={anime.data.images.jpg.image_url} width={250} height={250} className="object-cover w-full rounded" />
        <p className="text-xl text-justify text-white">{anime.data.synopsis}</p>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
