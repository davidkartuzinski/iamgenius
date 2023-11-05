import styles from './socials.module.css';
import { InstagramIcon, TwitterIcon, GitHubIcon } from '../IconLinks';

export const Socials = async () => {
  return (
    <div className={styles.social_box}>
      <InstagramIcon />
      <TwitterIcon />
      <GitHubIcon />
    </div>
  );
};

export default Socials;
