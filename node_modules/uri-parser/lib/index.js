/*
 * Loader for the URI-Parser module
 *
 * Copyright 2011, Stuart Hudson <goulash1971@yahoo.com>
 * Released under the terms of the MIT License.
 *
 * Version 1.0.1
 */

var Parser = require('./parser');
var p = new Parser();

exports.Parser = Parser;

/**
 * Expose the important methods of the Parser for the module
 */
exports.parse = p.parse;
exports.complete = p.complete;
exports.format = p.format;
