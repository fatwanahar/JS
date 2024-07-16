// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=90f9c5b8&s=avengers",
//   success: (results) => {
//     console.log(results);
//   },
//   error: (e) => {
//     console.log(e.responseText);
//   },
// });

$(document).ready(function () {
  $.ajax({
    url: "http://www.omdbapi.com/?apikey=90f9c5b8&s=avengers",
    dataType: "json",
    success: function (data) {
      const movies = data.Search;
      console.log(movies);
      var card = $("#cardSection");
      $.each(movies, function (index, movie) {
        card.append(`<div class="col-md-4 my-3">
            <div class="card">
            <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}" />
            <div class="card-body">
              <h5 class="card-title">${movie.Title}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">
              ${movie.Year}
              </h6>w
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detailModal">
              Lihat Detail
              </button>
            </div>
          </div>
          </div>`);
      });
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("Error fetching data: " + textStatus);
    },
  });
});
