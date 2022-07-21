import Navigation from "./navigation";
import Head from "next/head";
import styles from "./layout.module.css";
function Layout({ children }) {
  return (
    <div>
      <Head>
        <title className={styles.title}>Ahmet Talha Telli</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navigation />
      <main>{children}</main>
      <div>
        <footer>desing by Ahmet</footer>
        <style jsx>{`
          div {
            position: fixed;
            bottom: 0;
            width: 100%;
            color: white;
            text-align: center;
            color: white;
            background: #ff5f6d;
          }
        `}</style>
      </div>
    </div>
  );
}
export default Layout;
