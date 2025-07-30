export default function AdminLayout({children}){
  return(
    <div>
      <aside className="flex mx-auto justify-center max-w-[1280px]">
        어드민 메뉴
      </aside>
      <div>
        {children}
      </div>
    </div>
  )
}