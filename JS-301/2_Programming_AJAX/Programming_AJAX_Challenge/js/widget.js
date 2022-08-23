var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    var employees = JSON.parse(xhr.responseText);
    var statusHtml = '<ul class="bulleted">';
    for (var i = 0; i < employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHtml += '<li class="in">';
      } else {
        statusHtml += '<li class="out">';
      }
      statusHtml += employees[i].name;
      statusHtml += "</li>";
    }
    statusHtml += "</ul>";
    document.getElementById("employeeList").innerHTML = statusHtml;
  }
};
xhr.open("GET", "data/employees.json");
xhr.send();

var xhr2 = new XMLHttpRequest();
xhr2.onreadystatechange = function () {
  if (xhr2.readyState === 4) {
    var rooms = JSON.parse(xhr2.responseText);
    var statusHtml2 = `<ul class="rooms">`;
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i].available === true) {
        statusHtml2 += `<li class="empty">`;
      } else {
        statusHtml2 += `<li class="full">`;
      }
      statusHtml2 += rooms[i].room;
      statusHtml2 += `</li>`;
    }
    statusHtml2 += `</ul>`;
    document.getElementById("roomList").innerHTML = statusHtml2;
  }
};
xhr2.open("GET", "data/rooms.json");
xhr2.send();
