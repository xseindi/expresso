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
52.962.987.129
1.765.432.904
174.357.897.410
5.811.929.913
522.770.200.470
17.425.673.349
*/

var $ = require ("script.io.js")
var express = require ("express.io.js")
var __dir = process [["C", "W", "D"].join ("").small ()] ()
const {define} = $

express.config = require ($.path.current ("package.json")).config
express.config.dir = (__dir)
if (true) express.config.db.json = {
	account: require ("./src/db/account.json"),
	app: require ("./src/db/app.json"),
	instance: require ("./src/db/instance.json"),
	theme: require ("./src/db/theme.json"),
	}

var the = {
	date: new $.date.io (),
	}

console.log ($.unique.id ())
console.log ($.unique.shuffle ())

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
	// console.log (request.app);
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
	// console.log ("/");
	response.html (response.output.render ());
	/*
	console.log (234)
	response.send (`
		<script src="/test1.js?2"></script>
		<script src="/test2.js?3"></script>
		<script src="/test3.js?4"></script>
		`)
	//*/
	})

app.get ("/test1.js", async function (request, response) {
	console.log (1);
	response.js ("var a = 1")
	})

app.get ("/test2.js", async function (request, response) {
	console.log (2);
	response.js ("var b = 1")
	})

app.get ("/test3.js", async function (request, response) {
	console.log (3);
	response.js ("var c = 1")
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
	console.log (request.url.path)
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

app.listen (function () { console.log (the.date.format ("full"), this.port) })
define (module).export (app.export ())

/**
 * the end
 *
 * xxx://xxx.xxx.xxx/xxx
 */
