import Page from "components/Common/page";
import type { NextPage } from "next";
import About from "components/Home/about";
import Hero from "components/Home/hero";
import Services from "components/Home/services";

const Home: NextPage = () => {
  return (
    <Page>
      <Hero />
      <About/>
      <Services/>
    </Page>
  );
};

export default Home;
