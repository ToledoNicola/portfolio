import { FunctionComponent, ReactNode } from "react";
import Image from "next/image";
import style from "./Project.module.scss";
import Button from "components/Common/button";

interface ProjectProps {
  title: string;
  reverse?: boolean;
  description: ReactNode;
  img: StaticImageData;
  stack: string;
  link?:string
}

const Project: FunctionComponent<ProjectProps> = ({
  title,
  reverse = false,
  img,
  description,
  stack,
  link
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
            placeholder="blur"
            src={img}
            alt={'project'}
          />
          </div>
          
        </div>
        <div className={style.description}>
          {description}
          <p className={style.projectStack}>{stack}</p>{" "}
         {  link && <Button small={true} link={link} text="Visita il sito" />} 
        </div>
        <h2></h2>
      </div>
    </div>
  );
};

export default Project;
