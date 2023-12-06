import { getAnimeResponse } from "@/libs/api"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"

const Page = async ({ params: { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    const animeStatistics = await getAnimeResponse(`anime/${id}/statistics`)
    console.log('animeStatistics: ', animeStatistics);

    return (
        <>
            <div className="pt-4 px-4 flex gap-2 overflow-x-auto">
                <div className="w-36 flex flex-col justify-center items-center rounded border border-anime-primary text-anime-primary p-2">
                    <h3 className="text-uppercase">Peringkat</h3>
                    <p>{anime.data.rank}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-anime-primary text-anime-primary p-2">
                    <h3 className="text-uppercase">Skor</h3>
                    <p>{anime.data.score}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-anime-primary text-anime-primary p-2">
                    <h3 className="text-uppercase">Anggota</h3>
                    <p>{anime.data.members}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-anime-primary text-anime-primary p-2">
                    <h3 className="text-uppercase">Episode</h3>
                    <p>{anime.data.episodes}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-anime-primary text-anime-primary p-2">
                    <h3 className="text-uppercase">Watching</h3>
                    <p>{animeStatistics.data.watching}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-anime-primary text-anime-primary p-2">
                    <h3 className="text-uppercase">Completed</h3>
                    <p>{animeStatistics.data.completed}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-anime-primary text-anime-primary p-2">
                    <h3 className="text-uppercase">Total</h3>
                    <p>{animeStatistics.data.total}</p>
                </div>
            </div>
            <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-anime-primary">
                <Image
                    src={anime.data.images.webp.image_url}
                    alt={anime.data.images.jpg.image_url}
                    width={250}
                    height={250}
                    className="w-full rounded object-cover"
                />
                <p className="text-justify text-white text-xl">{anime.data.synopsis}</p>
            </div>
            <div>
                <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
            </div>
        </>
    )
}

export default Page