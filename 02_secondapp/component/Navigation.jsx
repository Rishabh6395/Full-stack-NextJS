import Link from "next/link";

export default function Navigation(){
    return (
        <header className="grid grid-cols-2">
            <div>Rishabh's Logo</div>
            <nav>
                <ul className="flex gap-10">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contact">contact</Link>
                    </li>
                    <li>
                        <Link href="/about/nestedAbout">nestedAbout</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}