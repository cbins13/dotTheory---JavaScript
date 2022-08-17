const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.set("view engine", "pug");
app.use(cookieParser());

const mainRoutes = require("./routes/");
const cardRoutes = require("./routes/cards");

// app.use((req, res, next) => {
//   console.log("Hello");
//   //const err = new Error("ohnoe");
//   //err.status = 500;
//   next();
// });

// app.use((req, res, next) => {
//   console.log("World");
//   next();
// });

app.use(mainRoutes);
app.use('/cards',cardRoutes);

// app.use((req, res, next) => {
//   const err = new Error("Not found");
//   err.status = 404;
//   next(err);
// });

// app.use((err, req, res, next) => {
//   res.locals.error = err;
//   res.status(err.status);
//   res.render("error", err);
// });

app.listen(3000, () => {
  console.log("The application is running on localhost:3000!");
});
