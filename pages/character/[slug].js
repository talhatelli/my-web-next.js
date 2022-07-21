import Layout from "../component/layout";
import Head from "next/head";
import slug from "slug";
import unfetch from "isomorphic-unfetch";

function CharacterDetail({ character }) {
  return (
    <Layout>
      <Head>
        <title style={{ color: "white" }}>Anasayfa</title>
      </Head>
      <h1>{character.name}</h1>
      <figure>
        <img src={character.image} alt={character.name} />
      </figure>
    </Layout>
  );
}
export async function getStaticPaths() {
  const data = await unfetch("https://rickandmortyapi.com/api/episode");
  const characters = await data.json();

  const paths = characters.results.map((character) => {
    return { params: { slug: `${slug(character.name)}-${character.id}` } };
  });
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const id = params.slug.slipt("-").slice(-1)[0];
  const data = await unfetch("https://rickandmortyapi.com/api/episode" + id);
  const character = await data.json();

  return {
    props: {
      character
    }
  };
}
export default CharacterDetail;
