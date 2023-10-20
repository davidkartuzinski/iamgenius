'use client';
import React from 'react';
import styles from './trait-form.module.css';
import * as Collapsible from '@radix-ui/react-collapsible';
import { RowSpacingIcon, Cross2Icon } from '@radix-ui/react-icons';

import TweetThis from '../TweetThis';

function TraitForm({ number, name, children, language }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible.Root
      className={styles.CollapsibleRoot}
      open={open}
      onOpenChange={setOpen}
    >
      <Collapsible.Trigger asChild>
        <span>
          Take Action
          <button className={styles.IconButton}>
            {open ? <Cross2Icon /> : <RowSpacingIcon />}
          </button>
        </span>
      </Collapsible.Trigger>
      {children}

      <Collapsible.Content className={styles.CollapsibleContent}>
        <div className={styles.actions}>
          <TweetThis
            width={'1.5rem'}
            height={'1.5rem'}
            name={name}
            number={number}
            language={language}
            children={children}
          />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
export default TraitForm;
