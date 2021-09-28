import Header from "components/header";
import Page from "components/page";
import type { NextPage } from "next";
import Hero from "sections/home/hero";

const Home: NextPage = () => {
  return (
    <Page>
      <Hero />
    </Page>
  );
};

export default Home;
