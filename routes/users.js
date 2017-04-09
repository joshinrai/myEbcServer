var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("use function router ...") ;
  res.send('respond with a resource');
});

console.log("users.js is used ...") ;

/**
 * 测试users中的路由
 */
router.get('/test', function(req, res, next) {
    console.log("use function router test ...") ;
    res.send('respond with a resource test ...');
});

module.exports = router;