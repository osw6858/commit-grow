import Head from "next/head";
import Header from "@components/common/Header";
import Footer from "@components/common/Footer";
import HomeIntro from "@components/home/HomeIntro";
import MainFeature from "@components/home/MainFeature";
import UserReview from "@components/home/UserReview";
import HomeOutro from "@components/home/HomeOutro";

export default function Home() {

  return (
      <div className="min-h-screen bg-gray-100">
          <Head>
              <title>CatchTech AI - AI 기술 면접 준비</title>
              <link rel="icon" href="/favicon.ico"/>
          </Head>
          <Header/>
          <main className="container mx-auto px-4 py-12">
              <HomeIntro/>
              <MainFeature/>
              <UserReview/>
              <HomeOutro/>
          </main>
          <Footer/>
      </div>
  );
}
