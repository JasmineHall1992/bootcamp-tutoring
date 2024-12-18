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
    //acesss the last course, DO NOT HARD CODE
    let lastCourse = student.courses[student.courses.length - 1];
    //access the last observation using the last course variable
    let lastObservation = lastCourse.observations[lastCourse.observations.length - 1];
    //access the name
    let lastName = lastObservation.author.name;
    //access the role
    let lastRole = lastObservation.author.role;
    //console log to debug
 //is 
    //return using literal strings
    return `${lastName} - ${lastRole}`;
    
}


// Problem #3 //
//I: a student object
//O: a string of the last course the user has taken followed by status (course-status) 
//C: assume the last course is the last chronologically
function getLastCourseNameAndStatus(object){
    //access the last course (make a general variable)
    let course = student.courses[student.courses.length - 1];
    //use this to access the last courseName
    let name = course.courseName;
    //use this to access the last course's status
    let status = course.status;
    //return the last course and student
    return `${name} - ${status}`;
  




}

// Problem #4 //
//I: a student object
//O: an object with the use name, age, location, courses
function createSimplifiedObject(student){
//add the first and last name into a name
let name = student.firstName + " " + student.lastName;
//access the age
let age = student.age;
//add the city and state to make location
let location = student.city + ", " + student.state;
//use .length of the courses array to find number
let courses = student.courses.length;
 return {
    name: name,
    age: age,
    location: location,
    courses: courses
  };
}


// Problem #5 //
//I: student object
//O: Name, 
    // State & TimeZone: state - EST
        //Date of last course: date (nameofCourse)  
//C: separate each line with a line break
function createString(student){
    //create the name, first and last name with initial
let name = student.firstName + " " + student.lastName[0] + ".";
//create the state and timezone
let location = `State & Time Zone: ${student.state} - ${student.timeZone}`;
//create the date of the last course
//create a last course variable first (this is all for the date variable)
let lastClass = student.courses[student.courses.length - 1];
let lastDate = lastClass.dateOfLastAttempt;
let className = lastClass.courseName;
let date = `Date of Last Course: ${lastDate} (${className})`;
//return everything put together
return `${name}\n${location}\n${date}\n`; 

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

