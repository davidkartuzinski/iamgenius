import i18nconfig from '@/../i18n/config.json';

function availableLocales() {
  let locales = [];
  i18nconfig.forEach((item) => {
    item.enabled ? locales.push(item) : null;
  });
  return locales;
}

function getLabel() {
  // getLabel of all enabled locales
  let labels = [];
  i18nconfig.forEach((item) => {
    item.enabled ? labels.push(item.localName) : null;
  });
  return labels;
}

export { availableLocales, getLabel };
