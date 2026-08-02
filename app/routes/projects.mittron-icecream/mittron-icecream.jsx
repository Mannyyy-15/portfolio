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
import styles from './mittron-icecream.module.css';

const title = 'Mittron Ice Cream Parlor Website';
const description =
  'Delightful, vibrant web showcase for Mittron Ice Cream featuring custom flavor carousel, nutritional details, store finder, and online pre-ordering interface.';
const roles = ['Frontend Web Dev', 'UI/UX Design', 'Interactive Flavor Showcase', 'Responsive Layout'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const MittronIcecream = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.mittron}>
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
          url="https://github.com/Mannyyy-15/Mittron-Icecream-Website"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt="Mittron Ice Cream website homepage showcasing artisanal flavors."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Artisanal Brand Storytelling</ProjectSectionHeading>
            <ProjectSectionText>
              Mittron Ice Cream’s web presence highlights their premium ingredients and handcrafted recipes. The website blends colorful design tokens, playful animations, and simple navigation to boost customer footfall and online delivery inquiries.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectSectionColumns className={styles.columns}>
              <div>
                <ProjectSectionHeading>Visual & Interactive Design</ProjectSectionHeading>
                <ProjectSectionText>
                  Built with responsive CSS modules, smooth scroll triggers, and optimized high-resolution product photography.
                </ProjectSectionText>
              </div>
              <div className={styles.grid}>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Flavor Carousel</div>
                  <div className={styles.cardDesc}>Interactive catalog displaying seasonal and signature ice cream flavors.</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Pre-order Portal</div>
                  <div className={styles.cardDesc}>Quick pre-ordering for party tubs and catering orders.</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Store Locator</div>
                  <div className={styles.cardDesc}>Find nearby Mittron ice cream outlets with live maps.</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Vibrant Aesthetics</div>
                  <div className={styles.cardDesc}>Custom pastel color palette and engaging typography.</div>
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
