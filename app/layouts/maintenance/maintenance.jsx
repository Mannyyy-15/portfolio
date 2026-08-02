import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import config from '~/config.json';
import styles from './maintenance.module.css';

export function Maintenance() {
  return (
    <div className={styles.maintenance}>
      <div className={styles.badge}>
        <span className={styles.dot} />
        System Under Maintenance
      </div>

      <h1 className={styles.title}>
        <DecoderText text="Website Under Management" delay={300} />
      </h1>

      <p className={styles.description}>
        This portfolio website is currently paused for scheduled management, infrastructure upgrades, and system updates. We will be back online shortly.
      </p>

      <div className={styles.card}>
        <div className={styles.cardTitle}>Need to reach out?</div>
        <div className={styles.cardText}>
          For urgent inquiries, project consultations, or direct contact, feel free to connect via WhatsApp or social channels:
        </div>
        <div className={styles.socials}>
          <Button href={config.whatsapp} iconEnd="arrow-right">
            WhatsApp Contact
          </Button>
          <Button href={config.instagram} secondary iconEnd="arrow-right">
            Instagram
          </Button>
        </div>
      </div>

      <div className={styles.footerNote}>
        © {new Date().getFullYear()} {config.name}. All rights reserved.
      </div>
    </div>
  );
}
