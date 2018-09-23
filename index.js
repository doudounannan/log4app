/**
 * @file
 * src/index.js
 * @authors qq616079491@gmail.com
 * @date    2018-09-23 20:12:01
 * @version 1.0.0
 */
'use strict';

const chalk = require('chalk');

exports = module.exports = class Log {
    constructor(options) {
        this.options = options || {};
        this.options.prefix = this.options.prefix|| '[debug]';
        this.options.appName = this.options.appName || 'log4app';
        this.options.tip = `${this.options.prefix}-${this.options.appName}`;

        this.isDebug = process.env.NODE_ENV === 'development';
    }

    get isNode() {
        return new Function('try {return this===global;}catch(e){return false;}')();
    }

    info() {
        let tip = chalk.blue(this.options.tip);

        if (this.isNode) {
            tip = chalk.blue(tip);
        }

        if (this.isDebug) {
            console.info.call(this, tip, ...arguments);
        }
    }

    log() {
        let tip = chalk.green(this.options.tip);

        if (this.isNode) {
            tip = chalk.blue(tip);
        }

        if (this.isDebug) {
            console.log.call(this, tip, ...arguments);
        }
    }

    warn() {
        let tip = chalk.yellow(this.options.tip);

        if (this.isNode) {
            tip = chalk.blue(tip);
        }

        if (this.isDebug) {
            console.warn.call(this, tip, ...arguments);
        }
    }
    error() {
        let tip = chalk.red(this.options.tip);

        if (this.isNode) {
            tip = chalk.blue(tip);
        }

        if (this.isDebug) {
            console.error.call(this, tip, ...arguments);
        }
    }
};
