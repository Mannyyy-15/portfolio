import sliceAppLarge from '~/assets/slice-app-large.jpg';
import sliceAppPlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceApp from '~/assets/slice-app.jpg';
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
import styles from './3d-model-colorizer.module.css';

const title = '3D Model Colorizer Studio';
const description =
  'Interactive 3D WebGL application designed for real-time model loading, mesh segment inspection, custom texture painting, and dynamic material lighting adjustments using Three.js.';
const roles = ['Three.js & WebGL', 'JavaScript', '3D Asset Pipeline', 'Custom Shader UI'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const ThreeDModelColorizer = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.colorizer}>
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
          url="https://github.com/Mannyyy-15/3d-Model-Colorizer"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt="3D Model Colorizer interactive canvas viewport showing a 3D model with custom texture application."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Interactive 3D Customization in the Browser</ProjectSectionHeading>
            <ProjectSectionText>
              3D Model Colorizer allows designers, 3D artists, and developers to load OBJ/GLTF 3D models and visually experiment with color schemes, metallic roughness parameters, and material textures without opening heavy desktop CAD applications.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectSectionColumns className={styles.columns}>
              <div>
                <ProjectSectionHeading>Technical Pipeline</ProjectSectionHeading>
                <ProjectSectionText>
                  The tool leverages Three.js scene graphs, orbit controls, raycasting for mesh segment targeting, and dynamic shader material swapping to deliver 60 FPS real-time render performance.
                </ProjectSectionText>
              </div>
              <div className={styles.techGrid}>
                <div className={styles.techCard}>
                  <div className={styles.techTitle}>GLTF / OBJ Loader</div>
                  <div className={styles.techDesc}>Seamless mesh parsing and hierarchy tree traversal for complex 3D models.</div>
                </div>
                <div className={styles.techCard}>
                  <div className={styles.techTitle}>Raycast Segmentation</div>
                  <div className={styles.techDesc}>Click-to-select individual model sub-meshes for pinpoint material painting.</div>
                </div>
                <div className={styles.techCard}>
                  <div className={styles.techTitle}>Real-time Shaders</div>
                  <div className={styles.techDesc}>Custom Phong & PBR material properties with lighting controls.</div>
                </div>
                <div className={styles.techCard}>
                  <div className={styles.techTitle}>60 FPS Performance</div>
                  <div className={styles.techDesc}>Optimized render loops with requestAnimationFrame and WebGL memory cleanup.</div>
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
