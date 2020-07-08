const fs = require('fs');
const data = require('./manifest-data');

fs.writeFile(
    './manifest.json',
    JSON.stringify(data),
    error =>
        error && console.log('cannot write manifest.json', { error })
);