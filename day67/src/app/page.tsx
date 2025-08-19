import Link from "next/link";

export default function Home() {
  return (
    <div className="m-4 flex justify-center gap-4 text-2xl">
      <Link href='/counter'
            className="text-green-500">counter</Link>
      <Link href='/input'
            className="text-blue-500">input</Link>
      <Link href='/like'
            className="text-red-500">like</Link>
      <Link href='/todo'
            className="text-orange-500">todo</Link>
      <Link href='/toggle'
            className="text-yellow-500">toggle</Link>
    </div>
  );
}
