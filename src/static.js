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
const {one, zero} = $

var app = new express.app
app.router = require ("../src/router.json")

/**
 * robot
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

app.get (app.router ["robot:text"], async function (request, response, next) {
	if (request.OK ()) {
		if (request.app.serial.id) {
			response.files ("robots.txt")
			}
		else next ()
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
