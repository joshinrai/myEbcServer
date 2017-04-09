var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '我的游记' });
});

/**路由测试,貌似index中的路由不起作用**/
router.get('/test' , function( req , res , next){
  res.render("this is router test ...") ;
}) ;

module.exports = router;
