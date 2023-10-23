'use client';

import styles from './print-pdf.module.css';

import React from 'react';
import { useReactToPrint } from 'react-to-print';
import { PDFIcon } from '../server-side/SocialIconLinks';
import LocalizedMessage from '../client-side/LocalizedMessage';

import { slugify } from '../../lib/utils';

function PrintPDF({ children, width, height, name, language }) {
  const componentRef = React.useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Visitor Pass',
    onAfterPrint: () => console.log('Printed PDF Successfully!'),
  });

  const handleClick = (event) => {
    event.preventDefault();
    handlePrint();
  };

  return (
    <>
      <div className={styles.hidden_for_print} ref={componentRef}>
        <h1>
          <LocalizedMessage id='printPDF.iAmGenius' />
          ...
        </h1>
        {children}
        <span>
          www.iamgenius.io/{language}/#{slugify(name)}
        </span>
      </div>
      <PDFIcon width={width} height={height} onClick={handleClick} />
    </>
  );
}
export default PrintPDF;
