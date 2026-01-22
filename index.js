/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

/*
1024
1048576
*/

var $ = require ("script.io.js")
var express = require ("express.io.js")
const {define} = $
var __dir = process [["C", "W", "D"].join ("").small ()] ()
var j_son = {
	app: require ($.path.join (__dir, "src/db/app.json")),
	theme: require ($.path.join (__dir, "src/db/theme.json")),
	}

express.config = require ($.path.join (__dir, "package.json")).config
express.config.dir = (__dir)
express.config.db.collection = j_son

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

var app = new express ()

app.static ()

app.setup (async function (request, response, next) {
	console.log (request.app)
	next ()
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

app.get ("/", async function (request, response) {
	response.html (response.output.render ())
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

app.get ("/robots.txt", async function (request, response) {
	response.html ("xxx")
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

app.catch (async function (request, response) {
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

app.listen ()
define (module).export (app.export ())

/**
 * the end
 *
 * xxx://xxx.xxx.xxx/xxx
 */
