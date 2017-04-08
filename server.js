var express = require('express')
var path = require('path')
var whoami = require('./whoami');
var app = express()

app.use(express.static(path.join(__dirname, '')))
app.set('view engine', 'pug')
app.set('views','./')

app.get('/whoami', function(req, res) {
    var result = { ipaddress: undefined , language : undefined , software :undefined};
    
    result.ipaddress =  whoami.getIp(req.headers, req.client);
    result.language =  whoami.getLang(req.acceptsLanguages());
    result.software =  whoami.getSoftware(req.headers['user-agent']);
    
    res.json(result)
})

app.get('/', function(req, res) {
 var now = new Date()
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

    res.render('index', { url : fullUrl}  )
})

app.listen(process.env.PORT || 3000)
