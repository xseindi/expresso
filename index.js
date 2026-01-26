/**
 * hello world
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

$$$.j_son = {
	account: require ("./src/db/account.json"),
	app: require ("./src/db/app.json"),
	droplet: require ("./src/db/droplet.json"),
	theme: require ("./src/db/theme.json"),
	}

$$$.package = require ("./package.json")
$$$.config = $$$.package.config
$$$.config.port = $$$.config.port || __PORT
$$$.router = $$$.config.router = require ("./src/router.json")
$$$.cache = {app: require ("./src/cache/app.json")}
$$$.express = require ("./src/express.js")
$$$.express.static = require ("./src/static.js")
$$$.express.site = require ("./src/site.js")
$$$.express.cpanel = require ("./src/control-panel.js")

var the = {
	date: new $.date.io (),
	}

/**
 * express
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
app.serial = {list: $$$.cache.app}
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

express.app.router (app, $$$.express.static)

app.use ($$$.express.setup)
app.use ($$$.express.template)
app.use ($$$.express.security)

app.use (async function (request, response, next) {
	response.log (this.app)
	response.capture (this.app)
	next ()
	})

/**
 * site
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

express.app.router (app, $$$.express.site)

/**
 * control panel
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

express.app.router (app, $$$.express.cpanel);

/**
 * common gateway interface
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

/**
 * robot
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

app.get ($$$.router ["robot:text"], async function (request, response, next) {
	response.files ("robots.txt")
	})

/**
 * sitemap
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

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
	console.log (404, request.path)
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
