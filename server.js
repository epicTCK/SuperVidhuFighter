var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic("/src")).listen(8080, function(){
    console.log('Server running on 80...');
});
