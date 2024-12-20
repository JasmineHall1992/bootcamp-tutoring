
// Problem #1 // use destructuring on a single object
let getInfoString = (film) => {
    const { title, year, name } = film;
    return `${title} (${year}) - directed by ${name}`;
}

// Problem #2 // using spread operator on a simple array
//I: film object, newTag
//O: a new array thats a copy of new tag
let getNewGenreTagsArray  = (films, newTag) => {
    // Destructure the genreTags array from the film object
    const { genreTags } = films;

    // Use the spread operator to copy the genreTags array into a new array
    const newGenreTagsArray = [...genreTags];

    // Add the newTag to the copied array
    newGenreTagsArray.push(newTag);

    // Return the new array with the added tag
    return newGenreTagsArray;
};


// Problem #3 // using spread operator to create a copy of an object
let getNewObject = (film, key, value) => {
    //use the spread operator to make a copy of input object film
    const filmCopy = {...film};
    //add the new key to the copy using the push method, this is an object not an array
    filmCopy[key] = value;
    //return the copy
    return filmCopy;
}

// Problem #4 // destructuring on each object using a for loop
//I: an array called "films" and a string called "director"
//O: the nomation and status of the nomination of the director input
let printAwards = (films, director) => {
    //loop through the films ARRAY and destructure three of the keys
    for (let i = 0; i < films.length; i++){
        const {filmTitle, category, status} = films[i];
    //check if the film's director matches the input
    if (films[i].director === director) {
    //loop through the academy Awards array
    for (let j = 0; i < academyAwards.length; j++){
        //destructure
        const {filmTitle, category, status} = academyAwards[j];
    } //return with template literal
    return `${status}: ${filmTitle} - ${category}`;
}
    }
}
// Problem #5 // use destructing on an array of arrays
const updateAward = (film, nominatedFilm, category, updates) => {
    // Find the nominated film in the academyAwards array
    const updatedAwards = film.academyAwards.map((nomination) => {
        // Check if this is the matching nomination
        if (nomination.filmTitle === nominatedFilm && nomination.category === category) {
            // Create a copy of the nomination using the spread operator
            let updatedNomination = { ...nomination };

            // Iterate through the updates array
            for (let [key, value] of updates) {
                updatedNomination[key] = value; // Update the key with the new value
            }

            return updatedNomination; // Return the updated nomination
        }

        return nomination; // Return the original nomination if not a match
    });

    return updatedAwards; // Return the updated academyAwards array
};

