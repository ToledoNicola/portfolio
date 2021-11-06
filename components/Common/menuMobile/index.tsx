import { FunctionComponent, useState } from "react";
import styles from "./MenuMobile.module.scss";
import Link from "next/link";
import cx from "classNames";
import ThemeChanger from "components/Common/themeChanger";

interface MenuMobileProps {}

const MenuMobile: FunctionComponent<MenuMobileProps> = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className={cx({ [styles.open]: open })+ ' '+styles.menu}>
        <div className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link  href="/#about">
                <a onClick={()=>setOpen(false)} >Chi sono </a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/#services">
                <a onClick={()=>setOpen(false)} >Servizi</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/#projects">
                <a onClick={()=>setOpen(false)} >Progetti</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/#contacts">
                <a onClick={()=>setOpen(false)} >Contatti</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/workshops/angular">
                <a onClick={()=>setOpen(false)} >Formazione</a>
              </Link>
            </li>
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
