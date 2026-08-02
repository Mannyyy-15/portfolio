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
import styles from './thepiecraft-dev.module.css';

const title = 'The PieCraft Digital Agency Platform (thepiecraft.in)';
const description =
  'Official Web Development & Digital Marketing Agency Web Platform showcasing client case studies, custom digital solutions, service offerings, and interactive client lead capture.';
const roles = ['TypeScript', 'Full-Stack Architecture', 'Agency Web Platform', 'SEO & Performance'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const ThePieCraftDev = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.piecraftDev}>
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
          url="https://github.com/Mannyyy-15/thepiecraft-dev"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sprTexture} 800w, ${sprTextureLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sprTexturePlaceholder}
              alt="The PieCraft agency platform interface highlighting digital services."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Digital Agency Hub</ProjectSectionHeading>
            <ProjectSectionText>
              The PieCraft agency platform communicates core agency capabilities: high-conversion web development, custom software design, digital marketing campaigns, and brand transformation.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectSectionColumns className={styles.columns}>
              <div>
                <ProjectSectionHeading>Core Tech Stack & Features</ProjectSectionHeading>
                <ProjectSectionText>
                  Built with TypeScript, modular component architecture, server-rendered routes for instant loading, and interactive lead capture funnels.
                </ProjectSectionText>
              </div>
              <div className={styles.grid}>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Service Showcase</div>
                  <div className={styles.cardDesc}>Detailed breakdowns for Web Dev, SEO, Marketing & App Development.</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Case Studies</div>
                  <div className={styles.cardDesc}>Interactive portfolio section displaying client success stories and results.</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Lead Funnel</div>
                  <div className={styles.cardDesc}>Automated inquiry booking and consultation scheduling tools.</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>High Performance</div>
                  <div className={styles.cardDesc}>Optimized for top Lighthouse audit scores and Core Web Vitals.</div>
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
