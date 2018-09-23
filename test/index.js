#! /usr/bin/env node
/**
 * @file
 * test/index.js
 * @authors qq616079491@gmail.com
 * @date    2018-09-23 20:12:01
 * @version 1.0.0
 */
const Log = require('../index.js');

const log = new Log({
    appName: 'test'
});

log.info('test-info');
log.log('test-log');
log.warn('test-warn');
log.error('test-error');

