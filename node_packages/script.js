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

/**
 * array
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Define (Array.prototype, "json", function () { return JSON.stringify (this); });
Define (Array.prototype, "exist", function (input, offset) { return this.includes (input, offset); });

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

/**
 * number
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

/**
 * date
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

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
		100: "Continue",
		101: "Switching Protocols",
		102: "Processing",
		200: "OK",
		201: "Created",
		202: "Accepted",
		203: "Non-authoritative Information",
		204: "No Content",
		205: "Reset Content",
		206: "Partial Content",
		207: "Multi-Status",
		208: "Already Reported",
		226: "IM Used",
		300: "Multiple Choices",
		301: "Moved Permanently",
		302: "Found",
		303: "See Other",
		304: "Not Modified",
		305: "Use Proxy",
		307: "Temporary Redirect",
		308: "Permanent Redirect",
		400: "Bad Request",
		401: "Unauthorized",
		402: "Payment Required",
		403: "Forbidden",
		404: "Not Found",
		405: "Method Not Allowed",
		406: "Not Acceptable",
		407: "Proxy Authentication Required",
		408: "Request Timeout",
		409: "Conflict",
		410: "Gone",
		411: "Length Required",
		412: "Precondition Failed",
		413: "Payload Too Large",
		414: "Request-URI Too Long",
		415: "Unsupported Media Type",
		416: "Requested Range Not Satisfiable",
		417: "Expectation Failed",
		418: "I'm a teapot",
		421: "Misdirected Request",
		422: "Unprocessable Entity",
		423: "Locked",
		424: "Failed Dependency",
		426: "Upgrade Required",
		428: "Precondition Required",
		429: "Too Many Requests",
		431: "Request Header Fields Too Large",
		444: "Connection Closed Without Response",
		451: "Unavailable For Legal Reasons",
		499: "Client Closed Request",
		500: "Internal Server Error",
		501: "Not Implemented",
		502: "Bad Gateway",
		503: "Service Unavailable",
		504: "Gateway Timeout",
		505: "HTTP Version Not Supported",
		506: "Variant Also Negotiates",
		507: "Insufficient Storage",
		508: "Loop Detected",
		510: "Not Extended",
		511: "Network Authentication Required",
		599: "Network Connect Timeout Error",
		},
	});

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
		else if (key === "html:language") this.var ["html:attribute"]["lang"] = value;
		else if (key === "meta") this.var.meta.push (value);
		else if (key === "link:style") this.var.link.style.push (value);
		else if (key === "google:font") this.var.google.font.push (value);
		else this.var [key] = value;
		return this;
		}
	delete (key, value) {
		if (key === "html:attribute") delete this.var ["html:attribute"][value];
		else if (key === "html:language") delete this.var ["html:attribute"]["lang"];
		else delete this.var [key];
		return this;
		}
	populate () {
		this.populated = true;
		this.head.meta ({charset: this.var.charset});
		this.head.meta ({"http-equiv": "X-UA-Compatible", content: "IE=edge"});
		this.head.meta ({"http-equiv": "X-Cross-Origin", content: "*"});
		this.head.meta ({name: "viewport", content: this.var ["viewport"] || "width=device-width, initial-scale=1.0, maximum-scale=3.0, user-scalable=1"});
		this.head.meta ({name: "generator", content: this.var ["generator"] || "Express (5.2.1) Vue (3.5.27)"});
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
		if (this.var.manifest) this.head.link ({rel: "manifest", href: this.var.manifest || "/manifest.json"});
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
		this.markup.push (1, `</head>`);
		this.markup.push (1, `<body>`);
		this.markup.push (1, `</body>`);
		this.markup.push (0, `</html>`);
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
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

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
	date: Date, time: Date.time, url: URL,
	html: Function.html,
	}

/**
 * the end
 *
 * xxx://xxx.xxx.xxx/xxx
 */
