import { FunctionComponent } from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import ThemeChanger from "components/Common/themeChanger";
import Link from "next/link";
import { useTheme } from "next-themes";
import logo from "public/logo.png";
import logoWhite from "public/logo-min-bianco.png";
import MenuMobile from "../menuMobile";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const { theme } = useTheme();

  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <Image
                src={theme == "light" ? logo : logoWhite}
                alt="Logo"
                placeholder="blur"
                layout="fill"
                objectFit="contain"
              />
            </a>
          </Link>
        </div>

        <div className={styles.menu}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link href="/#about">
                <a>Chi sono </a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/#services">
                <a>Servizi</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/#projects">
                <a>Progetti</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/#contacts">
                <a>Contatti</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/workshops/angular">
                <a>Workshop</a>
              </Link>
            </li>
            {/* <li className={styles.li} >
            <Link  href="/blog">
                <a>Blog</a>
              </Link>
            </li> */}
          </ul>
          <div className={styles.themeToggle}>
            <ThemeChanger />
          </div>
        </div>
        <div className={styles.mobileMenu}>
          <MenuMobile />
        </div>
      </nav>
    </header>
  );
};

export default Header;
