/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

var $
if (Symbol.export) $ = {... Symbol.export}
else $ = require ("script.io.js");
$.express = require ("express");

class express {
	constructor () {
		this.app = $.express ();
		}
	static (path = "public", option = {dotfiles: "ignore"}) {
		this.app.use ($.express.static (path, option));
		return this;
		}
	setup (context) {
		var io = function (application) {
			return function (r, respond, next) {
				var http_d = {request: r, response: respond}
				var {request, response} = express.io (application.app, http_d);
				application.__ = {request, response}
				express.setup (application.__.request, application.__.response, next, http_d);
				context (application.__.request, application.__.response, next, http_d);
				}
			}
		this.app.use (io (this));
		return this;
		}
	io (application, context) {
		return function (request, response, next) {
			context (application.__.request, application.__.response, next, {request, response});
			}
		}
	use (... context) {
		this.app.use (... context);
		return this;
		}
	get (path, context) {
		this.app.get (path, this.io (this, context));
		return this;
		}
	catch (context) {
		this.app.use (this.io (this, context));
		return this;
		}
	listen (port, context) {
		port = port || process.env.PORT || 3000;
		this.app.listen (port, (context || function () { console.log (`Express on Port`, port); }));
		return this;
		}
	}

express.setup = function (request, response, next, http_d) {
	response.output.set ("html:language", "en");
	response.output.set ("html:attribute", {translate: "no", prefix: "og: http://ogp.me/ns#"});
	response.output.set ("canonical", request.url.address);
	response.output.set ("favorite.ico", request.base_url.join ("/favicon.ico"));
	response.output.set ("meta", {attribute: {name: "adsterra", content: "ads"}});
	}

express.io = function (app, http_d) {
	var request = express.request (app, http_d);
	var response = express.response (app, request, http_d);
	return {request, response}
	}

express.request = function (app, http_d) {
	var request = function () {}
	request.header = http_d.request.headers;
	if (request.url = function () {}) {
		request.base_url = `${http_d.request.protocol || "http"}://${http_d.request.host}`;
		var parse_url = URL.parse (request.url.address = `${request.base_url}${http_d.request.url}`);
		for (var i in parse_url) request.url [i] = parse_url [i];
		}
	request.get = function (... get) {
		return http_d.request.get (... get);
		}
	return request;
	}

express.response = function (app, request, http_d) {
	var response = function () {}
	response.status = function (code) { http_d.response.status (code); return response; }
	response.json = function (... context) { http_d.response.json (... context); return response; }
	response.html = function (... context) {
		http_d.response.send (... context);
		return response;
		}
	response.output = new $.html ();
	return response;
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

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

module.exports = exports = express;

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */
