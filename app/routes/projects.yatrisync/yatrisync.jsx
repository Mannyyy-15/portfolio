import sliceAppLarge from '~/assets/slice-app-large.jpg';
import sliceAppPlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceApp from '~/assets/slice-app.jpg';
import sliceBackgroundLarge from '~/assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceBackground from '~/assets/slice-background.jpg';
import { Footer } from '~/components/footer';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './yatrisync.module.css';

const title = 'YatriSync Web Transit Platform';
const description =
  'Smart Travel & Transit Synchronization Platform enabling real-time commuter assistance, multi-modal route planning, location tracking, and transport schedule updates.';
const roles = ['React / JavaScript', 'Real-time Transport API', 'UI/UX Design', 'Geolocation Services'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const YatriSync = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.yatrisync}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/Mannyyy-15/YatriSync-Web"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt="YatriSync Web Platform Dashboard showing live transit routes and schedules."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Streamlining Daily Commutes</ProjectSectionHeading>
            <ProjectSectionText>
              YatriSync solves the fragmentation in regional public transit system updates. Daily commuters often face unexpected delays, uncoordinated transfers, and lack of real-time ETA accuracy. YatriSync unifies multi-modal transit information into a single intuitive interface.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectSectionColumns className={styles.columns}>
              <div>
                <ProjectSectionHeading>Core Capabilities</ProjectSectionHeading>
                <ProjectSectionText>
                  Designed with a mobile-first focus for instant accessibility on any device. Commuters can view upcoming departures, receive notifications on route delays, and sync itineraries with ease.
                </ProjectSectionText>
              </div>
              <div className={styles.featureGrid}>
                <div className={styles.featureCard}>
                  <div className={styles.featureTitle}>Real-time Route Sync</div>
                  <div className={styles.featureDesc}>Dynamic mapping and trip progress calculation for train & bus transit.</div>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureTitle}>Multi-Modal Travel</div>
                  <div className={styles.featureDesc}>Seamless transition planning across different public and private transportation modes.</div>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureTitle}>Instant Alerts</div>
                  <div className={styles.featureDesc}>Live traffic notifications and delay advisories powered by event streams.</div>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureTitle}>Offline Cache</div>
                  <div className={styles.featureDesc}>PWA support to access essential schedule details even in low connectivity zones.</div>
                </div>
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
