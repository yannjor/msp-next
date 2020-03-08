import Head from 'next/head';
import { NextPage } from 'next';
import { ContentfulPost, fetchPost } from '../../data/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';
import Layout from '../../components/Layout';

interface InitialProps {
  post: ContentfulPost;
}

const PostPage: NextPage<InitialProps> = ({ post }) => (
  <Layout>
    <Head>
      <title>{post.title} – Scoutkåren Munksnäs Spejarna</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>{post.title}</h1>
      {post.content && <div>{documentToReactComponents(post.content)}</div>}
      <Link href="/">
        <a>Tillbaka hem</a>
      </Link>
    </main>
  </Layout>
);

PostPage.getInitialProps = async ({ query }) => {
  return {
    post: await fetchPost(query.slug),
  };
};

export default PostPage;
