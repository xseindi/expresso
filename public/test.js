/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

function Define ($, key, value, option = {}) {
	if (key) Object.defineProperty ($, key, {enumerable: option.enumerable || false, configurable: option.configurable || false, writable: option.writable || false, value});
	else return new Define.properties ($);
	}
Define.properties = class {
	constructor (property) {
		this.property = property;
		}
	export (data) {
		return this.property.exports = data;
		}
	}

/**
 * object
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Define (Object, "define", Define);

Define (Object, "type", function (input) { return typeof input; });
Define (Object.type, "array", function (input) { if (arguments.length) return input instanceof Array || typeof input === "array"; else return Array; });
Define (Object.type, "boolean", function (input) { if (arguments.length) return input instanceof Boolean || typeof input === "boolean"; else return Boolean; });
Define (Object.type, "buffer", function (input) { if (arguments.length) return input instanceof Buffer || typeof input === "buffer"; else return Boolean; });
Define (Object.type, "date", function (input) { if (arguments.length) return input instanceof Date || typeof input === "date"; else return Date; });
Define (Object.type, "error", function (input) { if (arguments.length) return input instanceof Error || typeof input === "error"; else return Error; });
Define (Object.type, "function", function (input) { if (arguments.length) return input instanceof Function || typeof input === "function"; else return Function; });
Define (Object.type, "number", function (input) { if (arguments.length) return input instanceof Number || typeof input === "number"; else return Number; });
Define (Object.type, "object", function (input) { if (arguments.length) return input instanceof Object || typeof input === "object"; else return Object; });
Define (Object.type, "promise", function (input) { if (arguments.length) return input instanceof Promise || typeof input === "promise"; else return Promise; });
Define (Object.type, "regex", function (input) { if (arguments.length) return input instanceof RegExp || typeof input === "regex"; else return RegExp; });
Define (Object.type, "string", function (input) { if (arguments.length) return input instanceof String || typeof input === "string"; else return String; });

Define (Object, "type_of", function (input) { return Object.prototype.toString.call (input); });
Define (Object.type_of, "array", function (input) { if (arguments.length) return Object.type_of (input) === "[object Array]"; else return "[object Array]"; });
Define (Object.type_of, "boolean", function (input) { if (arguments.length) return Object.type_of (input) === "[object Boolean]"; else return "[object Boolean]"; });
Define (Object.type_of, "buffer", function (input) { if (arguments.length) return Object.type_of (input) === "[object Buffer]"; else return "[object Buffer]"; });
Define (Object.type_of, "date", function (input) { if (arguments.length) return Object.type_of (input) === "[object Date]"; else return "[object Date]"; });
Define (Object.type_of, "function", function (input) { if (arguments.length) return Object.type_of (input) === "[object Function]"; else return "[object Function]"; });
Define (Object.type_of, "null", function (input) { if (arguments.length) return Object.type_of (input) === "[object Null]"; else return "[object Null]"; });
Define (Object.type_of, "number", function (input) { if (arguments.length) return Object.type_of (input) === "[object Number]"; else return "[object Number]"; });
Define (Object.type_of, "object", function (input) { if (arguments.length) return Object.type_of (input) === "[object Object]"; else return "[object Object]"; });
Define (Object.type_of, "promise", function (input) { if (arguments.length) return Object.type_of (input) === "[object Promise]"; else return "[object Promise]"; });
Define (Object.type_of, "regex", function (input) { if (arguments.length) return Object.type_of (input) === "[object RegExp]"; else return "[object RegExp]"; });
Define (Object.type_of, "string", function (input) { if (arguments.length) return Object.type_of (input) === "[object String]"; else return "[object String]"; });

Define (Object, "length", function (object) { return Object.keys (object).length; });

/**
 * array
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Define (Array.prototype, "json", function () { return JSON.pretty (this); });
Define (Array.prototype, "clone", function () { return JSON.parse (JSON.stringify (this)); });
Define (Array.prototype, "exist", function (value, offset) { if (Array.isArray (value)) { for (var i in value) if (this.includes (value [i])) return true; return false; } else return this.includes (value, offset); });
Define (Array.prototype, "first", function () { for (var i in this) return this [i]; return undefined; }); Define (Array.prototype, "one", function () { return this.first (); });
Define (Array.prototype, "last", function () { var value; for (var i in this) value = this [i]; return value; });
Define (Array.prototype, "max", function () { return Math.max (... this); });
Define (Array.prototype, "min", function () { return Math.min (... this); });
Define (Array.prototype, "shuffle", function () { var array = this.clone (); var current = array.length, random; while (current !== 0) { random = Math.floor (Math.random () * current); current --; [array [current], array [random]] = [array [random], array [current]]; } return array; });
Define (Array.prototype, "limit", function (limit) { return this.clone ().slice (0, limit); });
Define (Array.prototype, "page", function (page, limit) { return this.clone ().slice (((page - 1) * (limit || Array.config.page.limit)), (page * (limit || Array.config.page.limit))); });
Define (Array.prototype, "distinct", function (key = "id", distinct = []) { return this.filter (function (array) { if (distinct.includes (array [key])) return false; else { distinct.push (array [key]); return true; } }); });
Define (Array.prototype, "implode", function (data) { var array = this.clone (); array.push (... data); return array; });

Define (Array.prototype, "select", function (filter) {
	return this.filter (function (array, index) {
		var error = 0;
		for (var i in filter) {
			if (typeof filter [i] === "object") {
				if (filter [i].key === "!") {
					if (filter [i].value !== array [i]) continue;
					else error ++;
					}
				}
			else if (Array.isArray (filter [i])) if (filter [i].includes (array [i])) continue; else error ++;
			else if (Array.isArray (array [i])) if (array [i].includes (filter [i])) continue; else error ++;
			else if (filter [i] === array [i]) continue;
			else error ++;
			}
		if (error) return false;
		else return true;
		});
	});

Define (Array.prototype, "order", function (sort) {
	var array = this.clone (), type = "string";
	var object = sort.split (".");
	if (object.length > 2) {
		if (this.length) if (typeof this [0][object [0]][object [1]][object [2]] === "number") type = "number";
		if (type === "string") array.sort (function (a, b) { return a [object [0]][object [1]][object [2]].localeCompare (b [object [0]][object [1]][object [2]]); });
		if (type === "number") array.sort (function (a, b) { return a [object [0]][object [1]][object [2]] - b [object [0]][object [1]][object [2]]; });
		}
	else if (object.length > 1) {
		if (this.length) if (typeof this [0][object [0]][object [1]] === "number") type = "number";
		if (type === "string") array.sort (function (a, b) { return a [object [0]][object [1]].localeCompare (b [object [0]][object [1]]); });
		if (type === "number") array.sort (function (a, b) { return a [object [0]][object [1]] - b [object [0]][object [1]]; });
		}
	else {
		if (this.length) if (typeof this [0][sort] === "number") type = "number";
		if (type === "string") array.sort (function (a, b) { return a [sort].localeCompare (b [sort]); });
		if (type === "number") array.sort (function (a, b) { return a [sort] - b [sort]; });
		}
	return array;
	});

Define (Array, "config", function (array = {}) {
	if ("page" in array) if ("limit" in array.page) Array.config.page.limit = array.page.limit;
	});
Define (Array.config, "page", {limit: 20}, {writable: true});

/**
 * string
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Define (String.prototype, "number", function () { return Number (this); });
Define (String.prototype, "integer", function () { return parseInt (this); });
Define (String.prototype, "float", function () { return parseFloat (this); });
Define (String.prototype, "json", function (type = "object") { try { return JSON.parse (this); } catch (e) { return type === "object" ? {} : []; } });
Define (String.prototype, "clone", function () { return this.trim (); });
Define (String.prototype, "format", function (format) { var string = this.trim (); for (var i in format) string = string.split (`{{ ${i} }}`).join (format [i]); return string; });
Define (String.prototype, "small", function () { return this.toLowerCase (); });
Define (String.prototype, "big", function () { return this.toUpperCase (); });
Define (String.prototype, "after", function (input, offset) { if ((offset = this.indexOf (input, offset)) >= 0) return this.substr (offset + input.length); else return ""; });
Define (String.prototype, "before", function (input, offset) { if ((offset = this.indexOf (input, offset)) >= 0) return this.substr (0, offset); else return ""; });
Define (String.prototype, "pop", function (length = 1) { return this.substr (0, (this.length - length)); });
Define (String.prototype, "exist", function (input, offset) { return this.includes (input, offset); });
Define (String.prototype, "reverse", function () { return this.split ("").reverse ().join (""); });
Define (String.prototype, "join", function (string) { return this + string; });
Define (String.prototype, "shuffle", function () { return this.split ("").shuffle ().join (""); });

Define (String, "char", function () {});
Define (String.char, "small", "abcdefghijklmnopqrstuvwxyz");
Define (String.char, "big", "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
Define (String.char, "alpha", {numeric: "abcdefghijklmnopqrstuvwxyz" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "0123456789"});
Define (String.char, "space", " ");
Define (String.char, "underscore", "_");

/**
 * number
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Define (Number.prototype, "number", function () { return this; });
Define (Number.prototype, "integer", function () { return parseInt (this); });
Define (Number.prototype, "string", function () { return this.toString (); });
Define (Number.prototype, "shuffle", function (number) { return Math.floor (Math.random () * (number - this + 1)) + this; });

Define (Number, "format", function (input, separator = ",") {
	var number = input.toString ().split (""), n = [], x = 0;
	number.reverse ();
	for (var i in number) {
		if (x > 2) if ((x = 0) === 0) n.push (separator);
		x ++;
		n.push (number [i]);
		}
	n.reverse ();
	return n.join ("");
	})

/**
 * date
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Define (Date, "io", class {
	constructor (date) {
		if (date instanceof Date) this.date = date;
		else if (date) this.date = new Date (date);
		else this.date = new Date ();
		}
	string () { return this.format ("string"); }
	format (format = "default") {
		var date = {
			"Y": this.year (),
			"M": this.month (), "m": Date.month.name [this.month ()],
			"D": this.day (), "d": Date.month.name [this.week ()], "W": this.week (),
			"H": this.hour (), "h": this.hour ("meredian"),
			"I": this.minute (),
			"S": this.second (),
			"A": this.meredian (),
			}
		format = Date.format [format] || format;
		for (var i in date) format = format.split (i).join (date [i]);
		return format;
		}
	year () { return this.date.getFullYear (); }
	month () { return (this.date.getMonth () + 1).toString ().padStart (2, "0"); }
	day () { return this.date.getDate ().toString ().padStart (2, "0"); }
	week () { return this.date.getDay ().toString ().padStart (2, "0"); }
	hour (meredian) { if (meredian) { var hour = this.date.getHours (); if (this.meredian () === "PM") if (hour === 12) return hour.toString (); else return (hour - 12).toString ().padStart (2, "0"); else return hour.toString ().padStart (2, "0"); } else return this.date.getHours ().toString ().padStart (2, "0"); }
	minute () { return this.date.getMinutes ().toString ().padStart (2, "0"); }
	second () { return this.date.getSeconds ().toString ().padStart (2, "0"); }
	mili () { return this.date.getMilliseconds ().toString ().padStart (3, "0"); }
	meredian () { if (this.date.getHours () > 11) return "PM"; else return "AM"; }
	time () { return this.date.getTime (); }
	});

Define (Date, "format", function (format, date) { return new Date.io (date).format (format); });
Define (Date.format, "string", "Y-M-D");
Define (Date.format, "number", "YMD");
Define (Date.format, "default", "m D, Y");
Define (Date.format, "full", "d, m D, Y - h:I:S A");

Define (Date, "month", {
	name: {
		1: "January", "01": "January",
		2: "February", "02": "February",
		3: "March", "03": "March",
		4: "April", "04": "April",
		5: "May", "05": "May",
		6: "June", "06": "June",
		7: "July", "07": "July",
		8: "August", "08": "August",
		9: "September", "09": "September",
		10: "October",
		11: "November",
		12: "December",
		},
	});

Define (Date, "day", {
	name: {
		1: "Monday", "01": "Monday",
		2: "Tuesday", "02": "Tuesday",
		3: "Wednesday", "03": "Wednesday",
		4: "Thursday", "04": "Thursday",
		5: "Friday", "05": "Friday",
		6: "Saturday", "06": "Saturday",
		7: "Sunday", "07": "Sunday",
		},
	});

Define (Date, "time", function () { return Date.now (); });
Define (Date, "timeout", function (context, second = 1) { return setTimeout (context, (second * 1000)); });
Define (Date.timeout, "clear", function (context) { return clearTimeout (context); });

Define (Date, "embed", function () {});
Define (Date.embed, "format", function (input) { if ((input = parseInt (input)) > 3600) return Date.embed.hour (input); else return Date.embed.minute (input); });
Define (Date.embed, "hour", function (input) { var hour = Math.floor (input / 3600); var minute = Math.floor ((input % 3600) / 60); var second = input % 60; return `${hour}:${String (minute).padStart(2, "0")}:${String (second).padStart(2, "0")}`; });
Define (Date.embed, "minute", function (input) { var minute = Math.floor (input / 60); var second = input % 60; return `${String (minute).padStart(2, "0")}:${String (second).padStart(2, "0")}`; });

/**
 * event
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Define (Event, "io", class {
	constructor () {
		this.data = {}
		}
	on (key, value) {
		if (this.data [key]) this.data [key].push (value);
		else this.data [key] = [value];
		}
	emit (key, ... value) {
		var e;
		for (var i in this.data [key]) {
			e = this.data [key][i] (... value);
			}
		return e;
		}
	});

Define (Event, "proto", function (proto) {
	proto.event = proto.event || Object.create (null);
	proto.on = function (key, value) {
		if (proto.event [key]) proto.event [key].push (value);
		else proto.event [key] = [value];
		}
	proto.emit = function (key, ... value) {
		var e;
		for (var i in proto.event [key]) {
			e = proto.event [key][i] (... value);
			}
		return e;
		}
	});

/**
 * promise
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Define (Promise, "io", function (context) {
	return new Promise (function (resolve, reject) {
		context (function (value = true) { resolve (value); }, function (error = "") { reject (error); });
		});
	});

/**
 * url
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Define (URL, "parse", function (url) {
	var parse_url, result = {
		host: {address: "", name: ""},
		domain: {name: "", base: {name: ""}, sub: "www", extension: ""},
		protocol: "http", port: "", user: "", password: "",
		path: "", tag: "",
		queries: {},
		}
	try {
		var parse_url = new URL (url);
		result.host = {address: parse_url.host, name: parse_url.hostname}
		result.domain = {name: "", base: {name: ""}, sub: "www", extension: ""}
		result.protocol = parse_url.protocol.pop ();
		result.port = parse_url.port ? parse_url.port.integer () : "";
		result.user = parse_url.username;
		result.password = parse_url.password;
		result.path = parse_url.pathname;
		result.tag = parse_url.hash;
		result.query = function (key) { return result.queries [key] || ""; }
		result.queries = {}
		var queries = parse_url.search.after ("?").split ("&");
		for (var i in queries) {
			if (queries [i]) {
				var key = queries [i].before ("=");
				var value = queries [i].after ("=");
				if (key) if (value) result.queries [key] = value;
				}
			}
		return result;
		}
	catch (e) {
		return result;
		}
	});

Define (URL, "header", function () {});
Define (URL.header, "status", {
	OK: 200, success: 200,
	error: {request: 400, forbidden: 403, found: 404, timeout: 408, legal: 451, internal: 500},
	code: {
		100: "Continue", 101: "Switching Protocols", 102: "Processing",
		200: "OK", 201: "Created", 202: "Accepted", 203: "Non-authoritative Information", 204: "No Content", 205: "Reset Content", 206: "Partial Content", 207: "Multi-Status", 208: "Already Reported", 226: "IM Used",
		300: "Multiple Choices", 301: "Moved Permanently", 302: "Found", 303: "See Other", 304: "Not Modified", 305: "Use Proxy", 307: "Temporary Redirect", 308: "Permanent Redirect",
		400: "Bad Request", 401: "Unauthorized", 402: "Payment Required", 403: "Forbidden", 404: "Not Found", 405: "Method Not Allowed", 406: "Not Acceptable", 407: "Proxy Authentication Required", 408: "Request Timeout", 409: "Conflict", 410: "Gone", 411: "Length Required", 412: "Precondition Failed", 413: "Payload Too Large", 414: "Request-URI Too Long", 415: "Unsupported Media Type", 416: "Requested Range Not Satisfiable", 417: "Expectation Failed", 418: "I'm a teapot", 421: "Misdirected Request", 422: "Unprocessable Entity", 423: "Locked", 424: "Failed Dependency", 426: "Upgrade Required", 428: "Precondition Required", 429: "Too Many Requests", 431: "Request Header Fields Too Large", 444: "Connection Closed Without Response", 451: "Unavailable For Legal Reasons", 499: "Client Closed Request",
		500: "Internal Server Error", 501: "Not Implemented", 502: "Bad Gateway", 503: "Service Unavailable", 504: "Gateway Timeout", 505: "HTTP Version Not Supported", 506: "Variant Also Negotiates", 507: "Insufficient Storage", 508: "Loop Detected", 510: "Not Extended", 511: "Network Authentication Required", 599: "Network Connect Timeout Error",
		},
	});

/**
 * cookie
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Function.cookie = function (key, value) {
	var cookie = document.cookie.split (";").map (function (data) { return data.trim ().split ("="); });
	for (var i in cookie) {
		var key = cookie [i][0], value;
		if (key) {
			value = cookie [i][1].trim ();
			Function.cookie.data [key.trim ()] = value;
			}
		}
	}

Function.cookie.get = function (key) {
	if (key) return Function.cookie.data [key];
	else return Function.cookie.get (Function.cookie.identity);
	}

Function.cookie.delete = function (key) {
	Function.cookie.set (key);
	}

Function.cookie.set = function (key, value = "", expire = 0, domain = null, path = "/") {
	if (typeof key === "string") {
		if (expire === null) expire = Function.cookie._expire;
		domain = domain || Function.cookie._domain;
		document.cookie = `${key}=${value};expires=${expire};domain=${domain};path=/;samesite=lax`;
		Function.cookie.data [key] = value;
		}
	else {
		if ("domain" in key) Function.cookie._domain = key.domain;
		if ("expire:day" in key) {
			var expire = new Date ();
			expire.setTime (expire.getTime () + (key ["expire:day"] * 24 * 60 * 60 * 1000));
			Function.cookie._expire = expire.toUTCString ();
			}
		}
	}

Function.cookie.start = function (visitor) {
	if (Function.cookie.get (Function.cookie.identity)) {}
	else Function.cookie.set (Function.cookie.identity, Function.unique.id ());
	if (visitor) Function.visitor.cookie (visitor.ip.address, visitor.country.code, visitor.agent);
	Event.emit ("cookie:start", visitor);
	}

Function.cookie.id = function () {
	return Function.cookie.get (Function.cookie.identity);
	}

Function.cookie.identity = "cookie";
Function.cookie.data = {}

/**
 * json
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Define (JSON, "pretty", function (json) { return JSON.stringify (json, null, "\t"); });

Define (JSON, "db", class {
	constructor (config) {
		this.dir = config.dir;
		this.collection = config.collection || {}
		}
	select (collection) { return new JSON.db.select (this, collection); }
	});

Define (JSON.db, "select", class {
	constructor (db, collection) {
		this.db = db;
		this.collection = {name: collection, file: JSON.db.file (collection)}
		if (this.db.collection [this.collection.name]) this.collection.data = this.db.collection [this.collection.name];
		else this.collection.data = JSON.parse (Function.file.read (Function.path.join (this.db.dir, `${this.collection.file}.json`)) || "[]");
		}
	find (filter = {}) {
		var __ = function (db) {
			return new Promise (function (resolve, reject) {
				resolve ({collection: db.collection.name, data: db.collection.data.select (filter)});
				});
			}
		return __ (this);
		}
	});

Define (JSON.db, "file", function (key, value) { if (value) return JSON.db.file.object [key] = value; else return JSON.db.file.object [key] || key; });
Define (JSON.db.file, "object", {});

Define (JSON, "token", function () {});
Define (JSON.token, "parse", function (token) {
	try {
		if ((token = token.split (".")).length !== 3) throw new Error ("Invalid JWT Structure");
		return JSON.parse (decodeURIComponent (atob (token [1].replace (/-/g, "+").replace (/_/g, "/")).split ("").map (function (c) { return "%" + ("00" + c.charCodeAt (0).toString (16)).slice (-2); }).join ("")));
		}
	catch (e) {
		return {}
		}
	});

/**
 * path
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Define (Function, "path", function () {});
Define (Function.path, "require", function () { return Function.path.api = require ("path"); });
Define (Function.path, "join", function (... path) { return Function.path.api.join (... path); });
Define (Function.path, "current", function (path) { return "./" + path; });

/**
 * file
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Define (Function, "file", function () {});
Define (Function.file, "require", function () { return Function.file.api = require ("fs"); });
Define (Function.file, "write", function (file, content, context) { if (context) return Function.file.api.writeFile (file, content, context); else return Function.file.api.writeFileSync (file, content); });
Define (Function.file, "read", function (file, context) { if (context) return Function.file.api.readFile (file, context); else return Function.file.api.readFileSync (file); });

/**
 * hash
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Define (Function, "hash", function () {});
Define (Function.hash, "require", function () { Function.hash.crypto.api = require ("crypto"); });
Define (Function.hash, "crypto", function () {});
Define (Function.hash, "md5", function (input) { return Function.hash.crypto.api.createHash ("md5").update (input).digest ("hex"); });

/**
 * appwrite
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Define (Function, "appwrite", function () {});
Define (Function.appwrite, "require", function () { return Function.appwrite.api = require ("node-appwrite"); });

Define (Function.appwrite, "db", class {
	constructor (config, json) {
		this.config = config;
		this.client = new Function.appwrite.api.Client ().setEndpoint (this.config.host).setProject (this.config.project);
		this.json = json || {}
		if (this.config.collection) for (var i in this.config.collection) Function.appwrite.db.collection (i, this.config.collection [i]);
		}
	select (collection) { return new Function.appwrite.db.select (this, collection); }
	});

Define (Function.appwrite.db, "select", class {
	constructor (db, collection) {
		this.db = db;
		this.collection = {name: collection, id: Function.appwrite.db.collection (collection), json: this.db.json [collection] || []}
		this.option = {sort: {}, offset: 0, limit: 5000}
		}
	sort (sort) {
		return this;
		}
	limit () {
		if (arguments.length > 1) { this.option.offset = arguments [0]; this.option.limit = arguments [1]; }
		else if (arguments.length) { this.option.offset = 0; this.option.limit = arguments [0]; }
		else { this.option.offset = 0; this.option.limit = 5000; }
		return this;
		}
	find (filter = {}) {
		var serial;
		if (typeof filter !== "object") filter = {serial: (serial = filter)}
		var __ = function (db) {
			return new Promise (async function (resolve, reject) {
				var data;
				var error = false;
				var database, result, queries = [];
				if (serial) queries = [Function.appwrite.api.Query.limit (1)]
				else {
					if (db.option.limit) queries.push (Function.appwrite.api.Query.limit (db.option.limit));
					}
				try {
					database = new Function.appwrite.api.Databases (db.db.client);
					result = await database.listDocuments ({
						databaseId: db.db.config.id,
						collectionId: db.collection.id,
						queries,
						total: true,
						});
					}
				catch (e) { error = true; console.log (e); }
				if (error === false) {
					data = result.documents.map (function (data) { return data; }).select (filter);
					data = db.collection.json.select (filter).implode (data);
					}
				resolve ({error, data});
				});
			}
		return __ (this);
		}
	});

Define (Function.appwrite.db, "collection", function (key, value) { if (value) return Function.appwrite.db.collection.object [key] = value; else return Function.appwrite.db.collection.object [key] || key; });
Define (Function.appwrite.db.collection, "object", {});

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

/**
 * html
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Define (Function, "html", class {
	constructor () {
		this.head = new Function.html.head (this);
		this.config = {}
		this.var = {
			"html:attribute": {},
			title: "UnTitled",
			description: "",
			charset: "UTF-8",
			meta: [],
			link: {style: []},
			google: {font: [], "tag:manager": "G-6JM1DVVQPT"},
			}
		}
	set (key, value) {
		if (key === "html:attribute") for (var i in value) this.var ["html:attribute"][i] = value [i];
		else if (key === "language") this.var ["html:attribute"]["lang"] = value;
		else if (key === "meta") this.var.meta.push (value);
		else if (key === "link:style") this.var.link.style.push (value);
		else if (key === "google:font") this.var.google.font.push (value);
		else this.var [key] = value;
		return this;
		}
	delete (key, value) {
		if (key === "html:attribute") delete this.var ["html:attribute"][value];
		else if (key === "language") delete this.var ["html:attribute"]["lang"];
		else delete this.var [key];
		return this;
		}
	populate () {
		this.populated = true;
		this.head.meta ({charset: this.var.charset});
		this.head.meta ({"http-equiv": "X-UA-Compatible", content: "IE=edge"});
		this.head.meta ({"http-equiv": "X-Cross-Origin", content: "*"});
		this.head.meta ({name: "viewport", content: this.var ["viewport"] || "width=device-width, initial-scale=1.0, maximum-scale=3.0, user-scalable=1"});
		this.head.meta ({name: "generator", content: this.var ["generator"] || "Netizen" || "Express (5.2.1) Vue (3.5.27)"});
		this.head.meta ({name: "author", content: this.var ["author"] || "Netizen"});
		this.head.meta ({name: "description", content: this.var.description});
		this.head.meta ({name: "keywords", content: this.var ["keyword"]});
		this.head.meta ({name: "robots", content: this.var ["robot"] || "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"});
		this.head.meta ({name: "rating", content: this.var ["rating"] || "general"});
		this.head.meta ({name: "google", content: "notranslate"});
		this.head.meta ({name: "googlebot", content: "notranslate"});
		this.head.meta ({name: "googlebot-news", content: this.var ["google-bot:article"] || "index, follow"});
		if (this.var ["google-site-verification"]) this.head.meta ({name: "google-site-verification", content: this.var ["google-site-verification"]});
		if (this.var ["yandex-verification"]) this.head.meta ({name: "yandex-verification", content: this.var ["yandex-verification"]});
		this.head.meta ({name: "twitter:card", content: this.var ["twitter:card"] || "summary_large_image"});
		this.head.meta ({name: "twitter:title", content: this.var ["twitter:title"]});
		this.head.meta ({name: "twitter:description", content: this.var ["twitter:description"] || this.var.description});
		this.head.meta ({name: "twitter:image", content: this.var ["twitter:image"]});
		this.head.meta ({property: "og:site_name", content: this.var ["og:site_name"]});
		this.head.meta ({property: "og:site_description", content: this.var ["og:site_description"]});
		this.head.meta ({property: "og:title", content: this.var ["og:title"] || this.var.title});
		this.head.meta ({property: "og:description", content: this.var ["og:description"] || this.var.description});
		this.head.meta ({property: "og:url", content: this.var ["og:url"] || this.var.canonical});
		this.head.meta ({property: "og:image", content: this.var ["og:image"]});
		this.head.meta ({property: "og:type", content: this.var ["og:type"] || "website"});
		this.head.meta ({property: "og:locale", content: this.var ["og:locale"] || this.var ["html:attribute"]["lang"] || "en"});
		for (var i in this.var.meta) this.head.meta (this.var.meta [i].attribute, this.var.meta [i].prop);
		this.head.link ({rel: "icon", href: this.var ["favorite.ico"] || "/favicon.ico"});
		this.head.link ({rel: "canonical", href: this.var.canonical || "/"});
		if (this.config ["manifest.json"]) this.head.link ({rel: "manifest", href: this.var ["manifest.json"] || "/manifest.json"});
		if (this.config ["feed.xml"]) this.head.link ({rel: "alternate", href: "/feed/", type: "application/rss+xml", title: "{{ site:name }} &raquo; Feed"});
		if (this.config ["feed.xml:atom"]) this.head.link ({rel: "alternate", href: "/feed/atom/", type: "application/rss+xml", title: "{{ site:name }} &raquo; Feed (Atom)"});
		this.head.link ({rel: "dns-prefetch", href: "https://www.google-analytics.com"});
		this.head.link ({rel: "dns-prefetch", href: "https://www.googletagmanager.com"});
		this.head.link ({rel: "preconnect", href: "https://fonts.gstatic.com"}, "crossorigin");
		this.head.link ({rel: "preconnect", href: "https://fonts.googleapis.com"}, "crossorigin");
		this.head.link ({rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"});
		this.head.link ({rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"});
		this.head.link ({rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"});
		this.head.link ({rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"});
		this.head.link ({rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,slnt,wdth,wght,GRAD,ROND@6..144,-10..0,25..151,1..1000,0..100,0..100&display=swap"});
		for (var i in this.var.google.font) this.head.link ({rel: "stylesheet", href: this.var.google.font [i]});
		for (var i in this.var.link.style) this.head.link ({rel: "stylesheet", href: this.var.link.style [i]});
		this.head.link ({rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"});
		this.head.link ({rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"});
		if (this.var.google ["tag:manager"]) this.head.script ({src: "https://www.googletagmanager.com/gtag/js?id=" + this.var.google ["tag:manager"]}, "async");
		this.head.script ({src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"});
		this.head.script ({src: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"});
		this.head.script ({src: "https://unpkg.com/lodash@4.17.21/core.min.js"});
		this.head.script ({src: "https://unpkg.com/vue@3.5.27/dist/vue.global.prod.js"});
		this.head.script ({src: "https://unpkg.com/vue-router@4.6.4/dist/vue-router.global.prod.js"});
		return this;
		}
	render (variable = {}) {
		if (!this.populated) this.populate ();
		this.markup = new Function.html.markup (`<!DOCTYPE html>`);
		this.markup.push (0, `<html${Function.html.attribute (this.var ["html:attribute"], {space: true})}>`);
		this.markup.push (1, `<head>`);
		this.markup.push (2, `<title>${this.var.title}</title>`);
		for (var i in this.head.data.meta) this.markup.push (2, `<meta${Function.html.attribute (this.head.data.meta [i].attribute, {space: true, prop: this.head.data.meta [i].prop})}>`);
		for (var i in this.head.data.link) this.markup.push (2, `<link${Function.html.attribute (this.head.data.link [i].attribute, {space: true, prop: this.head.data.link [i].prop})}>`);
		for (var i in this.head.data.script) this.markup.push (2, `<script${Function.html.attribute (this.head.data.script [i].attribute, {space: true, prop: this.head.data.script [i].prop})}></script>`);
		for (var i in this.head.data.style) this.markup.push (2, `<style${Function.html.attribute (this.head.data.style [i].attribute, {space: true, prop: this.head.data.style [i].prop})}>${this.head.data.style [i].css}</style>`);
		this.markup.push (1, `</head>`);
		this.markup.push (1, `<body>`);
		this.markup.push (0, `<script>
console.log (Function.ajax)
Function.ajax.get ("/test1.js", {
success () {
alert (123)
}
})
</script>`);
		this.markup.push (1, `</body>`);
		this.markup.push (0, `</html>`);
		if (this.var.debug) {
			this.markup.push (0, `<!--`);
			this.markup.push (0, (this.var.debug || ""));
			this.markup.push (0, `-->`);
			}
		return this.markup.string ().format (variable);
		}
	});

Define (Function.html, "head", class {
	constructor () {
		this.data = {meta: [], link: [], style: [], script: []}
		}
	meta (attribute, prop) {
		this.data.meta.push ({attribute, prop});
		return this;
		}
	link (attribute, prop) {
		this.data.link.push ({attribute, prop});
		return this;
		}
	style (attribute, prop, css) {
		this.data.style.push ({attribute, prop, css});
		return this;
		}
	script (attribute, prop) {
		this.data.script.push ({attribute, prop});
		return this;
		}
	});

Define (Function.html, "attribute", function (attribute, option = {}) {
	var result = [];
	for (var i in attribute) result.push (`${i}="${attribute [i] || ''}"`);
	if (option.prop) result.push (option.prop);
	if (result = result.join (" ")) return (option.space ? " " : "") + result;
	else return "";
	});

Define (Function.html, "markup", class {
	constructor (... markup) {
		this.markup = [... markup];
		}
	push (tab, content) {
		this.markup.push (("\t").repeat (tab) + content);
		}
	string (ln = "\n") {
		return this.markup.join (ln);
		}
	});

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

/**
 * miscellaneous
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Define (Function, "help", function () {});

Define (Function.help, "argument", function () {
	var result = {string: "", number: 0}
	for (var i in arguments) {
		if (typeof arguments [i] === "string") result.string = arguments [i];
		else if (typeof arguments [i] === "number") result.number = arguments [i];
		}
	return result;
	});

Define (Function, "unique", function () {});
Define (Function.unique, "shuffle", function () { return String.char.alpha.numeric.repeat (16).shuffle ().substr (0, 64); });
Define (Function.unique, "id", function () {
	return ("xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx").replace (/[xy]/g, function (c) {
		const r = (Math.random () * 16) | 0;
		const v = c === "x" ? r : (r & 0x3) | 0x8;
		return v.toString (16);
		});
	});

Function.ajax = function () {}

Function.ajax.get = function (url, context) {
	return $.ajax ({
		url,
		... context,
		});
	}

Function.ajax.post = function (url, data, context) {
	return $.ajax ({
		url,
		data: JSON.stringify (data),
		type: "POST",
		dataType: "json",
		... context,
		});
	}

Define (Function, "google", function () {});
Define (Function.google, "icon", function (icon) { if (Function.google.icon.src [icon]) return "&#x" + Function.google.icon.src [icon] + ";"; else return "XXXXXXXXXXXX"; });
Define (Function.google.icon, "src", {
	home: "e88a", home_app_logo: "e295", home_storage: "f86c", home_lot_device: "e283",
	archive: "e149", article: "ef42",
	folder: "e2c7", folder_off: "eb83",
	bookmark: "e866", bookmark_star: "f454",
	notification: "e7f4", notification_unread: "f4fe", notification_audio: "eec1", notification_setting: "f367",
	chat: "e0b7", chat_unread: "f189", chat_error: "f7ac",
	check: "e5ca", check_circle: "e86c",
	lock: "e897", lock_clock: "ef57",
	visibility: "e8f4", visibility_off: "e8f5", visibility_lock: "f653",
	thumb_up: "e8dc", thumb_up_double: "eefc", thumb_down: "e8db",
	shield: "e9e0", shield_lock: "f686", shield_locked: "f592", shield_toggle: "f2ad", shield_watch: "f30f",
	arrow_circle_down: "f181", arrow_drop_down: "e5c5",
	menu: "e5d2", more: "e619", more_vertical: "e5d4", more_horizontal: "e5d3",
	delete: "e872", delete_auto: "ea4c", delete_forever: "e92b",
	download: "f090", downloading: "f001", cloud_download: "e2c0", cloud_upload: "e2c3",
	calendar_clock: "f540", calendar_check: "f243", calendar_today: "e935", calendar_lock: "f242",
	globe: "e64c", globe_asia: "f799",
	local_activity: "e53f", local_fire_department: "ef55",
	image: "e3f4", animated_image: "f49a",
	photo: "e410", photo_camera: "e412",
	star: "e838", star_s: "f31c",
	male: "e58e", female: "e590", transgender: "e58d",
	arrow_left_alt: "ef7d", arrow_right_alt: "e941",
	light_bulb: "e0f0", light_bulb_x: "f3e3",
	theater: "e8da", movie: "e02c", play_circle: "e1c4", play_arrow: "e037",
	tv: "e333", tv_guide: "e1dc", live_tv: "e639",
	close: "e5cd",
	cookie: "eaac",
	file_video: "eb87",
	mobile_vibrate: "f2cb",
	admin_panel_setting: "ef3d",
	cloud_lock: "f386",
	comedy_mask: "f4d6",
	encrypted: "e593",
	fingerprint: "e90d",
	health_safety: "e1d5",
	security: "e32a",
	recpmend: "e9d2",
	keep: "e6aa",
	favorite: "e87d",
	heart_broken: "eac2",
	password: "f042",
	person_shield: "e384",
	verified_user: "e8e8",
	supervisor_account: "e8d3",
	visibility: "e8f4",
	id_card: "e8f4",
	passkey: "f87f",
	circle: "ef4a",
	dns: "e875",
	eco: "ea35",
	explore: "e87a",
	share_location: "f05f",
	search: "e8b6",
	sms: "e625",
	subscription: "e064",
	editor_choice: "f528",
	search_activity: "f3e5",
	timer_play: "f4ba",
	playlist_play: "e05f",
	hotel_class: "e743",
	description: "e873",
	contact: "e0ba",
	link: "e157",
	health_and_safety: "e1d5",
	setting_accessibility: "f05d",
	safety_check: "ebef",
	admin_panel_setting: "ef3d",
	rss_feed: "e0e5",
	setting: "e8b8",
	recycling: "e760",
	key: "e73c",
	chart_show: "e6e1",
	trending_up: "e8e5",
	auto_read_play: "f216",
	smart_display: "f06a",
	crown: "ecb3",
	trophy: "e71a",
	review: "f054",
	workspace_premium: "e7af",
	card_star: "f375",
	acute: "e4cb",
	person: "e7fd",
	event: "e878",
	date_range: "e916",
	chronic: "ebb2",
	sticker: "e707",
	flash_on: "e3e7",
	trail_length_short: "eb6d",
	slide_show: "e41b",
	bolt: "ea0b",
	speed: "e9e4",
	rocket: "eba5",
	});

Function.owl = function () {}
Function.owl.carousel = function (element, reference, option) {
	option = option || {}
	var padding = option.padding || 0;
	var setting = {
		onTranslated: option ["on:translate"] || function () {},
		gap: (option.gap || 0),
		loop: (option.loop || false),
		center: (option.center || false),
		nav: (option.nav || false), dots: (option ["nav:dot"] || false),
		autoplay: (option.play === "auto" || option.play || false),
		margin: (option.margin || 10),
		autoWidth: (option.width === "auto" || false),
		stagePadding: (option ["stage:padding"] || 0),
		autoplayTimeout: (option.timeout || 10000),
		autoplayHoverPause: true,
		responsive: option.responsive || Function.owl.carousel ["item:default"],
		}
	var el = $ (element).removeClass ("none");
	if (el) {
		if (reference) el.width ($ (reference).width () - setting.gap - padding);
		el.owlCarousel (setting);
		}
	}

Function.owl.carousel ["item:default"] = {
	0: {items: 1},
	600: {items: 3},
	1000: {items: 5},
	}

Function.owl.carousel ["item:pop"] = {
	0: {items: 2},
	600: {items: 4},
	1000: {items: 6},
	}

Function.owl.carousel ["item:best"] = {
	0: {items: 1},
	600: {items: 2},
	1000: {items: 3},
	}

Function.owl.carousel ["item:sky"] = {
	0: {items: 1},
	600: {items: 3},
	1000: {items: 4},
	}

Function.owl.carousel ["wide"] = {
	0: {items: 1},
	600: {items: 3},
	1000: {items: 3},
	}

Function.owl.carousel ["relation"] = {
	0: {items: 2},
	600: {items: 3},
	1000: {items: 3},
	}

Function.owl.carousel ["short"] = {
	0: {items: 2},
	600: {items: 4},
	1000: {items: 6},
	}

Function.owl.carousel ["flash"] = {
	0: {items: 2},
	600: {items: 4},
	1000: {items: 6},
	}

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Symbol.export = {
	define: Object.define,
	object: Object, array: Array, string: String, number: Number, function: Function,
	date: Date, time: Date.time, event: Event, promise: Promise,
	url: URL, serialize: Function.serialize, xml: Function.xml, json: JSON,
	cookie: Function.cookie,
	path: Function.path, file: Function.file, dir: Function.dir,
	html: Function.html,
	hash: Function.hash, unique: Function.unique,
	help: Function.help, next: function (resolve) { return Promise.resolve (resolve); },
	ajax: Function.ajax, owl: Function.owl,
	google: Function.google, appwrite: Function.appwrite,
	}

/**
 * the end
 *
 * xxx://xxx.xxx.xxx/xxx
 */
