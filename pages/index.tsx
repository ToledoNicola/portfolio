import Page from "components/page";
import type { NextPage } from "next";
import About from "sections/home/about";
import Hero from "sections/home/hero";

const Home: NextPage = () => {
  return (
    <Page>
      <Hero />
      <About/>
    </Page>
  );
};

export default Home;
