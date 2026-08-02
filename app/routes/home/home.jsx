import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Full-Stack & Web3D Developer',
    description: `Portfolio of ${config.name} — Full-Stack Developer specializing in enterprise web applications, 3D WebGL experiences, and mobile apps.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const projectSeven = useRef();
  const projectEight = useRef();
  const projectNine = useRef();
  const projectTen = useRef();
  const projectEleven = useRef();
  const projectTwelve = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [
      intro,
      projectOne,
      projectTwo,
      projectThree,
      projectFour,
      projectFive,
      projectSix,
      projectSeven,
      projectEight,
      projectNine,
      projectTen,
      projectEleven,
      projectTwelve,
      details,
    ];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      if (section.current) sectionObserver.observe(section.current);
    });

    if (intro.current) indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="D.G. Sports Club Academy"
        description="Enterprise SEO-optimized sports academy portal in Virar, Maharashtra featuring interactive training programs and student metrics."
        buttonText="View project"
        buttonLink="/projects/dg-sports-club"
        model={{
          type: 'image',
          image: '/static/dg-sports-club.png',
          alt: 'D.G. Sports Club web application interface',
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="YatriSync Commuter Transit"
        description="Smart travel & transit synchronization platform enabling real-time commuter assistance and multi-modal routing."
        buttonText="View project"
        buttonLink="/projects/yatrisync"
        model={{
          type: 'image',
          image: '/static/yatrisync.png',
          alt: 'YatriSync transit sync web interface',
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="3D Model Colorizer Studio"
        description="Interactive WebGL 3D browser tool enabling real-time model custom coloring, shader materials, and lighting controls."
        buttonText="View project"
        buttonLink="/projects/3d-model-colorizer"
        model={{
          type: 'image',
          image: '/static/3d-model-colorizer.png',
          alt: '3D Model Colorizer viewport screen',
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="PieCraft Marketing CRM"
        description="Full-featured enterprise agency CRM engineered to automate client lead funnels, campaign analytics, and lead scoring."
        buttonText="View project"
        buttonLink="/projects/piecraft-crm"
        model={{
          type: 'image',
          image: '/static/piecraft-crm.png',
          alt: 'PieCraft CRM dashboard view',
        }}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="The Unknown Band Platform"
        description="Official music band portal featuring live concert schedules, media discography, member gallery, and ticket booking."
        buttonText="View project"
        buttonLink="/projects/theunknownband"
        model={{
          type: 'image',
          image: '/static/theunknownband.png',
          alt: 'The Unknown Band live web interface',
        }}
      />
      <ProjectSummary
        id="project-6"
        alternate
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
        title="ApexWatch System Monitoring"
        description="Intelligent Python-powered watchdog framework for infrastructure telemetry, metric tracking, and alert triggers."
        buttonText="View project"
        buttonLink="/projects/apexwatch"
        model={{
          type: 'image',
          image: '/static/apexwatch.png',
          alt: 'ApexWatch telemetry dashboard',
        }}
      />
      <ProjectSummary
        id="project-7"
        sectionRef={projectSeven}
        visible={visibleSections.includes(projectSeven.current)}
        index={7}
        title="Mumbai Bazar E-Commerce Platform"
        description="Full-stack TypeScript local marketplace enabling local Mumbai vendors with instant catalog discovery and cart checkout."
        buttonText="View project"
        buttonLink="/projects/mumbai-bazar"
        model={{
          type: 'image',
          image: '/static/mumbai-bazar.png',
          alt: 'Mumbai Bazar marketplace interface',
        }}
      />
      <ProjectSummary
        id="project-8"
        alternate
        sectionRef={projectEight}
        visible={visibleSections.includes(projectEight.current)}
        index={8}
        title="Apex GUM Platform"
        description="Modern Web Platform for Apex Global Utilities featuring fluid animations, high performance, and responsive UI."
        buttonText="View project"
        buttonLink="/projects/apex-gum"
        model={{
          type: 'image',
          image: '/static/apex-gum.png',
          alt: 'Apex GUM web application screen',
        }}
      />
      <ProjectSummary
        id="project-9"
        sectionRef={projectNine}
        visible={visibleSections.includes(projectNine.current)}
        index={9}
        title="Chaat Lounge Web & Ordering"
        description="Vibrant restaurant web platform for Chaat Lounge with interactive food menus, online ordering, and table booking."
        buttonText="View project"
        buttonLink="/projects/chaat-lounge"
        model={{
          type: 'image',
          image: '/static/chaat-lounge.png',
          alt: 'Chaat Lounge digital dining menu',
        }}
      />
      <ProjectSummary
        id="project-10"
        alternate
        sectionRef={projectTen}
        visible={visibleSections.includes(projectTen.current)}
        index={10}
        title="FragileBase Resilient Data Engine"
        description="Fault-tolerant database synchronization engine with zero-loss transaction logging and encrypted payload transport."
        buttonText="View project"
        buttonLink="/projects/fragilebase"
        model={{
          type: 'image',
          image: '/static/fragilebase.png',
          alt: 'FragileBase data sync dashboard',
        }}
      />
      <ProjectSummary
        id="project-11"
        sectionRef={projectEleven}
        visible={visibleSections.includes(projectEleven.current)}
        index={11}
        title="Mittron Ice Cream Parlor"
        description="Artisanal ice cream website featuring a dynamic flavor carousel, nutritional specs, outlet locator, and pre-orders."
        buttonText="View project"
        buttonLink="/projects/mittron-icecream"
        model={{
          type: 'image',
          image: '/static/mittron-icecream.png',
          alt: 'Mittron Ice Cream showcase website',
        }}
      />
      <ProjectSummary
        id="project-12"
        alternate
        sectionRef={projectTwelve}
        visible={visibleSections.includes(projectTwelve.current)}
        index={12}
        title="The PieCraft Digital Agency (thepiecraft.in)"
        description="Official web development and digital marketing agency platform featuring interactive service showcases and client funnels."
        buttonText="View project"
        buttonLink="/projects/thepiecraft-dev"
        model={{
          type: 'image',
          image: '/static/thepiecraft-dev.png',
          alt: 'The PieCraft digital agency website',
        }}
      />

      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
