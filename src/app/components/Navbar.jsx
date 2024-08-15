import Link from "next/link";


export default function Navbar() {
  return (
    <nav>
        <ul className= "flex justify-around capitalize items-center h-36 bg-slate-950 text-white text-lg">

            <Link href={'/'}>
            <li>Home</li>
            </Link>

            <Link href={'/about'}>
            <li>About</li>
            </Link>

            <Link href={'/Contact'}>
            <li>Contact</li>
            </Link>

            <Link href={'/Help'}>
            <li>Help</li>
            </Link>

        </ul>
    </nav>
  )
}
