import { Layout } from '@components';
import { Hero, Skills } from '@components/home';

const IndexPage = () => (
  <Layout home>
    <main className="fillHeight">
      <Hero />
      <Skills />
    </main>
  </Layout>
);

export default IndexPage;
