import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

function SEO({ title, description, image }) {
  return (
    <Head>
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="PROJECT_NAME" key="ogsitename" />
      <meta property="og:site_name" content="PROJECT_NAME" key="ogsitename" />
      <meta property="og:url" content="https://PROJECT_NAME.com/" />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta property="og:image" content={image} key="ogimage" />
      <meta property="og:image:alt" content="Crossword Puzzle" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://PROJECT_NAME.com/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      <title>{title}</title>
    </Head>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.any,
};

SEO.defaultProps = {
  title: "PROJECT_NAME",
  description: "PROJECT_DESC",
  image: "",
};

export default SEO;
