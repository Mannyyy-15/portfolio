import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import sprBackgroundLarge from '~/assets/spr-background-large.jpg';
import sprBackgroundPlaceholder from '~/assets/spr-background-placeholder.jpg';
import sprBackground from '~/assets/spr-background.jpg';
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
import styles from './apexwatch.module.css';

const title = 'ApexWatch Monitoring & Alert Platform';
const description =
  'Intelligent Python-powered system monitoring, automated diagnostic watchdog, and real-time alert trigger framework designed for high-availability cloud infrastructure.';
const roles = ['Python', 'System Architecture', 'Watchdog Engine', 'Automated Alerts'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const ApexWatch = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.apexwatch}>
        <ProjectBackground
          src={sprBackground}
          srcSet={`${sprBackground} 1280w, ${sprBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={sprBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/Mannyyy-15/ApexWatch"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sprTexture} 800w, ${sprTextureLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sprTexturePlaceholder}
              alt="ApexWatch system monitoring dashboard displaying live metrics."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Proactive Infrastructure Health</ProjectSectionHeading>
            <ProjectSectionText>
              ApexWatch is engineered to monitor server health, CPU/RAM thresholds, process telemetry, and service uptime in real-time. By catching anomalies before downtime occurs, ApexWatch enables automated recovery actions and instant notifications.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectSectionColumns className={styles.columns}>
              <div>
                <ProjectSectionHeading>Key Features</ProjectSectionHeading>
                <ProjectSectionText>
                  Custom python daemon scripts, lightweight memory footprint, low latency polling, and seamless webhook integration for notifications.
                </ProjectSectionText>
              </div>
              <div className={styles.grid}>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Real-time Watchdog</div>
                  <div className={styles.cardDesc}>Sub-second metric tracking for CPU, RAM, disk I/O, and service states.</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Automated Recovery</div>
                  <div className={styles.cardDesc}>Trigger automated restart scripts upon service anomaly detection.</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Webhook Notifications</div>
                  <div className={styles.cardDesc}>Instant alerts sent via Telegram, Discord, or custom REST webhooks.</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Low Resource Overhead</div>
                  <div className={styles.cardDesc}>Optimized Python daemon designed to run efficiently on any server environment.</div>
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
