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

express.config = require ($.path.current ("package.json")).config
express.config.dir = (__dir)
if (false) express.config.db.collection = {
	app: require ($.path.current ("src/db/app.json")),
	theme: require ($.path.current ("src/db/theme.json")),
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

var app = new express ()

app.static ()

app.setup (async function (request, response, next) {
	next ();
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
