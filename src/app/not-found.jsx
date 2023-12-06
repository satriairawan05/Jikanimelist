"use client"

import { FileSearch } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Page = () => {
    const router = useRouter()

    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-4 flex-col">
                <FileSearch size={44} className="text-anime-accent"/>
                <h3 className="text-anime-accent text-4xl font-bold">404 | NOT FOUND</h3>
                <button onClick={() => router.back()} className="text-anime-primary hover:text-anime-accent transition-all underline">Kembali</button>
            </div>
        </div>
    )
}

export default Page