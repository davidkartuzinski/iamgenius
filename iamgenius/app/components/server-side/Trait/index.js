import styles from './trait.module.css';

import { slugify } from '../../../lib/utils';
import Link from 'next/link';
import TraitForm from '../../client-side/TraitForm';

//https://levelup.gitconnected.com/accessible-anchor-links-a-key-element-of-inclusive-web-design-30e6d786fec9
// https://amberwilson.co.uk/blog/are-your-anchor-links-accessible/

function Trait({ number, name, children, language }) {
  return (
    <TraitForm number={number} name={name} language={language}>
      <div id={`${slugify(name)}`} className={styles.traits}>
        <h3>
          <Link
            href={`/${language}/${slugify(name)}`}
            aria-label={`Go to trait ${number} ${slugify(name)}`}
            className={styles.anchor_link}
          >
            {number}. {name}.
          </Link>
        </h3>
        {children}
      </div>
    </TraitForm>
  );
}

export default Trait;
