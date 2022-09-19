import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <p className="hero__subtitle">{siteConfig.title}</p>
        <h1 className="hero__title">{siteConfig.tagline}</h1>
        <h3 className="hero__subtitle">For your React serverless project</h3>
        <br /><br />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/hello">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Superflows provides you a set of plug and play, reusable and customizable components that you can use to supercharge your React project">
      
      <main>
        <HomepageHeader />
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
