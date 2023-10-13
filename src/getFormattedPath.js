'use strict';

const path = require('path');

const reqDirName = 'file';
const resDirName = 'public';
const getFormattedPath = (pathName) => {
  const pathWithFormattedDir = pathName.replace(reqDirName, resDirName);

  return path.basename(pathWithFormattedDir) === resDirName
    ? `${pathWithFormattedDir}/index.html`
    : pathWithFormattedDir;
};

exports.getFormattedPath = getFormattedPath;
