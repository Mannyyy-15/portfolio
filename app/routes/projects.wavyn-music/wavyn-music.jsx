import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
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
import styles from './wavyn-music.module.css';

const title = 'Wavyn Music Player & Streaming';
const description =
  'A sleek Android & Mobile audio application crafted in Kotlin featuring low-latency audio playback, dynamic album-art colors, customizable playlists, and real-time audio visualization.';
const roles = ['Kotlin / Android SDK', 'ExoPlayer Audio Engine', 'Fluid Gesture UI', 'Visualizer Pipeline'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const WavynMusic = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.wavyn}>
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
          url="https://github.com/Mannyyy-15/Wavyn-Music"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`}
              width={375}
              height={750}
              placeholder={gamestackTexturePlaceholder}
              alt="Wavyn Music application interface showing now playing screen with live audio waveform."
              sizes={`(max-width: ${media.mobile}px) 100vw, 375px`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Immersive Mobile Audio</ProjectSectionHeading>
            <ProjectSectionText>
              Wavyn Music delivers an effortless listening experience combining fluid gestures, sleek glassmorphic themes, and instant playback. Built natively with Kotlin and Media3 ExoPlayer, it provides gapless playback, equalizers, and seamless background audio control.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectSectionColumns className={styles.columns}>
              <div>
                <ProjectSectionHeading>Key Highlights</ProjectSectionHeading>
                <ProjectSectionText>
                  Focuses on aesthetic visualizer feedback, adaptive UI themes derived from song cover artwork, and ultra-low battery consumption during background streaming.
                </ProjectSectionText>
              </div>
              <div className={styles.grid}>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Native Audio Engine</div>
                  <div className={styles.cardDesc}>Built on ExoPlayer Media3 for high-fidelity gapless audio playback.</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Dynamic Theme Palette</div>
                  <div className={styles.cardDesc}>Real-time Palette extraction from album cover art to dynamically accent the player.</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Audio Visualizer</div>
                  <div className={styles.cardDesc}>Real-time FFT audio spectrum visualizers synced to track frequencies.</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Playlist Management</div>
                  <div className={styles.cardDesc}>Smart queues, favorite tracks, and local media library indexing.</div>
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
