import { FunctionComponent } from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import ThemeChanger from "./ThemeChanger";
interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logo}>
          <Image
            src="/logo-min-bianco.png"
            alt="Logo"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <ul>
          <li>Chi sono</li>
          <li>Servizi</li>
          <li>Progetti</li>
          <li>
            <a
              href="https://training.nicolatoledo.dev/"
              rel="noreferrer"
              target="_blank"
            >
              Formazione
            </a>
          </li>
          <li>Contatti</li>
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
        <ThemeChanger/>
      </nav>
    </header>
  );
};

export default Header;
