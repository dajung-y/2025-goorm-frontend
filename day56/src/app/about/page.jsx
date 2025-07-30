export const metadata = {
  title: 'about 페이지',
  description: '이 페이지는 회사 소개를 담고 있습니다 회사 정보'
}
export default function page(){
  return(
    <div className="flex mx-auto justify-center max-w-[1280px]">
      <div className="pt-4 text-2xl">회사 소개페이지</div>
    </div>
  )
}