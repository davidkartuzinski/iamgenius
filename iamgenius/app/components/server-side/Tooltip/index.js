'use client';

import React from 'react';
import styles from './tooltip.module.css';
import * as Tooltip from '@radix-ui/react-tooltip';
import LocalizedMessage from '../../client-side/LocalizedMessage';

export default function TooltipQuestion({ textID, children }) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className={styles.TooltipContent}
            sideOffset={4}
          >
            <LocalizedMessage id={textID} />
            <Tooltip.Arrow className={styles.TooltipArrow} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
