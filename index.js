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
var express = require ("express.exe")
var __dir = process [["C", "W", "D"].join ("").small ()] ()
var __PORT = process [["E", "N", "V"].join ("").small ()].PORT
const {define} = $

$.config = require ("./package.json").config
$.config.dir = (__dir)
if (true) $.config.db.json = {
	account: require ("./src/db/account.json"),
	app: require ("./src/db/app.json"),
	instance: require ("./src/db/instance.json"),
	theme: require ("./src/db/theme.json"),
	}
$.router = $.config.router = require ("./src/router.json")
$.express = require ("./src/express.js")
$.config.port = $.config.port || __PORT

var the = {
	date: new $.date.io (),
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

var app = express ()
app.config = $.config

app.set ("trust proxy", true)
app.use (express.static ("public"))
app.use ($.express.function)
app.use ($.express.check)
app.use ($.express.setup)
app.use ($.express.security)

app.use (async function (request, response, next) {
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
	response.send (response.output.render ())
	})

app.get ($.router.page ["about"], async function (request, response) {
	response.send ("about page")
	})

/**
 * error
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

app.use (async function (request, response) {
	console.log (request.path)
	response.status ($.url.header.status.error.exist).html (response.output.render ())
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

app.listen ($.config.port, $.config.host, function () { console.log (the.date.format ("full"), $.config.port) })
define (module).export (app)

/**
 * the end
 *
 * xxx://xxx.xxx.xxx/xxx
 */
