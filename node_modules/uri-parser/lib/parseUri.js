// parseUri 1.2.2
// (c) Steven Levithan <stevenlevithan.com>
// MIT License

function parseUri (str, mode) {
	var	o   = parseUri.options;
	if (mode === undefined) mode = (o.strictMode ? "strict" : "loose");
	var	m   = o.parser[mode].exec(str),
	uri = {},
	i   = 14;
	
	while (i--) uri[o.key[i]] = m[i] || "";
	
	uri[o.q.name] = {};
	uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
		if ($1) {
			if (uri[o.q.name][$1] === undefined) {
				uri[o.q.name][$1] = $2;
			} else if (typeof uri[o.q.name][$1] === '[object Array]') {
				uri[o.q.name][$1].push($2);
			} else if (typeof uri[o.q.name][$1] === 'string') {
				uri[o.q.name][$1] = [ uri[o.q.name][$1], $2];
			}
		}
	});
	
	return uri;
};

parseUri.options = {
	strictMode: false,
	key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
	q:   {
		name:   "queryKey",
		parser: /(?:^|&)([^&=]*)=?([^&]*)/g
	},
	parser: {
		strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
		loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
	}
};

module.exports = parseUri;