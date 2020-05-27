// เขียน Express แบบ MVC แต่ตอนทำงาน จะเรียก reqres.in แบบ 1 resource (User)
var express = require('express')
var bodyParser = require('body-parser')
var dataRoute = require('./route/dataRoute')

var app = express()
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(bodyParser.json())

app.use('/data', dataRoute)

app.listen(3000)



