/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

var $ = require ("script.io.js")
var express = require ("express.io.js")

var app = new express ()

app.static ()

app.setup (function (request, response, next) {
	next ()
	})

app.get ("/", function (request, response) {
	var html = new $.html ()
	response.html (html.render ())
	})

app.get ("/robots.txt", function (request, response) {
	response.html ("xxx")
	})

app.catch (function (request, response) {
	response.status ($.url.header.status.error.found).html (response.output.render ())
	})

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

// app.listen ()
module.exports = exports = app.app

/**
 * the end
 *
 * xxx://xxx.xxx.xxx/xxx
 */
