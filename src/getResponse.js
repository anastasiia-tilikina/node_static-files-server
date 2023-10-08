'use strict';

const fs = require('fs/promises');
const { isFormatError } = require('./isFormatError');

const rootDirName = 'src';
const errorMessages = {
  // eslint-disable-next-line max-len
  wrongFormat: 'Bad request! Your request address should start with "/file/<FILE_NAME>"',
  fileNotExists: 'File does not exist',
};
const getResponse = async(pathName) => {
  if (isFormatError(pathName)) {
    return {
      code: 400,
      body: errorMessages.wrongFormat,
    };
  }

  try {
    const data = await fs.readFile(`${rootDirName}/${pathName}`);

    return {
      code: 200,
      body: data,
    };
  } catch (err) {
    return {
      code: 404,
      body: errorMessages.fileNotExists,
    };
  }
};

exports.getResponse = getResponse;
