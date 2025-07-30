import Header from './components/Header';
import './globals.css'

export const metadata = {
  title: 'company',
  description: 'next 실습',
  icons: {
    icon: '/my-favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
