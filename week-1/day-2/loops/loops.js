
// Problem #1 //
function logLocationAndTime(students){
        // Iterate BACKWARDS through the array
        for (let i = students.length - 1; i >= 0; i--) {
            // Make variables for location and time
            let local = students[i].location; 
            let zone = students[i].timeZone;
    
            // Make a template literal to log
            let output = `${local} - ${zone}`;
            console.log(output);
        }
    }
    


// Problem #2 //
//I: input a students array
//O: output students name and the number of courses taken
function logHalf(students){
    //iterate through only half of the array by dividing in half
    for (let i = 0; i < Math.floor(students.length / 2); i++) {
       //make variables for the name and number of attempts using access
       let name = students[i].name;
       let attempts = students[i].courses.length;
       //make a template literal to log
       let final = `${name}\nCourses attempted: ${attempts}\n--`;
       console.log(final);
      }
    
}

// Problem #3 //
function getStringValues(student){
    
}

// Problem #4 //
function createBooleanEntries(array, name){
    
}

// Problem #5 //
function getCoursesByYear(array, year){
    
}
