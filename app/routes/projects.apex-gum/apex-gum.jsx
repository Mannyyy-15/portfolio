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
import styles from './apex-gum.module.css';

const title = 'Apex GUM Platform';
const description =
  'Modern Web Platform for Apex Global Utilities & Management — built with responsive HTML5/CSS3 graphics, fluid animations, and high performance web design.';
const roles = ['HTML5 / CSS3', 'JavaScript', 'UI/UX Design', 'Performance & SEO'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const ApexGum = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.apexGum}>
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
          url="https://github.com/Mannyyy-15/apex-gum"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sprTexture} 800w, ${sprTextureLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sprTexturePlaceholder}
              alt="Apex GUM platform showcase interface."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Sleek Brand Web Presence</ProjectSectionHeading>
            <ProjectSectionText>
              Apex GUM represents a clean, high-impact web design layout created to deliver maximum information clarity with smooth micro-interactions, responsive typography, and cross-browser reliability.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectSectionColumns className={styles.columns}>
              <div>
                <ProjectSectionHeading>Design & Execution</ProjectSectionHeading>
                <ProjectSectionText>
                  Crafted using modern CSS grid/flexbox layouts, lightweight SVG assets, and optimized page load strategies.
                </ProjectSectionText>
              </div>
              <div className={styles.grid}>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Fluid Responsive UI</div>
                  <div className={styles.cardDesc}>Pixel-perfect adaptivity across mobile, tablet, and widescreen displays.</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Micro-Animations</div>
                  <div className={styles.cardDesc}>Subtle hover effects and scroll transition animations.</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>SEO Optimized</div>
                  <div className={styles.cardDesc}>Clean HTML5 semantic structure and meta tags for search engines.</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Instant Loading</div>
                  <div className={styles.cardDesc}>Minimized script execution and fast asset caching.</div>
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
