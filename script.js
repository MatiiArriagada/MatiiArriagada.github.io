

let moviecont = document.querySelector("#lista");


const buscarPelicula = () => {
    const nombreDePelicula = document.getElementById("buscador").value;

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=af0e0a76ec3a39a7dc32e7f88e6e6968&language=en-US&query=${nombreDePelicula}&page=1&`, {
        method: "GET",
        redirect: "follow",
    })
    .then((success) => success.json())
    .then((data) => {
        console.log(data.results);
        for (const pelicula of data.results) {
            var tarjeta = document.createElement("div");
            var cont = document.createElement("div");
            var imagen = document.createElement("img");
            var title = document.createElement("h3");
            var over = document.createElement("p");

            tarjeta.classList.add("tarjeta");
            cont.classList.add("contenedorimg");
            imagen.classList.add("imagen");
            title.classList.add("titulo");
            over.classList.add("descripcion");

            imagen.src = "https://image.tmdb.org/t/p/w500" + pelicula.poster_path;
            title.textContent = pelicula.title;
            over.textContent = pelicula.overview;

            tarjeta.appendChild(cont);
            cont.appendChild(imagen);
            tarjeta.appendChild(title);
            tarjeta.appendChild(over);
            moviecont.appendChild(tarjeta);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };