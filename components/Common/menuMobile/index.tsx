import { FunctionComponent, useState } from "react";
import styles from "./MenuMobile.module.scss";
import Link from "next/link";
import cx from "classnames";
import ThemeChanger from "components/Common/themeChanger";
import { event } from "lib/gtag";

interface MenuMobileProps {}

const gtEventMenu = (section: string) =>
  event({
    action: `user click menu link`,
    category: "Navbar Mobile",
    label: section,
  });

const MenuMobile: FunctionComponent<MenuMobileProps> = () => {
  const [open, setOpen] = useState(false);
  const clickLink = (section: string) => {
    gtEventMenu(section);
    setOpen(false);
  };
  return (
    <div>
      <div className={cx({ [styles.open]: open }) + " " + styles.menu}>
        <div className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link href="/#about">
                <a onClick={() => clickLink("About")}>Chi sono </a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/#services">
                <a onClick={() => clickLink("Services")}>Servizi</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/#projects">
                <a onClick={() => clickLink("Projects")}>Progetti</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/#contacts">
                <a onClick={() => clickLink("Contacts")}>Contatti</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/#contacts">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://medium.com/@nicolatoledo.dev"
                >
                  Blog
                </a>
              </Link>
            </li>
            {/* <li className={styles.li}>
              <Link href="/workshops/angular">
                <a onClick={()=>setOpen(false)} >Workshop</a>
              </Link>
            </li> */}
            {/* <li className={styles.li}>
              <Link href="/blog">
                <a onClick={()=>setOpen(false)} >Blog</a>
              </Link>
            </li> */}
          </ul>
        </div>
        <div className={styles.themeToggle}>
          <ThemeChanger />
        </div>
      </div>

      <div className={styles.wrapper} onClick={() => setOpen(!open)}>
        <div
          className={cx({ [styles.isActive]: open }) + " " + styles.hamburger}
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
