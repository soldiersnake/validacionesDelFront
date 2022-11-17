window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    
    let form = document.querySelector(".form");
    form.title.focus()

    form.addEventListener("submit", (e) => {
        let errores = [];
        let title = document.querySelector('#title');
        let rating = document.querySelector('#rating');
        let awards = document.querySelector('#awards');
        let release_date = document.querySelector('#release_date');
        let length = document.querySelector('#length');
        let genre_id = document.querySelector('#genre_id');

        if(title.value == ""){
            errores.push("Titulo no puede estar vacio");
            title.classList.add('is-invalid');
            title.classList.remove('is-valid');
        }else{
            title.classList.remove('is-invalid');
            title.classList.add('is-valid');
        }
        if(rating.value == ""){
            errores.push("Calificacion no puede estar vacio");
            rating.classList.add('is-invalid');
            rating.classList.remove('is-valid');
        }
        else{
            rating.classList.remove('is-invalid');
            rating.classList.add('is-valid');
        }
        if(awards.value == ""){
            errores.push("Premios no puede estar vacio");
            awards.classList.add('is-invalid');
            awards.classList.remove('is-valid');
        }
        else{
            awards.classList.remove('is-invalid');
            awards.classList.add('is-valid');
        }
        if(release_date.value == ""){
            errores.push("Fecha de estreno no puede estar vacio");
            release_date.classList.add('is-invalid');
            release_date.classList.remove('is-valid');
        }
        else{
            release_date.classList.remove('is-invalid');
            release_date.classList.add('is-valid');
        }
        if(length.value == ""){
            errores.push("Duracion no puede estar vacio");
            length.classList.add('is-invalid');
            length.classList.remove('is-valid');
        }
        else{
            length.classList.remove('is-invalid');
            length.classList.add('is-valid');
        }
        if(genre_id.value == ""){
            errores.push("Genero no puede estar vacio");
            genre_id.classList.add('is-invalid');
            genre_id.classList.remove('is-valid');
        }
        else{
            genre_id.classList.remove('is-invalid');
            genre_id.classList.add('is-valid');
        }
        if(errores.length > 0){
            e.preventDefault();
            let ulError = document.querySelector(".errores")
            ulError.innerHTML = "";
            for(let i = 0; i < errores.length ; i++){
                ulError.innerHTML += `<li> ${errores[i]} </li>`
            }
        }else{

        }
    })

}