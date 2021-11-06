import { FunctionComponent } from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import ThemeChanger from "components/Common/themeChanger";
import Link from "next/link";
import { useTheme } from "next-themes";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const { theme } = useTheme()

  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logo}>
          <Image
            src={theme == 'light'?'/logo.png':'/logo-min-bianco.png'}
            alt="Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className={styles.menu}>
          <ul>
            <li>
              <Link href="/#about">
                <a>Chi sono </a>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/#services">
                <a>Servizi</a>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/#projects">
                <a>Progetti</a>
              </Link>
            </li>
            <li>
              <Link href="/#contacts">
                <a>Contatti</a>
              </Link>
            </li>
            <li className={styles.textYellow}>
              <Link href="/angular-workshop">
                <a>Formazione</a>
              </Link>
            </li>
            <li className={styles.textYellow}>
              <a
                href="https://blog.nicolatoledo.dev/"
                rel="noreferrer"
                target="_blank"
              >
                Blog
              </a>
            </li>
          </ul>
          <ThemeChanger />
        </div>
      </nav>
    </header>
  );
};

export default Header;
