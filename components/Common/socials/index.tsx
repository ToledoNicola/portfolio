import { FunctionComponent } from "react";
import style from "./Socials.module.scss";
import cx from "classnames";
import {
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

interface SocialsProps {
  small?: boolean;
}

const smallClass = (small: boolean) => cx({ [style.btnSmall]: small });

const Socials: FunctionComponent<SocialsProps> = ({ small = false }) => {
  return (
    <div className={style.socials}>
      <a
        className={smallClass(small) + ` ${style.btn} ${style.linkedin}`}
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/nicola-toledo/"
      >
        <FaLinkedinIn className={style.fa} />
      </a>
      {/* <a
        className={smallClass(small) + ` ${style.btn} ${style.facebook}`}
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/nicola.toledo.dev"
      >
        <FaFacebook className={style.fa} />
      </a> */}
      <a
        className={smallClass(small) + ` ${style.btn} ${style.instagram}`}
        rel="noreferrer"
        target="_blank"
        href="https://www.instagram.com/nicolatoledo.dev/"
      >
        <FaInstagram className={style.fa} />
      </a>
      <a
        className={smallClass(small) + ` ${style.btn} ${style.twitter}`}
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/ToledoDev"
      >
        <FaTwitter className={style.fa} />
      </a>
      <a
        className={smallClass(small) + ` ${style.btn} ${style.github}`}
        target="_blank"
        rel="noreferrer"
        href="https://github.com/ToledoNicola"
      >
        <FaGithub className={style.fa} />
      </a>
    </div>
  );
};

export default Socials;
