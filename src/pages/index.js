import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import WhatsNew from '@site/src/components/WhatsNew';
import Featured from '../components/Featured';
import ServiceGithubReleaseInfo from '../services/githubReleaseInfo'
import ServiceHashnodeFeed from '../services/hashnodeFeed'

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    // <header className={clsx('hero', styles.heroBanner)}>
    <div>
      <div className="container" style={{textAlign: 'center'}}>
        <br /><br />
        {/* <p className="hero__subtitle">{siteConfig.title}</p> */}
        <h1 className="hero__title">{siteConfig.tagline}</h1>
        <h3 className="hero__subtitle">For Your React Project</h3>
        <br />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/hello">
            Start Building
          </Link> &nbsp;&nbsp;
        </div>
        <br /><br />
        
      </div>
      {/* <hr /> */}
      <div style={{textAlign: 'center'}}>
          <h5><a href="https://discord.gg/ksEXS4P9h6" style={{color: 'gray', fontWeight: '500'}}>Join the Community</a></h5>
      </div>
      <hr style={{marginTop: '0px'}} />
      <br /><br />
    </div>
    // </header>
  );
}

export default function Home() {

  const [whatsNew, setWhatsNew] = useState('{}');
  function setWhatsNewWrap(value) {
    setWhatsNew(JSON.stringify(value));
  }
  function getWhatsNewWrap() {
    return JSON.parse(whatsNew);
  }

  const [blogFeed, setBlogFeed] = useState('[]');
  function setBlogFeedWrap(value) {
    setBlogFeed(JSON.stringify(value));
  }
  function getBlogFeedWrap() {
    return JSON.parse(blogFeed);
  }

  const {siteConfig} = useDocusaurusContext();

  useEffect(async () => {

    const whatsNew = await ServiceGithubReleaseInfo();
    setWhatsNewWrap(whatsNew);
  
  }, [])

  useEffect(async () => {

    const hashnodeFeed = await ServiceHashnodeFeed();
    setBlogFeedWrap(hashnodeFeed);

  })

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Superflows provides you a set of plug and play, reusable and customizable components that you can use to supercharge your React project">
      
      <main>
        <div className={styles.coverDiv}>
        <HomepageHeader />
        {/* <HomepageFeatures /> */}
        <WhatsNew data={getWhatsNewWrap()} />
        <Featured data={getBlogFeedWrap()} />
        </div>
      </main>
    </Layout>
  );
}
