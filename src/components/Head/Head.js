import PropTypes from 'prop-types';
import NextHead from 'next/head';
import { useRouter } from 'next/router';
import { config } from '@config';

const Head = ({ title, description, image }) => {
  const { pathname } = useRouter();

  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    image: defaultImage,
    twitterUsername,
  } = config.siteMetadata;

  const seo = {
    title: title ?? defaultTitle,
    description: description ?? defaultDescription,
    image: `${siteUrl}${image ?? defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <NextHead>
      <title>{`${seo.title}`}</title>

      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </NextHead>
  );
};

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Head.defaultProps = {
  title: null,
  description: null,
  image: null,
};

export { Head };
