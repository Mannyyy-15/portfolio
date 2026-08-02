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
import styles from './theunknownband.module.css';

const title = 'The Unknown Band Platform';
const description =
  'Official high-vibe music band website featuring tour schedules, discography streams, band member gallery, and ticket booking integration.';
const roles = ['React', 'Web Design', 'Audio Player', 'Tour Management'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const TheUnknownBand = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.band}>
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
          url="https://theunknownband.netlify.app/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              src="/static/theunknownband.png"
              srcSet="/static/theunknownband.png 1920w"
              width={1920}
              height={1080}
              placeholder="/static/theunknownband.png"
              alt="The Unknown Band official live web interface."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Digital Stage & Tour Experience</ProjectSectionHeading>
            <ProjectSectionText>
              The Unknown Band web portal serves as an interactive digital stage connecting fans with upcoming live concerts, music releases, and merchandise. Designed with moody dark aesthetics, high-res performance photography, and seamless audio previews.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectSectionColumns className={styles.columns}>
              <div>
                <ProjectSectionHeading>Key Features</ProjectSectionHeading>
                <ProjectSectionText>
                  Built with Netlify continuous deployment, responsive audio media player integrations, and tour event routing for seamless fan engagement.
                </ProjectSectionText>
              </div>
              <div className={styles.grid}>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Live Tour Dates</div>
                  <div className={styles.cardDesc}>Interactive concert schedule with venue directions and ticket booking integration.</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Media Discography</div>
                  <div className={styles.cardDesc}>Embedded streaming previews for albums, singles, and live performance videos.</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Band Gallery</div>
                  <div className={styles.cardDesc}>High-resolution performance photo gallery with smooth lightbox viewing.</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Fan Club Portal</div>
                  <div className={styles.cardDesc}>Newsletter signup and direct VIP access for exclusive release updates.</div>
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
