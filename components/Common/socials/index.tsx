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
import { event } from "lib/gtag";

interface SocialsProps {
  small?: boolean;
}
const gtEvent = (section: string) =>
  event({
    action: `user click social link`,
    category: "socials",
    label: section,
  });
const smallClass = (small: boolean) => cx({ [style.btnSmall]: small });

const Socials: FunctionComponent<SocialsProps> = ({ small = false }) => {
  return (
    <div className={style.socials}>
      <a
        onClick={() => gtEvent("linkedIn")}
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
        onClick={() => gtEvent("instagram")}
        className={smallClass(small) + ` ${style.btn} ${style.instagram}`}
        rel="noreferrer"
        target="_blank"
        href="https://www.instagram.com/nicolatoledo.dev/"
      >
        <FaInstagram className={style.fa} />
      </a>
      <a
        onClick={() => gtEvent("twitter")}
        className={smallClass(small) + ` ${style.btn} ${style.twitter}`}
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/ntoledev"
      >
        <FaTwitter className={style.fa} />
      </a>
      <a
        onClick={() => gtEvent("github")}
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
