var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var GlobalApp = require('./global/global_app');
var app = express();


//headers
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, token"
  );
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var domain = GlobalApp.domain;
app.use(`/${domain}/proceso`, require('./routes/proceso'));
app.use(`/${domain}/usuario`, require('./routes/usuario'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).json({
    mensaje: GlobalApp.mensaje_error_404,
    tipo: GlobalApp.tipo_error,
    mensaje_alterno: "",
  });
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(500).json({
    mensaje: GlobalApp.mensaje_error_500,
    tipo: GlobalApp.tipo_error,
    mensaje_alterno: err.message.toString(),
  });

});

module.exports = app;
