const wrapWithI18nProvider = require('./src/components/withI18n').wrapWithI18nProvider;
exports.wrapPageElement = wrapWithI18nProvider;

exports.onServiceWorkerUpdateReady = () => { window.location.reload(true) };
