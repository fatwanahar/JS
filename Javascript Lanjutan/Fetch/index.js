const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", function () {
  let keyword = document.querySelector(".input-keyword");
  fetch("http://www.omdbapi.com/?apikey=90f9c5b8&s=" + keyword.value)
    .then((response) => response.json())
    .then((response) => {
      const movies = response.Search;
      let card = "";
      const cardContainer = document.querySelector("#cardSection");
      movies.forEach((movie) => {
        card += cardMovie(movie);
      });
      cardContainer.innerHTML = card;

      // bila button detail di klik
      const detailButton = document.querySelectorAll(".detail-button");
      detailButton.forEach((btn) => {
        btn.addEventListener("click", function () {
          let imdbId = btn.dataset.imdbid;
          // console.log(imdbId);
          fetch("http://www.omdbapi.com/?apikey=90f9c5b8&i=" + imdbId)
            .then((response) => response.json())
            .then((m) => {
              const modal = document.querySelector(".modal-body");
              modal.innerHTML = detailMovie(m);
            });
        });
      });
    });
});

function cardMovie(movie) {
  return `<div class="col-md-4 my-3">
            <div class="card">
            <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}" />
            <div class="card-body">
              <h5 class="card-title">${movie.Title}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">
              ${movie.Year}
              </h6>
              <button type="button" class="btn btn-primary detail-button" data-bs-toggle="modal" data-bs-target="#detailModal" data-imdbid="${movie.imdbID}">
              Lihat Detail
              </button>
            </div>
          </div>
          </div>`;
}

function detailMovie(movie) {
  return `<div class="row">
              <div class="col-md-3">
                <img src="${movie.Poster}" alt="${movie.Title}" class="img-fluid" />
              </div>
              <div class="col">
                <ul class="list-group">
                  <li class="list-group-item">
                    <strong>Judul:</strong> ${movie.Title}
                  </li>
                  <li class="list-group-item">
                    <strong>Tahun Rilis:</strong> ${movie.Year}
                  </li>
                  <li class="list-group-item">
                    <strong>Director:</strong> ${movie.Director}
                  </li>
                  <li class="list-group-item">
                    <strong>Penulis:</strong> ${movie.Writer}
                  </li>
                  <li class="list-group-item">
                    <strong>Aktor:</strong> ${movie.Actors}
                  </li>
                  <li class="list-group-item">
                    <strong>Plot:</strong> ${movie.Plot}
                  </li>
                </ul>
              </div>
            </div>`;
}
