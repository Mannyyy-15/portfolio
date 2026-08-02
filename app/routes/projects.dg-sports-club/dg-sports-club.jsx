import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
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
import styles from './dg-sports-club.module.css';

const title = 'D.G. Sports Club Platform';
const description =
  'Premier Sports Academy in Virar, Maharashtra — an enterprise SEO-optimized, high-performance web application designed to increase membership engagement and streamline sports training inquiries.';
const roles = ['Enterprise SEO', 'Full-Stack Web Dev', 'UI/UX Design', 'Performance Optimization'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const DgSportsClub = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.dgSportsClub}>
        <ProjectBackground
          src={sprTexture}
          srcSet={`${sprTexture} 1280w, ${sprTextureLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={sprTexturePlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/Mannyyy-15/dg-sports-club"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sprTexture} 800w, ${sprTextureLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sprTexturePlaceholder}
              alt="D.G. Sports Club web application interface showing academy sports catalog."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Academy Digital Transformation</ProjectSectionHeading>
            <ProjectSectionText>
              D.G. Sports Club required a modern web presence to highlight their premier sports facilities, coaching staff, and athletic programs in Virar, Maharashtra. The primary objective was to maximize organic Google search rankings through structured microdata, lightning-fast Core Web Vitals, and smooth mobile usability.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectSectionColumns className={styles.columns}>
              <div>
                <ProjectSectionHeading>Enterprise Technical Highlights</ProjectSectionHeading>
                <ProjectSectionText>
                  Built with semantic HTML5 architecture, optimized WebP graphics pipeline, Schema.org LocalBusiness JSON-LD markup, and custom CSS design tokens.
                </ProjectSectionText>
                <ProjectSectionText>
                  The interactive portal allows aspiring athletes and parents to view training schedules, submit enrollment queries, and explore academy galleries seamlessly.
                </ProjectSectionText>
              </div>
              <div className={styles.statGrid}>
                <div className={statCardStyle(styles)}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>SEO Audit Score</div>
                </div>
                <div className={statCardStyle(styles)}>
                  <div className={styles.statNumber}>&lt;0.8s</div>
                  <div className={styles.statLabel}>First Contentful Paint</div>
                </div>
                <div className={statCardStyle(styles)}>
                  <div className={styles.statNumber}>10+</div>
                  <div className={styles.statLabel}>Sports Programs Featured</div>
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

function statCardStyle(styles) {
  return styles.statCard;
}
