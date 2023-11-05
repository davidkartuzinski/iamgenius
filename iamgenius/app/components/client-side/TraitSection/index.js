'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import styles from './trait-section.module.css';

import TweetThis from '../TweetThis';
import PrintPDF from '../PrintPDF';
import {
  RightArrowNavigation,
  LeftArrowNavigation,
} from '../../server-side/ArrowNavigation';

import { ClickToCopy } from '../../server-side/IconLinks';

function TraitSection({ number, name, children, language }) {
  const pathname = usePathname();

  return (
    <section className={styles.trait_section}>
      {children}

      <div className={styles.trait_icons}>
        <div className={styles.trait_icon_div}>
          {pathname === `/${language}` ? (
            <>
              <RightArrowNavigation language={language} name={name} />
            </>
          ) : (
            <>
              <LeftArrowNavigation language={language} name={name} />
            </>
          )}
        </div>
        <div className={styles.trait_icon_div}>
          <TweetThis
            width={'1.4rem'}
            height={'1.4rem'}
            name={name}
            number={number}
            language={language}
            children={children}
            textID={'icons.twitter'}
          />
        </div>
        <div className={styles.trait_icon_div}>
          <PrintPDF
            language={language}
            name={name}
            children={children}
            width={'1.4rem'}
            height={'1.4rem'}
          >
            {children}
          </PrintPDF>
        </div>
        <div className={styles.trait_icon_div}>
          <ClickToCopy
            width={'1.4rem'}
            height={'1.4rem'}
            name={name}
            language={language}
          />
        </div>
      </div>
      <hr className={styles.trait_hr} />
    </section>
  );
}
export default TraitSection;
