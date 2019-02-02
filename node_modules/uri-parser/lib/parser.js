/*
 * URI Parser
 *
 * Copyright 2011, Stuart Hudson <goulash1971@yahoo.com>
 * Released under the terms of the MIT License.
 * 
 * Version 1.0.0
 */
var parseUri = require("./parseUri");

/**
 * Utility function that will sort a query (keys and values) and produce a new
 * query string that is sorted by key order.
 *
 * @param {Object} query as keys and values
 * @return {String} a new query strinng sorted in key order
 * @api private
 */
function sortedQuery (query) {
  var keys = [], name, i, len, key, sorted = [];
  for (name in query) {
    for (i = 0, len = keys.length; i < len; i++) {
      if (keys[i] >= name) break;
    }
    keys.splice(i, 0, name);
  }
  for (i = 0, len = keys.length; i < len; i++) {
    key = keys[i];
    sorted.push(key + "=" + query[key]);
  }
  if (sorted.length !== 0)
	return sorted.join("&");
};

/**
 * Macro function that returns {@code true} if the {@param value} supplied
 * is not {@code undefined} and not {@code null}
 *
 * @param {Mixed} value to test
 * @return {Boolean} indicating if the value is set
 * @api private
 */
function isSet(value) {
	if ((value !== undefined) && (value !== null))
		return value !== '';
	return false;
}

/**
 * Macro function that returns the {@param value} if it is not {@code undefined} 
 * and not {@code null} otherwise returns ane empty string
 *
 * @param {Mixed} value to test
 * @return {String} teh string {@param value} or empty string
 * @api private
 */
function value(value) {
	if ((value !== undefined) && (value !== null))
		return value;
	return '';
}

/**
 * Macro function that returns the {@param value} with a {@param prefix} if it 
 * is not {@code undefined} and not {@code null} otherwise returns ane empty string
 *
 * @param {Mixed} value to test
 * @parem {String} the prefix
 * @return {String} the prefixed {@param value} or empty string
 * @api private
 */
function prefix(value, prefix) {
	if ((value !== undefined) && (value !== null))
		return prefix + value;
	return '';
}

/**
 * Macro function that returns the {@param value} with a {@param suffix} if it 
 * is not {@code undefined} and not {@code null} otherwise returns ane empty string
 *
 * @param {Mixed} value to test
 * @parem {String} the suffix
 * @return {String} the suffixed {@param value} or empty string
 * @api private
 */
function suffix(value, suffix) {
	if ((value !== undefined) && (value !== null))
		return value + suffix;
	return '';
}

/**
 * Parser constructor that takes some options for the parser used
 * to control parseUri and other things.
 *
 * @param {Object} options for the Parser
 * @api public
 */
function Parser (options) {
	this.options = options;
};


/**
 * Method that will parse a given {@param uriStr} into it's components
 * in either 'loose' (default) or 'strict' mode.
 *
 * @param {String} the URI string to be parsed
 * @param {Boolean} set if we want 'strict' parsing
 * @return {Object} parsed URI
 * @api public
 * {@see parseUri}
 */
Parser.prototype.parse = function (uriStr, strictMode) {
	if (strictMode === true) return parseUri (uriStr, "strict");
	return parseUri (uriStr);
};


/**
 * Method that will 'complete' a URI definition by combining the low level
 * components (if defined) into values for the higher level components.
 *
 * @param {Object} URI as components
 * @return {Object} completed URI with high level components
 * @api private
 */
Parser.prototype.complete = function (obj) {
	if (typeof obj === 'string') obj = this.parse(obj);
	if ((!isSet(obj.userInfo)) && 
		(isSet(obj.user) || isSet(obj.password)))
		obj.userInfo = value(obj.user) + prefix(obj.password, ':');
	if (!isSet(obj.authority) && 
		(isSet(obj.userInfo) || isSet(obj.host) || isSet(obj.port)))
		obj.authority = suffix(obj.userInfo, '@') + value(obj.host) + prefix(obj.port, ':');
	if ((!isSet(obj.query)) && isSet(obj.queryKey)) 
		obj.query = sortedQuery(obj.queryKey);
	if ((!isSet(obj.relative)) && 
		(isSet(obj.directory) || isSet(obj.file)))
		obj.relative = value(obj.directory) + value(obj.file);
	if (!isSet(obj.relative) && 
		(isSet(obj.path) || isSet(obj.query) || isSet(obj.anchor)))
		obj.relative = value(obj.path) + prefix(obj.query, '?') + prefix(obj.anchor, '#');
	return obj;
};

/**
 * Method that will create a {String} from an URI thatis specified as a series of
 * URI components
 *
 * @param {Object} the URI components
 * @return {String} the formatted URI
 * @api public
 */
Parser.prototype.format = function (obj) {
	obj = this.complete(obj);
	return (suffix(obj.protocol, ':').toLowerCase() + 
			prefix(obj.authority, '//') + value(obj.relative));
};


/**
 * Expose the Parser
 */
module.exports = exports = Parser;
