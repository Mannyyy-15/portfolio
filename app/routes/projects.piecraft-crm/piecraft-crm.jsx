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
import styles from './piecraft-crm.module.css';

const title = 'PieCraft Marketing CRM';
const description =
  'Full-featured enterprise Customer Relationship Management system engineered for digital marketing agencies, streamlining client lead tracking, project milestones, and campaign metrics.';
const roles = ['TypeScript', 'Full-Stack Architecture', 'Lead Pipeline UX', 'Analytics Engine'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const PieCraftCrm = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.crm}>
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
          url="https://github.com/Mannyyy-15/Thepiecraftmarketin-crm"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              src="/static/piecraft-crm.png"
              srcSet="/static/piecraft-crm.png 1920w"
              width={1920}
              height={1080}
              placeholder="/static/piecraft-crm.png"
              alt="PieCraft Marketing CRM dashboard displaying lead pipeline analytics and client interaction history."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Empowering Agency Growth</ProjectSectionHeading>
            <ProjectSectionText>
              PieCraft CRM automates sales funnel tracking and communication workflows for marketing teams. Managing leads across multiple channels often leads to lost deals and communication siloes; PieCraft consolidates lead stages, client communications, invoice status, and performance metrics in one unified operational dashboard.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectSectionColumns className={styles.columns}>
              <div>
                <ProjectSectionHeading>Platform Architecture</ProjectSectionHeading>
                <ProjectSectionText>
                  Built with strongly-typed TypeScript modules, modular component architecture, and responsive data tables, ensuring high security and snappy dashboard responsiveness.
                </ProjectSectionText>
              </div>
              <div className={styles.grid}>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Visual Kanban Funnel</div>
                  <div className={styles.cardDesc}>Drag-and-drop lead stage management from prospect contact to closed deal.</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Campaign Analytics</div>
                  <div className={styles.cardDesc}>Real-time ROI graphs, conversion tracking, and marketing channel attribution.</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Client Portal</div>
                  <div className={styles.cardDesc}>Transparent client dashboards for project milestone updates and asset approvals.</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Role-Based Access</div>
                  <div className={styles.cardDesc}>Granular security permissions for account managers, strategists, and clients.</div>
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
