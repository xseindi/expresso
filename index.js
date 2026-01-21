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
$.config = require ("./package.json").config
const {define} = $

var app = new express ($.config)

app.static ()

app.setup (function (request, response, next) {
	next ()
	})

app.get ("/", function (request, response) {
	response.html (response.output.render ())
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

app.listen ()
define (module).export (app.export ())

/**
 * the end
 *
 * xxx://xxx.xxx.xxx/xxx
 */
