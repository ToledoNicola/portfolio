import { FunctionComponent } from "react";
import Card from "../Card";
import Grid from "../Grid";
import style from "./Program.module.scss";
import  Image from "next/image";
interface ProgramProps {}

const Program: FunctionComponent<ProgramProps> = () => {
  return (
    <section className={style.section} id="angular">
      <div className={style.head}>
        <Image className={style.logo} src="/angular.svg"  height="100" width="100" alt="" />
        <div>
          <h1>Angular</h1>
        </div>
      </div>
      <Grid>
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </section>
  );
};

export default Program;
