// Project - 4-HighMarks:

const marks = [45,98,87,33,54] 
studentMarksDeclare = true;
studentMarksDeclare ? console.log("The highest marks obtained by student:", Math.max.apply(null,marks)): console.log("Student result not declare yet!");

for(i = 0; i < 5; i++){
    console.log(marks);
}
