import dynamic from "next/dynamic";

const MarketingPage = dynamic(() => import("./marketing/page"), {
  loading: () => <p>Loading...</p>,
});

async function Home() {
  return <MarketingPage />;
}

export default Home;