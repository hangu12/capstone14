// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// // app.set('port', process.env.PORT || 3100);
// // app.listen(app.get('port'));

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));


// // Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, '../client/build')));

// // Handle GET requests to /api route
// app.get("/api", (req, res) => {
//   res.json({ message: "Hello guys, this is from server! 3333" });
// });

// // // All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'client/public', 'detail.html'));
//   // res.sendFile(path.resolve(__dirname, 'client/build', 'detail.html'));
// });




// // app.get("/api", (req, res) => {
// //   res.json({ message: "Hello from server!" });
// // });

// app.use('/', indexRouter);
// // app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
