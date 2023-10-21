'use client';
import React from 'react';
import styles from './trait-form.module.css';
import * as Collapsible from '@radix-ui/react-collapsible';
import { RowSpacingIcon, Cross2Icon } from '@radix-ui/react-icons';
import LocalizedMessage from '../../client-side/LocalizedMessage';

import TweetThis from '../TweetThis';

function TraitForm({ number, name, children, language }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible.Root
      className={styles.CollapsibleRoot}
      open={open}
      onOpenChange={setOpen}
    >
      {children}
      <div>
        <Collapsible.Trigger asChild>
          <span>
            <LocalizedMessage id='traitForm.takeAction' />
            <button className={styles.IconButton}>
              {open ? <Cross2Icon /> : <RowSpacingIcon />}
            </button>
          </span>
        </Collapsible.Trigger>
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
      </div>
    </Collapsible.Root>
  );
}
export default TraitForm;
