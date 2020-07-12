import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';


function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Документация ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary heroTilted', styles.heroBanner)}>
       
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
          
        <div className="content row">
          <div className="col center">
            <img class='screenshot'
              src={useBaseUrl('img/screen1.png')}
            />
          </div>
          <div className="col">
            <h4>EASY WORKFLOW FROM FIELD TO OFFICE</h4>
            <h3>Support various import and export format types</h3>
            <p class='landing'>
            LandStar7 imports and exports DXF, SHP, KML, KMZ, CSV, DAT, TXT  as well as 
            fully customized data content from the survey project choosing CSV, DAT and TXT formats.
            </p>
          </div>
        </div>

        <div className="content row">
          <div className="col">
            <h4>BACKGROUND BASEMAP OVERLAY</h4>
            <h3>Locate and vizualise your project data at a glance</h3>
            <p class='landing'>
            LandStar7 integrates Google, OSM, BING and WMS online maps to provide meaningful location 
            information to surveyors and construction professionals. Projects are vizualized within their 
            regional terrain or satellite images in real-time.
            </p>
          </div>
          <div className="col center">
            <img class='screenshot'
              src={useBaseUrl('img/screen1.png')}
            />
          </div>
        </div>

        <div className="content row">
          <div className="col center">
            <img class='screenshot'
              src={useBaseUrl('img/screen1.png')}
            />
          </div>
          <div className="col">
            <h4>FEATURE RICH ANDROID SURVEY SOFTWARE</h4>
            <h3>Highly versatile and ready for multiple applications</h3>
            <p class='landing'>
            LandStar7 is designed to provide you with exceptional feature sets, from land surveying, 
            construction and engineering projects, mapping, GIS data collection, road stakeout to pipeline survey. 
            Its customizable user interface keeps LandStar7 easy-to-use by focusing on essential functions effectively commonly used.
            </p>
          </div>
        </div> 

        <div className="content row">
          <div className="col">
            <h4>DESIGN FOR SURVEYORS BY SURVEYORS</h4>
            <h3>Agile software development process</h3>
            <p class='landing'>
            Our LandStar7 development team keeps permanent contact with surveyors, construction professionals and our 
            worldwide partners network to bring new outstanding fonctionalities. When using LandStar7 today, you are 
            ensure to benefit from regular new features at no extra cost.
            </p>
          </div>
          <div className="col center">
            <img class='screenshot'
              src={useBaseUrl('img/screen1.png')}
            />
          </div>
        </div>

        <div className="landing-ls7">
          <a href='https://play.google.com/store/apps/details?id=com.huace.landstar7'>
            <img class='google-badge' alt='Доступно в Google Play' src={useBaseUrl('img/google-play-badge.png')}/>
          </a>
        </div>
               
      </main>
    </Layout>
  );
}

export default Home;
