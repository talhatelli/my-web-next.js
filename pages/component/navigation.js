import Link from "next/link";
import styles from "./nav.module.css";
function Navigation() {
  return (
    <nav>
      <Link href="/">
        <a className={styles.link}> &nbsp; Ana sayfa &nbsp;</a>
      </Link>

      <Link href="/about">
        <a className={styles.link}> &nbsp; Hakkımda &nbsp;</a>
      </Link>
      <br />
      <br />
    </nav>
  );
}
export default Navigation;
