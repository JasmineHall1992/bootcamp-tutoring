
// Problem #1 // use destructuring on a single object
let getInfoString = (film) => {
    const {title, year, director} = film;Í
    return `${title} (${year}) - directed by ${director}`;
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
    const filmCopy = [...films];
}

// Problem #4 // destructuring on each object using a for loop
let printAwards;

// Problem #5 // use destructing on an array of arrays
let updateAward;
