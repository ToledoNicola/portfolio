import Button from "components/Common/button";
import { FunctionComponent } from "react";
import style from "./Hero.module.scss";
import Image from "next/image";
import instaa from "public/insta-me@full.png";
import Socials from "components/Common/socials";
import Link from "next/link";

interface HeroProps {}

const Hero: FunctionComponent<HeroProps> = () => {
  return (
    <section className={style.section} id="welcome">
      <div className={style.helloWrapper}>
        <div className={style.logos}>
          <img className={style.angular} src="/logos/angular.png" alt="angular" />
          <img className={style.react} src="/logos/react.png" alt="react" />
          <img className={style.html} src="/logos/html.png" alt="html" />
          <img className={style.sass} src="/logos/scss.png" alt="scss" />
          <img className={style.firebase} src="/logos/firebase.png" alt="firebase" />
          <img className={style.css} src="/logos/css.png" alt="css" />
          <img className={style.flutter} src="/logos/flutter.png" alt="flutter" />
          <img className={style.ts} src="/logos/ts.png" alt="ts" />
          <img className={style.rxjs} src="/logos/rxjs.png" alt="rxjs" />
          <img className={style.redux} src="/logos/redux.png" alt="redux" />
          <img className={style.js} src="/logos/js.png" alt="js" />
          <img className={style.ngrx} src="/logos/ngrx.png" alt="ngrx" />
          <img className={style.ionic} src="/logos/ionic.png" alt="ionic" />
        </div>

        <div className={style.helloText} id="helloText">
          <div className={style.wrapper}>
            <div className={style.instaWrap}>
              <Image
                layout="fill"
                placeholder="blur"
                objectFit="contain"
                alt="insta foto"
                src={instaa}
              />
            </div>
            <h1>
              Ciao{" "}
              <span className={style.hand} id="hand">
                👋🏼
              </span>{" "}
              , <br />
              sono{" "}
              <span className={style.nome} id="nome">
                Nicola Toledo
              </span>
            </h1>
            <h2>
              Un <span>entusiasta</span> Developer & Trainer
            </h2>
            <div className={style.button} id="button">
            <Link href="/#services">
            <a className={style.link}>
              <Button text="I miei servizi" />
             
            </a>
          </Link>
          <div className={style.socials}>

              <Socials small={true}/>
          </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.arrow}>
        <a>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-down"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
