// asynchronous callback

// AJAX
// function getUserAll(url, success, error) {
//   let xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };
//   xhr.open("GET", url);
//   xhr.send();
// }

// getUserAll(
//   "user.json",
//   (results) => {
//     const users = JSON.parse(results);
//     users.map((m) => console.log(m.nama));
//   },
//   (error) => {}
// );

//AJAX using JQuerry
// $.ajax({
//   url: "user.json",
//   success: (results) => {
//     results.map((mhs) => console.log(mhs.nama));
//   },
//   error: (e) => {
//     console.log(e.responseText);
//   },
// });

// get data from local json file using jquery ajax and append to html
$(document).ready(function () {
  $.ajax({
    url: "user.json",
    dataType: "json",
    success: function (data) {
      var tableBody = $("#tabel tbody");
      tableBody.empty(); // Clear existing rows

      $.each(data, function (index, user) {
        var row = $("<tr></tr>");
        row.append('<th scope="row">' + (index + 1) + "</th>"); // Auto-increment "No" column
        row.append("<td>" + user.nama + "</td>");
        row.append("<td>" + user.umur + "</td>");
        row.append("<td>" + user.pekerjaan + "</td>");
        tableBody.append(row);
      });
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("Error fetching data: " + textStatus);
    },
  });
});
