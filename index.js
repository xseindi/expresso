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
const {define} = $
$.config = {internet: true}

var app = new express ($.config)

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
	console.log (request.header)
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

app.listen ()
define (module).export (app.app)

/**
 * the end
 *
 * xxx://xxx.xxx.xxx/xxx
 */
