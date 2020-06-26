import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Easy Workflow from Field to Office</>,
    imageUrl: 'img/screen1.png',
    description: (
      <>
        <h4>Support various import and export format types</h4>
        LandStar7 imports and exports DXF, SHP, KML, KMZ, CSV, DAT, TXT  as well as fully customized 
        data content from the survey project choosing CSV, DAT and TXT formats.
      </>
    ),
  },
  {
    title: <>Background Basemap Overlay</>,
    imageUrl: 'img/screen1.png',
    description: (
      <>
        <h4>Locate and vizualise your project data at a glance</h4>
        LandStar7 integrates Google, OSM, BING and WMS online maps to provide meaningful location
        information to surveyors and construction professionals. Projects are vizualized within their
        regional terrain or satellite images in real-time.
      </>
    ),
  },
  {
    title: <>Feature Rich Android Software</>,
    imageUrl: 'img/screen1.png',
    description: (
      <>
        <h4>Highly versatile and ready for multiple applications</h4>
        LandStar7 is designed to provide you with exceptional feature sets,
        from land surveying, construction and engineering projects, mapping,
        GIS data collection, road stakeout to pipeline survey. Its customizable
        user interface keeps LandStar7 easy-to-use by focusing on essential functions
        effectively commonly used.
      </>
    ),
  },
  {
    title: <>Designed for Surveyors by Surveyors</>,
    imageUrl: 'img/screen1.png',
    description: (
      <>
        <h4>Agile software development process</h4>
        Our LandStar7 development team keeps permanent contact with surveyors,
        construction professionals and our worldwide partners network to bring
        new outstanding fonctionalities. When using LandStar7 today, you are ensure
        to benefit from regular new features at no extra cost.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Документация ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
       
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Начать
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
