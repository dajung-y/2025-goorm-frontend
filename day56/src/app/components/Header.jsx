import Link from "next/link";
import Gnb from "./Gnb";

export default function Header() {
  return (
    <header className="max-w-[1280px] bg-emerald-800 mx-auto h-16">
      <div className="container mx-auto flex items-center justify-between h-full px-4">
        <Link href='/'>
          <h1 className="font-bold text-white">COMPANY</h1>
        </Link>
      <Gnb />
      </div>
    </header>
  )
}
