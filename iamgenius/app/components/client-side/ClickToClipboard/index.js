import React from 'react';

export default function ClickToClipboard({ textToCopy, children }) {
  const [isCopied, setIsCopied] = React.useState(false);

  async function copyTextToClipboard(text) {
    return await navigator.clipboard.writeText(text);
  }

  const handleCopyClick = () => {
    copyTextToClipboard(textToCopy)
      .then(() => {
        // if successfull
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const copiedSuccessMessage = (
    <span
      style={{
        fontSize: '50%',
        position: 'absolute',
      }}
    >
      Copied!
    </span>
  );

  return (
    <a onClick={handleCopyClick}>
      {isCopied ? copiedSuccessMessage : children}
    </a>
  );
}
