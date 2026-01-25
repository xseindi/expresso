var $ = require ("script.io.js")
const {define} = $
const one = 1
const zero = 0

function library (r, respond, next) {
	r.library ()
	respond.library ()
	next ()
	}

async function check (request, response, next) {
	response.log ("incoming request", request.path)
	if (request.path.begin ("/.")) request.error.push ("path")
	next ()
	}

async function cache (request, response, next) {
	request.app.serial = request.app.list.serial [request.host.name]
	response.droplet.list = response.app.j_son.droplet
	response.theme.list = response.app.j_son.theme
	next ()
	}

async function setup (request, response, next) {
	if (request.OK ()) {
		// response.droplet.list = (await request.db.select ("droplet").find ().query ()).data
		// response.theme.list = (await request.db.select ("theme").find ().query ()).data
		var app = {}
		this.app = (await request.db.select ("app").limit (one).find ({host: request.host.name, status: "active"}).query ()).data.one ()
		if (this.app) {
			try {
				if (app = this.app.reference) {
					app = this.app
					this.app = (await request.db.select ("app").find (app.reference).query ()).data.one ()
					this.app.reference = app.serial
					this.app.type = app.type
					}
				}
			catch (e) {
				response.log ("error", "reload")
				return request.redirect (request.path)
				}
			app.droplet = response.droplet.list.select ({serial: this.app.droplet.serial}).one ()
			this.app.droplet.name = app.droplet.name
			this.app.droplet.gear = app.droplet.gear
			// for (var i in app.droplet) if (i in this.app.droplet) continue
			// else this.app.droplet [i] = app.droplet [i]
			app.theme = this.app.theme.list.select ({status: "active"}).one ()
			var theme = response.theme.list.select ({serial: app.theme.serial}).one ()
			for (var i in theme) this.app.theme [i] = theme [i]
			this.app.theme.version = app.theme.version
			this.app.theme.data = app.theme.data
			}
		else {
			request.error.push ("exist")
			}
		next ()
		}
	else next ()
	}

async function template (request, response, next) {
	if (this.app) {
		if (true) {
			response.output.config ["manifest.json"] = this.app.meta.setting ["manifest.json"]
			response.output.set ("language", "en")
			response.output.set ("html:attribute", {translate: "no", prefix: "og: http://ogp.me/ns#"})
			response.output.set ("canonical", request.canonical)
			response.output.set ("favorite.ico", request.base_url.join ("/favicon.ico"))
			response.output.set ("debug", JSON.pretty ({visitor: request.visitor, header: request.headers}))
			if (false) response.output.set ("meta", {attribute: {name: "key", content: "value"}})
			}
		next ()
		}
	else next ()
	}

async function security (request, response, next) {
	if (request.OK ()) next ()
	else {
		if (request.error.length) {
			if (request.error.exist ("forbidden")) response.error ().forbidden ()
			else if (request.error.exist ("exist")) response.error ().exist ()
			else if (request.error.exist ("path")) response.error (400, "Invalid PATH")
			else response.error (null)
			}
		}
	}

define (module).export ({function: library, check, cache, setup, template, security})
