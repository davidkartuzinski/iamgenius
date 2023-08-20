import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';
import { useTranslation } from '../../i18n';
import { languages } from '../../i18n/settings';
import styles from './footer.module.css';
import Logo from '../server-side/Logo';

export const FooterBase = async ({ lng }) => {
  const { t } = await useTranslation(lng);
  return (
    <>
      <footer className='bg-white dark:bg-gray-900'>
        <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
          <div className='md:flex md:justify-between'>
            <div className='mb-6 md:mb-0'>
              <Link href={`/${lng}`} className='flex items-center'>
                <Logo width={100} />
              </Link>
            </div>
            <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6'>
              <div>
                <h2 className='mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white'>
                  Languages
                </h2>
                <ul className='font-medium text-gray-500 dark:text-gray-400'>
                  <li className='mb-4'>
                    <Trans i18nKey='languageSwitcher' t={t}>
                      Switch from <strong>{{ lng }}</strong> to:
                    </Trans>
                  </li>
                  <li className='mb-4'>
                    {languages
                      .filter((l) => lng !== l)
                      .map((l, index) => {
                        return (
                          <span key={l}>
                            {index > 0 && ' or '}
                            <Link className='underline' href={`/${l}`}>
                              <strong>{l}</strong>
                            </Link>
                          </span>
                        );
                      })}
                  </li>
                </ul>
              </div>

              <div>
                <h2 className='mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white'>
                  Follow us
                </h2>
                <ul className='font-medium text-gray-500 dark:text-gray-400'>
                  <li className='mb-4'>
                    <a
                      href='https://github.com/davidkartuzinski/iamgenius'
                      target='_blank'
                      className='hover:underline '
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://twitter.com/24GeniusTraits'
                      target='_blank'
                      className='hover:underline'
                    >
                      X <small>aka Twitter</small>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className='mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white'>
                  Legal
                </h2>
                <ul className='font-medium text-gray-500 dark:text-gray-400'>
                  <li className='mb-4'>
                    <Link href='#' className='hover:underline'>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='hover:underline'>
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className='my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8' />
          <div className='sm:flex sm:items-center sm:justify-between'>
            <span className='text-sm text-gray-500 dark:text-gray-400 sm:text-left'>
              {t('articleCopyright-1')}
              <br />
              {t('articleCopyright-2')}
            </span>
            <div className='mt-4 flex space-x-5 sm:mt-0 sm:justify-center'>
              <a
                href='https://www.instagram.com/24geniustraits/'
                target='_blank'
                className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
              >
                <svg
                  className='h-5 w-5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='sr-only'>Instagram account</span>
              </a>

              <a
                href='https://twitter.com/24GeniusTraits'
                target='_blank'
                className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
              >
                <svg
                  className='h-4 w-4'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 300 300'
                >
                  <path d='M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66' />
                </svg>
                <span className='sr-only'>Twitter page / X page</span>
              </a>

              <a
                href='https://github.com/davidkartuzinski/iamgenius'
                target='_blank'
                className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
              >
                <svg
                  className='h-4 w-4'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z'
                    clipRule='evenodd'
                  />
                </svg>
                <span className='sr-only'>GitHub account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <footer className={styles.footer}>
        {' '}
        <div className={styles.privacy}>
          <div className='text-sm text-gray-500 dark:text-gray-400 sm:text-left'>
            <p>{t('articleCopyright-1')}</p>
            <p>{t('articleCopyright-2')}</p>
          </div>
          <div className='mt-4 flex space-x-5 sm:mt-0 sm:justify-center'>
            <a
              href='https://www.instagram.com/24geniustraits/'
              target='_blank'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
            >
              <svg
                className='h-5 w-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  fillRule='evenodd'
                  d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                  clipRule='evenodd'
                ></path>
              </svg>
              <span className='sr-only'>Instagram account</span>
            </a>

            <a
              href='https://twitter.com/24GeniusTraits'
              target='_blank'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
            >
              <svg
                className='h-4 w-4'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 300 300'
              >
                <path d='M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66' />
              </svg>
              <span className='sr-only'>Twitter page / X page</span>
            </a>

            <a
              href='https://github.com/davidkartuzinski/iamgenius'
              target='_blank'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
            >
              <svg
                className='h-4 w-4'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='sr-only'>GitHub account</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
