import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header className="bg-white h-20 shadow">
          <div className="max-w-[1280px] h-full mx-auto px-4">
            <div className="flex justify-between items-center h-full">
              <Link href='/' className="text-2xl font-bold">
                My App
              </Link> 
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
