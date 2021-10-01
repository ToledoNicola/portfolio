import Header from "components/Common/header";
import { FunctionComponent } from "react";
import Footer from "../footer";
import style from "./Page.module.scss";
interface PageProps {}

const Page: FunctionComponent<PageProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={style.container} >
          {children}
      </main>
      <Footer/>
    </>
  );
};

export default Page;
