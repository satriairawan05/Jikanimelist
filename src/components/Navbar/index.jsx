import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
    return (
        <header className="bg-anime-accent">
            <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
                <Link href="/" className="font-bold text-2xl hover:text-anime-primary text-anime-dark">JIKANIMELIST</Link>
                <InputSearch />
            </div>
        </header>
    )
}

export default Navbar