import Link from "next/link";
import styles from "./index.module.scss";
import { useRouter } from "next/router";


const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <div className={styles.nav}>
        <ul>
        <li className={`${router.pathname === "/" && styles.activeBtn}`}>
            <Link href="/">
              <a>Home</a>
              </Link>
          </li>
              
          <li className={`${router.pathname === "/galleria" && styles.activeBtn}`}>
            <Link href="/gallery">
              <a>Gallery</a>
            </Link>
          </li>

          <li className={`${ router.pathname === "/esperimenti" && styles.activeBtn }`}>
            <Link href="/esperimenti">
              <a>Esperimenti</a>
            </Link>
          </li>

        </ul>
      </div>

      <main className={styles.children}>{children}</main>

      <footer className={styles.footer}><Link href="/">
          <a>Vai alla Home</a>
        </Link></footer>
    </>
  );
}

export default Layout;