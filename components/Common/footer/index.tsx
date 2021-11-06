import { FunctionComponent } from "react";
import style from "./Footer.module.scss";
import Image from "next/image";
import { useTheme } from "next-themes";
import Socials from "components/Common/socials";
import LogoWhite from "public/logo-lettere-bianco.png";
import logoBlack from "public/logo-lettere-nero.png";
interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  const { theme } = useTheme();
  console.log(theme)
  return (
    <div className={style.footer}>
      <Socials />
      <div className={style.copyright}>
        <div className={style.img}>
          <Image
            layout="fill"
            objectFit="contain"
            placeholder="blur"
            src={theme == "dark" ? LogoWhite : logoBlack}
            alt="lettere"
          />
        </div>
        <p>COPYRIGHT © 2021, Nicola toledo</p>
      </div>
    </div>
  );
};

export default Footer;
