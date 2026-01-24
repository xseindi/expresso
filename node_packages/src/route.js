var $ = require ("script.io.js")
const {define} = $
var $$$ = function () {}
$$$.package = require ("../package.json")
$$$.router = require ("./router.json")

var app = []

app.push ({
	method: "GET",
	path: "/testing.js",
	context: async function (request, response, next) {
		if (request.OK ()) {
			if (request.app.serial) {
				response.files ("test.js");
				}
			else next ()
			}
		else next ()
		},
	})

define (module).export (app)
