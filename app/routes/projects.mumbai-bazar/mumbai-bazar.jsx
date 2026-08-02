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
import styles from './mumbai-bazar.module.css';

const title = 'Mumbai Bazar E-Commerce Platform';
const description =
  'Full-stack TypeScript E-Commerce marketplace designed to empower local Mumbai vendors with instant product catalog discovery, fast cart checkout, and vendor portals.';
const roles = ['TypeScript', 'React / Node.js', 'E-Commerce APIs', 'Vendor Portal'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const MumbaiBazar = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.mumbaiBazar}>
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
          url="https://github.com/Mannyyy-15/mumbai-bazar"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt="Mumbai Bazar marketplace storefront showcasing featured products."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Digitalizing Local Commerce</ProjectSectionHeading>
            <ProjectSectionText>
              Mumbai Bazar bridges local commerce with digital retail capabilities. Small merchants in Mumbai can create online product storefronts, manage inventory in real-time, and process customer orders through an intuitive interface.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectSectionColumns className={styles.columns}>
              <div>
                <ProjectSectionHeading>E-Commerce Architecture</ProjectSectionHeading>
                <ProjectSectionText>
                  Built with React and TypeScript frontend, integrated search filtering, reactive state management, and optimized asset delivery for fast loading even on 3G mobile networks.
                </ProjectSectionText>
              </div>
              <div className={styles.grid}>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Vendor Storefronts</div>
                  <div className={styles.cardDesc}>Customizable catalog pages for local shops and artisans.</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Instant Search</div>
                  <div className={styles.cardDesc}>Fuzzy search and category filtering for fast product discovery.</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Frictionless Checkout</div>
                  <div className={styles.cardDesc}>Simplified cart management and quick payment flow integration.</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Order Telemetry</div>
                  <div className={styles.cardDesc}>Real-time status updates from order placement to final delivery.</div>
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
