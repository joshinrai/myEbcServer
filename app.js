var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
//添加mongo对象实体类
//var mUsers = require('./modules/users.js') ;

var mongoServer = require('./routes/mongoServer') ;

//****************添加mongodb**************
//添加mongodb依赖
//var mongoose = require('mongoose');
//var db = mongoose.connect('mongodb://127.0.0.1/myEbc') //连接本地数据库
//console.log('mongoose' , mongoose) ;

//测试nodejs连接mongodb
//var Schema = mongoose.Schema ;//创建模型
//var testSchema = new Schema({name : String , id : String}) ;
//var test = db.model('test' , testSchema) ;
//console.log("the db is :" , db) ;
//console.log( "the test is :" , test) ;
//****************************************

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

//引入mongo模块
//app.use('/mongoServer' , mongoServer) ;

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

console.log("app.js is used ...") ;

module.exports = app;
