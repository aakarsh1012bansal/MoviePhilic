const search = () => {
    const searchbox = document.getElementById("search-item").value.toLowerCase();
    const movielist = document.getElementById("movie-list")
    const movie = document.querySelectorAll(".movie")
    const movie_title = document.getElementsByTagName("h3")

    for(var i=0; i<movie_title.length; i++) {
        let match = movie[i].getElementsByTagName("h3")[0];

        if(match) {
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toLowerCase().indexOf(searchbox) > -1) {
                movie[i].style.display = "";
            }
            else {
                movie[i].style.display = "none";
            }
        }
    }
}