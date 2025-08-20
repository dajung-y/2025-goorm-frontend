import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
      <Link href='/catalog'>
        ➡️ 카탈로그로 이동
     </Link>
    </div>
  );
}
