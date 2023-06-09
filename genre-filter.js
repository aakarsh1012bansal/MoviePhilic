
var count = 0;

function filter_movie(c) {
    count = 0;
    const load_more_movies = document.getElementById("loadmore")
    load_more_movies.style.display = "none"
    const footer = document.getElementById("footer")
    footer.style.marginTop = "25px"
    const movielist = document.getElementById("movie-list")
    const movie = document.querySelectorAll(".movie")
    const genre = document.getElementsByTagName("h5")

    if(c=="free") {
        const free_movies = document.getElementsByTagName("h6")

        for(var i=0; i<genre.length; i++) {
            let match = movie[i]. getElementsByTagName("h6")[0];

            if(match) {
                let textvalue = match.textContent || match.innerHTML

                if(textvalue.toLowerCase().indexOf(c) > -1) {
                    movie[i].style.display = "";
                }
                else {
                    movie[i].style.display = "none";
                }
            }
        }
    }
    else {
        for(var i=0; i<genre.length; i++) {
            let match = movie[i]. getElementsByTagName("h5")[0];

            if(match) {
                let textvalue = match.textContent || match.innerHTML

                if(textvalue.toLowerCase().indexOf(c) > -1) {
                    movie[i].style.display = "";
                }
                else {
                    movie[i].style.display = "none";
                }
            }
        }
    }
}
function load_more_movies() {
    const movielist = document.getElementById("movie-list")
    const movie = document.querySelectorAll(".movie")

    for(var i=32+(12*count); i<=((32+12-1)+(12*count)); i++) {
        movie[i].style.display = 'inline'
    }
    count = count+1;
}

// function filter_free_movie(c) {
//     const movielist = document.getElementById("movie-list")
//     const movie = document.querySelectorAll(".movie")
//     const genre = document.getElementsByTagName("h6")

//     for(var i=0; i<genre.length; i++) {
//         let match = movie[i]. getElementsByTagName("h6")[0];

//         if(match) {
//             let textvalue = match.textContent || match.innerHTML

//             if(textvalue.toLowerCase().indexOf(c) > -1) {
//                 movie[i].style.display = "";
//             }
//             else {
//                 movie[i].style.display = "none";
//             }
//         }
//     }
// }


// (function () {
//     const buttons = document.querySelectorAll('.btn')
//     const movielist = document.querySelectorAll('.movie-list')

//     buttons.forEach((button) => {
//         button.addEventListener('click', (e) => {
//             e.preventDefault()
//             const filter = e.target.dataset.filter

//             movielist.forEach((item) => {
//                 if(item.classList.contains(filter)) {
//                     item.style.display = ''
//                 }
//                 else {
//                     item.style.display = "none"
//                 }
//             })
//         })
//     })
// })();