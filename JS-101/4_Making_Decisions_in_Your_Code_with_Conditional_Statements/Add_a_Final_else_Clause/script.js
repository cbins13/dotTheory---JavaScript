const isAdmin = false;
const isStudent = false;
let message;

if (isAdmin) {
  message = "Welcome admin";
} else if (isStudent) {
  message = "Welcome student";
} else {
  message = "Access denied";
}
