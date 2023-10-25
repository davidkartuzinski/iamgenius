import styles from './right-arrow-navigation.module.css';

import React from 'react';
import LocalizedMessage from '../../client-side/LocalizedMessage';
import { slugify } from '../../../lib/utils';
import { RightArrowIcon } from '../IconLinks';

function RightArrowNavigation({
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
export default RightArrowNavigation;
