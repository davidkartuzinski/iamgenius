'use client';

import { FormattedMessage } from 'react-intl';

const LocalizedMessage = ({ id, values }) => (
  <FormattedMessage id={id} values={values} />
);

export default LocalizedMessage;
