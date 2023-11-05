import styles from './arrow-navigation.module.css';

import React from 'react';
import LocalizedMessage from '../../client-side/LocalizedMessage';
import { slugify } from '../../../lib/utils';
import { RightArrowIcon, LeftArrowIcon } from '../IconLinks';

export function RightArrowNavigation({
  children,
  width,
  height,
  name,
  language,
}) {
  return (
    <>
      <RightArrowIcon link={`${language}/${slugify(name)}`} />
    </>
  );
}

export function LeftArrowNavigation({
  children,
  width,
  height,
  name,
  language,
}) {
  return (
    <>
      <LeftArrowIcon link={`/${language}/#${slugify(name)}`} />
    </>
  );
}
