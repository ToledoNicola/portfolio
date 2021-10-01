import { FunctionComponent } from "react";
import style from "./Footer.module.scss";
interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <div className={style.footer}>
      {/* <app-socials></app-socials> */}
      <div className={style.copyright}>
        {/* <img
    loading="lazy"
    [src]="
      theme.isDark
        ? 'assets/logo-lettere-bianco.png'
        : 'assets/logo-lettere-nero.png'
    "
    alt="lettere"
  /> */}
        <p>COPYRIGHT © 2020, Nicola toledo</p>
      </div>
    </div>
  );
};

export default Footer;
