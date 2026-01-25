/**
 * express
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

var express = require ("express.exe")
var $ = require ("script.io.js")
const {define} = $

var app = new express.app
app.router = require ("../src/router.json")

/**
 * index
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

app.get ("/", async function (request, response, next) {
	if (this.app.type_of.cpanel) {
		response.send ("cpanel")
		}
	else next ()
	})

/**
 * expose
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

define (module).export (app.export ())

/**
 * the end
 *
 * xxx://xxx.xxx.xxx/xxx
 */
