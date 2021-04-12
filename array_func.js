
function dhundo (item) {
    if (item==movies.title) {
        return movies;
    }
}

movies.find(dhundo(myInput));