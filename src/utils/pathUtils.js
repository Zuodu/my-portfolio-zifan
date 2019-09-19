export const getLangFromPath = pathname => {
  if (pathname) {
    const search = pathname.match(/\/\w{2}/g) || ['/fr'];
    return search[0].replace('/', '');
  }
  return 'fr';
};
