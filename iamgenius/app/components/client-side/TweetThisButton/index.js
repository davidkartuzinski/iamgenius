import styles from './tweet-this-button.module.css';

import React from 'react';
import { Twitter } from '../../server-side/SocialIconLinks';
import { slugify } from '@/app/lib/utils';

function TweetShareButton({
  language,
  name,
  width,
  height,
  children,
  titleText,
  paraText,
}) {
  const quote = children.props.children[1];

  const TweetAnchorLink = `https://iamgenius.io/${language}/%23${slugify(
    name
  )}`;

  const text = `${titleText}!%0a${quote}%0a${paraText}%0a`;
  const twitterQuery = `text=${text}&url=${TweetAnchorLink}`;

  const twitterUrl = `https://twitter.com/intent/tweet/?${twitterQuery}&`;

  return (
    <>
      <Twitter width={width} height={height} link={twitterUrl} />
    </>
  );
}

export default TweetShareButton;