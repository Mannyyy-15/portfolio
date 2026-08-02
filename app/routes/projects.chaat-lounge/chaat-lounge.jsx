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
import styles from './chaat-lounge.module.css';

const title = 'Chaat Lounge Web & Ordering Experience';
const description =
  'Vibrant restaurant web platform for Chaat Lounge featuring an interactive digital food menu, online order placement, table reservation system, and location discovery.';
const roles = ['React / Web Dev', 'UI/UX Design', 'Digital Menu Interface', 'Ordering Portal'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const ChaatLounge = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.chaatLounge}>
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
          url="https://github.com/Mannyyy-15/chaat-lounge"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt="Chaat Lounge digital dining menu and online order interface."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Culinary Digital Experience</ProjectSectionHeading>
            <ProjectSectionText>
              Chaat Lounge combines rich food photography with rapid online menu browsing. Customers can filter dietary options, customize spice levels, schedule table bookings, and place takeaway orders effortlessly on mobile or desktop.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectSectionColumns className={styles.columns}>
              <div>
                <ProjectSectionHeading>Platform Features</ProjectSectionHeading>
                <ProjectSectionText>
                  Designed with mouth-watering UI aesthetics, instant dish filtering, and streamlined checkout workflows.
                </ProjectSectionText>
              </div>
              <div className={styles.grid}>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Interactive Menu</div>
                  <div className={styles.cardDesc}>Categorized menu with dish customization options and nutritional info.</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Table Reservations</div>
                  <div className={styles.cardDesc}>Instant online booking system with date/time selection.</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Mobile First</div>
                  <div className={styles.cardDesc}>Optimized touch interface for quick ordering on smartphones.</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Store Locator</div>
                  <div className={styles.cardDesc}>Interactive map directions and branch contact details.</div>
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
