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
import styles from './fragilebase.module.css';

const title = 'FragileBase Resilient Data Engine';
const description =
  'Experimental data resiliency system exploring fault-tolerant state synchronization, zero-loss transaction logging, and encryption mechanisms for fragile network environments.';
const roles = ['Systems Architecture', 'Data Encryption', 'State Sync', 'Resiliency Engine'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const FragileBase = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.fragilebase}>
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
          url="https://github.com/Mannyyy-15/fragilebase"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sprTexture} 800w, ${sprTextureLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sprTexturePlaceholder}
              alt="FragileBase transaction telemetry dashboard."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Fault Tolerance by Design</ProjectSectionHeading>
            <ProjectSectionText>
              FragileBase focuses on maintainable data persistence when network connections fluctuate or drop unpredictably. Using localized delta logs, conflict resolution algorithms, and end-to-end payload validation, FragileBase protects state integrity.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectSectionColumns className={styles.columns}>
              <div>
                <ProjectSectionHeading>Engineering Core</ProjectSectionHeading>
                <ProjectSectionText>
                  Built with atomic commit semantics, immutable delta snapshots, and low-latency sync loops.
                </ProjectSectionText>
              </div>
              <div className={styles.grid}>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Delta Log Engine</div>
                  <div className={styles.cardDesc}>Compact differential mutation tracking to reduce bandwidth overhead.</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Conflict Resolution</div>
                  <div className={styles.cardDesc}>Automatic CRDT-inspired merging algorithms for concurrent updates.</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Encrypted Payloads</div>
                  <div className={styles.cardDesc}>AES-256 state encryption at rest and in transit.</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Instant Recovery</div>
                  <div className={styles.cardDesc}>Automatic replay log recovery upon connection re-establishment.</div>
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
