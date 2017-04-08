var useragent = require('express-useragent');

function getIp (headers, client){
     return ( headers["X-Forwarded-For"]
                || headers["x-forwarded-for"]
                || client.remoteAddress );
}

function getLang (langs){
    // Return the first one
    return  langs ? langs[0] : "unknown";
}

function getSoftware (uaSource){
    var ua = useragent.parse(uaSource);
    var source = ua.source;
    
    /*
       Get the first section in parentheses
       
        \( : match an opening parentheses
        ( : begin capturing group
        [^)]+: match one or more non ) characters
        ) : end capturing group
        \) : match closing parentheses
    */

    var regExp = /\(([^)]+)\)/;
    var matches = regExp.exec(source);
    
    return matches[1];
}


module.exports = {
   getIp,
   getLang,
   getSoftware
}
