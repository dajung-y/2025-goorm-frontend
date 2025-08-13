import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  // 웹 페이지의 모든 공통되는 메뉴들은 여기에 작성
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
