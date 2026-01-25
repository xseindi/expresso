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
	if (this.app.type_of.site) {
		response.vue ({
			layout: "",
			router: "",
			var: {j: "son"},
			})
		console.log (response.var)
		response.output.set ("vue.app.theme", JSON.stringify ({layout: response.vue.proto.layout, router: response.vue.proto.router}))
		var populate = {
			base_url: request.base_url,
			"vue.app.var": JSON.stringify (response.vue.proto.var),
			}
		var template_test = $.html.template.test ()
		var render = response.output.populate (populate).render (template_test)
		response.send (render)
		}
	else next ()
	})

/**
 * article
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

app.get (app.router.article, async function (request, response, next) {
	if (this.app.type_of.site) {
		response.send ("...")
		}
	else next ()
	})

app.get (app.router ["article:index"], async function (request, response, next) {
	if (this.app.type_of.site) {
		response.send ("...")
		}
	else next ()
	})

/**
 * categories
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

app.get (app.router.categories, async function (request, response, next) {
	if (this.app.type_of.site) {
		response.send ("...")
		}
	else next ()
	})

app.get (app.router ["categories:index"], async function (request, response, next) {
	if (this.app.type_of.site) {
		response.send ("...")
		}
	else next ()
	})

/**
 * page
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

app.use (async function (request, response, next) {
	if (this.app.type_of.site) {
		next ()
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
