import Button from "components/Common/button";
import { FunctionComponent } from "react";
import style from "./Hero.module.scss";
interface HeroProps {}

const Hero: FunctionComponent<HeroProps> = () => {
  return (
    <section className={style.section} id="welcome">
      <div className={style.helloWrapper} >
        {/* <app-logos></app-logos> */}

        <div className={style.helloText} id="helloText">
          <div className={style.wrapper}>
            {/* <app-instagram-photo></app-instagram-photo> */}

            <h1>
              Ciao <span className={style.hand} id="hand">👋🏼</span> , <br />
              sono <span className={style.nome} id="nome">Nicola Toledo</span>
            </h1>
            <h2>
              Un <span>entusiasta</span> Front-end, No-code Developer & Trainer
            </h2>
            <div className={style.button} id="button">
              <Button text="chi sono" />
              {/* <app-socials small="true"></app-socials> */}
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
