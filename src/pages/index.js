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
        <h1 className={clsx('hero__title', styles.heroTitle)}>{siteConfig.tagline}</h1>
        <h3 className="hero__subtitle">Instantly deployable microfrontends</h3>
        <p>Save hours of web development drudgery!<br />Write code only for your custom use-case and<br />use microfrontends for common features</p>
        <div className={styles.buttons}>
          <Link
            style={{margin: '5px'}}
            className="button button--primary button--lg"
            to="https://console.superflows.dev">
            Sign In To The Console
          </Link>
          <Link
            style={{margin: '5px'}}
            className="button button--secondary button--lg"
            to="/docs/hello">
            Tutorials
          </Link>
        </div>
        <br /><br />
        <br /><br />
      </div>
      
      <div class={styles.valueProp2}>

          <img src="https://superflows-images.s3.ap-south-1.amazonaws.com/developer3.png" />
          <div>
              <h1>Are You A Frontend Developer?</h1>
              <h2>Supermods are your new superpower! </h2>
              <p>Develop full-stack functionality with only basic front-end coding knowledge.</p>
          </div>
          
      </div>

      <div className={styles.valueWhat}>
        <div>
            <h1>Are You A Product Manager?</h1>
            <h2>Supermods are your new supersavers!</h2>
            <p>Use Supermods to drastically shorten your timelines. For all standard functionality simply integrate Supermods. Only invest in getting code written for custom use-cases.</p>
        </div>
        <img src="https://superflows-images.s3.ap-south-1.amazonaws.com/product_manager.png" />
      </div>

      <div className={styles.valueWhat}>
        <div>
            <h1>Supermod Is A Building Block</h1>
            <h2>Frontend component bundled with its backend functionality</h2>
        </div>
        <img src="https://superflows-images.s3.ap-south-1.amazonaws.com/blocks.png" />
      </div>

      <div class={styles.valueProp1}>

          <div>
              <h1>An Independently Deployable<br />Microservice Bundled With<br />Its Frontend</h1>
          </div>
          <div>
              <h2>or</h2>
          </div>
          <div>
              <h1>Supermods Are Built On<br />Serverless & Auto-scalable Tech</h1>
          </div>

      </div>

      <div class={styles.valueProp2}>

          <img src="https://superflows-images.s3.ap-south-1.amazonaws.com/apps.png"/>
          <div>
              <h1>Use Supermods For Standard Functionality In Your App</h1>
              <h2>Code only for non-standard app-specific use-cases, otherwise simply integrate! </h2>
          </div>
          
      </div>

      <div class={styles.valueProp2}>

          <div>
              <h1>Reuse Your Supermods Configs Across Your Apps</h1>
              <h2>Never work on the same supermod component again!</h2>
          </div>

          <img src="https://superflows-images.s3.ap-south-1.amazonaws.com/reuse.png"/>
          
      </div>

      <br /><br />
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

  // useEffect(async () => {

  //   const whatsNew = await ServiceGithubReleaseInfo();
  //   setWhatsNewWrap(whatsNew);
  
  // }, [])

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
        {/* <WhatsNew data={getWhatsNewWrap()} /> */}
        <Featured data={getBlogFeedWrap()} />
        </div>
      </main>
    </Layout>
  );
}
