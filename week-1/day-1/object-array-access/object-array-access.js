// Problem #1 //
//I: student object
//O: string of text that represents students prep observations and the date
function getFirstPrepObservation(object){
    console.log(student.courses[0].observations[0].text)
    //access both the prep observation and the date observed
    let string = student.courses[0].observations[0].text;
    let date = student.courses[0].observations[0].dateObserved;
    //use template literals to put them together with the dash and return a new student object
    return `${string} - ${date}`
}

// Problem #2 //
//I: student object
//O: return a string of the name of the author and role of last observation from the last phase attempted
//C: access the last phase attempted (bootcamp) AND last date observed
function getLastObservationAuthor(object){
    //acesss the last observation
    let lastCourse = student.courses[student.courses.length - 1];
    //access the last observation using the last course variable
    let lastObservation = lastCourse.observations[lastCourse.observations.length - 1];
    //access the name, dont hard code 
    let lastName = lastObservation.author.name;
    //access the role
    let lastRole = lastObservation.author.role;
    //console log to debug
 
    //return using literal strings
    return `${lastName} - ${lastRole}`;
    
}


// Problem #3 //
function getLastCourseNameAndStatus(object){
    
}

// Problem #4 //
function createSimplifiedObject(object){
    
}

// Problem #5 //
function createString(object){
    
}








// function getLastRoleAndDateArray(array){
//     const output = [];
//     for (let i = 0; i < array.length; i++){
//         const course = array[i].courses[array[i].courses.length - 1];
//         let object;
//         if (course.observations.length > 1){
//             object = course.observations[course.observations.length - 1];
//         } else {
//             object = course.observations[0];
//         }
//         output.push(object.author.role + " - " + object.dateObserved);
//     }
//     return output;
// }

