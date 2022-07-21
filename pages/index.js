import Layout from "./component/layout";
import Head from "next/head";
import unfetch from "isomorphic-unfetch";
import styles from "./component/layout.module.css";
import Link from "next/link";
import slug from "slug";

function HomePage(props) {
  return (
    <div>
      <Layout>
        <Head>
          <title style={{ color: "white" }}>Anasayfa</title>
        </Head>
        <h1 className={styles.title}>Welcome to Next.js!</h1>

        <ul>
          {props.characters.results.map((character) => (
            <li key={character.id}>
              <Link
                href="/character/[slug]"
                as={`/character/${slug(character.name)}-${character.id}`}
              >
                <a>{character.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    </div>
  );
}
export async function getStaticProps() {
  const data = await unfetch("https://rickandmortyapi.com/api/episode");
  const characters = await data.json();

  return {
    props: {
      characters
    }
  };
}
export default HomePage;
