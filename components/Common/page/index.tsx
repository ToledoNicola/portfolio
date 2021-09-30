import Header from "components/Common/header";
import { FunctionComponent } from "react";
import style from "./Page.module.scss";
interface PageProps {}

const Page: FunctionComponent<PageProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={style.container} >
          {children}
      </main>
    </>
  );
};

export default Page;
