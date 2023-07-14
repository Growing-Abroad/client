import Head from 'next/head';
import React from 'react';
import imageTag from "@assets/growing-abroad/growing-abroad-icon-logo.png"

interface ISeoProps {
  title: string;
  description: string;
  url: string;
}

const SEO = ({ title, description, url }: ISeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:image" content={imageTag.src} />
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
    </Head>
  );
};

export default SEO;
