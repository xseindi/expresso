/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

var $$$ = function () {}
var $ = require ("script.io.js")
var express = require ("express.exe")
var __dir = process [["C", "W", "D"].join ("").small ()] ()
var __PORT = process [["E", "N", "V"].join ("").small ()].PORT
const {define} = $

$$$.package = require ("./package.json")
$$$.config = $$$.package.config
$$$.j_son = {
	account: require ("./src/db/account.json"),
	app: require ("./src/db/app.json"),
	droplet: require ("./src/db/droplet.json"),
	theme: require ("./src/db/theme.json"),
	}
$$$.config.port = $$$.config.port || __PORT
$$$.route = require ("./src/route.js")
$$$.router = $$$.config.router = require ("./src/router.json")
$$$.cache = {app: require ("./src/cache/app.json")}
$$$.express = require ("./src/express.js")

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

const app = express ()

app.event = new $.event.io ()
app.config = $$$.config
app.j_son = $$$.j_son
app.list = {serial: $$$.cache.app}
app.dir = {
	name: __dir,
	src: $.path.join (__dir, "src"),
	public: $.path.join (__dir, "public"),
	}

app.set ("trust proxy", true)
app.use (express.static ("public"))
app.use ($$$.express.function)
app.use ($$$.express.check)
app.use ($$$.express.cache)

for (var i in $$$.route) {
	if ($$$.route [i].method === "GET") app.get ($$$.route [i].path, $$$.route [i].context)
	if ($$$.route [i].method === "POST") app.post ($$$.route [i].path, $$$.route [i].context)
	if ($$$.route [i].method === "HEAD") app.head ($$$.route [i].path, $$$.route [i].context)
	if ($$$.route [i].method === "DELETE") app.delete ($$$.route [i].path, $$$.route [i].context)
	}

app.use ($$$.express.setup)
app.use ($$$.express.template)
app.use ($$$.express.security)
app.use (async function (request, response, next) {
	console.log (this.app)
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

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

app.get ($$$.router.page ["about"], async function (request, response) {
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
 * expose
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

app.listen ($$$.config.port, $$$.config.host, function () { console.log (the.date.format ("full"), $$$.config.port) })
define (module).export (app)

/**
 * the end
 *
 * xxx://xxx.xxx.xxx/xxx
 */
