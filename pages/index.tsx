import Page from "components/Common/page";
import type { NextPage } from "next";
import About from "components/Home/about";
import Hero from "components/Home/hero";
import Services from "components/Home/services";
import Projects from "components/Home/projects";
import Contacts from "components/Home/contacts";

const Home: NextPage = () => {
  return (
    <Page>
      <Hero />
      <Services/>
      <Projects/>
      <About/>
      <Contacts/>
    </Page>
  );
};

export default Home;
