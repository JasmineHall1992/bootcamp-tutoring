
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
// Problem #3 //
// I: student object
// O: output array with string values
function getStringValues(student) {
    // Create an empty array for the output to be pushed into
    let output = [];
    
    // Use a for-in loop to iterate through the student object
    for (let key in student) {
      // Check if the value is a string and its length is longer than 3
      if (typeof student[key] === "string" && student[key].length > 3) {
        //if so push the key into the created output array
        output.push(student[key]);
      }
    }
  
    // Return the output array
    return output;
  }
  
// Problem #4 //
//I: array of student objects, name of individual student in strings
//O: new array with every key that has a boolean attached to it
//C: use for loops and for in loops
function createBooleanEntries(array, name){
    //create an empty output array
    const output = [];
    //create a for loop to input through the input attay and find the student name
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === name){     
    //create a for in loop to create a subarray of everything with a boolean, nested loop
    for (let key in array[i]){
        if (typeof array[i][key] === 'boolean'){
            //push both the key property name and the whether the key is true or false
             output.push([key, array[i][key]]);
    }    
}
        }
    }
    return output;
}

// Problem #5 //
//I: array, string that represents year
//O: an array with the studentName, course, status and observations
//C: should use nested for loops
function getCoursesByYear(array, year) {
    // Create an empty output
    const output = [];

    // Loop through each student object in the array
    for (let i = 0; i < array.length; i++) {
        const student = array[i]; // Current student object
        const courses = student.courses || []; // Safely access 'courses'

        // Loop through the student's courses
        for (let j = 0; j < courses.length; j++) {
            const course = courses[j]; // Current course object

            // Check if the course's dateOfLastAttempt includes the input year
            if (course.dateOfLastAttempt && course.dateOfLastAttempt.includes(year)) {
                const courseObj = {
                    studentName: student.name, // Correct reference to student's name
                    course: course.courseName,
                    status: course.status,
                    observations: course.observations ? course.observations.length : 0, // Safely count observations
                };
                output.push(courseObj); // Add the result to output
            }
        }
    }

    return output;
}

