import styles from './socials.module.css';
import {
  Instagram,
  Twitter,
  GitHub,
} from '../../server-side/SocialIconLinks';

export const Socials = async () => {
  return (
    <div className={styles.social_box}>
      <Instagram />
      <Twitter />
      <GitHub />
    </div>
  );
};

export default Socials;
