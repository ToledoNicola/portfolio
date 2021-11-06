import { FunctionComponent, ReactNode } from "react";
import Image from "next/image";
import style from "./Project.module.scss";
interface ProjectProps {
  title: string;
  reverse?: boolean;
  description: ReactNode;
  imgName: string;
  stack: string;
}

const Project: FunctionComponent<ProjectProps> = ({
  title,
  reverse = false,
  imgName,
  description,
  stack,
}) => {
  return (
    <div className={style.card} id="card">
      <h1>{title}</h1>
      <div
        className={`${style.wrapper}  ${reverse ? style.wrapper__reverse : ""}`}
      >
        <div className={style.photo}>
          <div className={style.imgW}>
            <Image
            layout="fill"
            className={style.img}
            quality={100}
            // placeholder="blur"
            src={`/projects/${imgName}@full.png`}
            alt={imgName}
          />
          </div>
          
        </div>
        <div className={style.description}>
          {description}
          <p className={style.projectStack}>{stack}</p>{" "}
        </div>
        <h2></h2>
      </div>
    </div>
  );
};

export default Project;
