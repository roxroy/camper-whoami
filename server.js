var express = require('express')

var app = express()

app.get('/api/whoami', function(req, res) {
    var result = { ipaddress: undefined , language : undefined , software :undefined};
     
    res.json(result)
})

app.listen(process.env.PORT || 3000)
