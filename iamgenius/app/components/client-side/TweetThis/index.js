'use client';

import React, { useEffect, useRef, useState } from 'react';

import LocalizedMessage from '../LocalizedMessage';
import styles from './tweet-this.module.css';
import TweetShareButton from '../TweetThisButton';

function TweetThis({
  width,
  height,
  name,
  number,
  language,
  children,
}) {
  const quote = children.props.children[1];

  const h3Ref = useRef(null);
  const [titleText, setTitleText] = useState('');

  const PRef = useRef(null);
  const [paraText, setParaText] = useState('');

  useEffect(() => {
    if (h3Ref.current) {
      setTitleText(h3Ref.current.innerText);
    }
  }, []);

  useEffect(() => {
    if (PRef.current) {
      setParaText(PRef.current.innerText);
    }
  }, []);

  return (
    <>
      <span
        className={`visually-hidden ${styles.span}`}
        aria-hidden='true'
      >
        <article>
          <h3 ref={h3Ref} id={`h3-${number}`}>
            <strong> {name} — </strong>
            <LocalizedMessage id='tweetThis.callToAction' />{' '}
            {name.toLowerCase()}
          </h3>
          <p ref={PRef} id={`p-${number}`}>
            %23{number} <LocalizedMessage id='tweetThis.message' />
          </p>
          <p>
            <strong>{quote}</strong>
          </p>
        </article>
      </span>
      <TweetShareButton
        width={width}
        height={height}
        name={name}
        number={number}
        language={language}
        children={children}
        titleText={titleText}
        paraText={paraText}
      />
    </>
  );
}

export default TweetThis;
