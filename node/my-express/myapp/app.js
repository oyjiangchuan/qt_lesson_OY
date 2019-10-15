var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index'); // 引入index.js路由配置文件
var usersRouter = require('./routes/users');// 引入user.js路由配置文件

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // 指定视图文件夹views 想输出什么文件 全部放在views文件下
app.set('view engine', 'ejs'); // 指定视图引擎为ejs文件

// 使用刚刚加载的资源
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // 指定公共资源文件夹为public 公共资源

app.use('/', indexRouter); // 当路径为'/' 即http://localhost:3000/ 去匹配index.js
app.use('/users', usersRouter); // 当路径为'/users' 即http://localhost:3000/users 去匹配users.js

// catch 404 and forward to error handler
// 匹配404 路径未匹配 
app.use(function(req, res, next) { 
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // 路径匹配错误时 输出500
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
