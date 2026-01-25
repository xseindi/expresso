var $ = require ("script.io.js")
var express = require ("express")
var __dir = process [["C", "W", "D"].join ("").small ()] ()
const {define} = $

var app = express ()

app.use (async function (request, response, next) {
	$.date.timeout (function () {
		response.send ("asd")
		next ()
		})
	// next ()
	})

app.get ("/", function (request, response) {
	response.send (`
		<script src="/test1.js?1"></script>
		<script src="/test2.js?2"></script>
		<script src="/test3.js?3"></script>
		hello
		`)
	})

app.get ("/test1.js", function (request, response) {
	console.log (123)
	response.type ("js").send (`
		var a = 1;
		`)
	})

app.get ("/test2.js", function (request, response) {
	console.log (123)
	response.type ("js").send (`
		var a = 1;
		`)
	})

app.get ("/test3.js", function (request, response) {
	console.log (123)
	response.type ("js").send (`
		var a = 1;
		`)
	})

app.listen (80)
