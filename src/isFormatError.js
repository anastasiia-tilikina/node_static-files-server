'use strict';

const correctDirName = 'public';
const isFormatError = (pathName) => {
  return !pathName.startsWith(`/${correctDirName}/`)
    && !pathName.endsWith(`/${correctDirName}`);
};

exports.isFormatError = isFormatError;
