// Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
// Task 1
class Person {
    constructor(name,age){
    this.name=name,
    this.age=age;
    }

    start(){
        console.log("is",this.name,this.age)
    }

}
let Ali=new Person('blue','35','bur')
console.log(Ali.start());

// Add a method to the Person class that updates the age property and logs the updated age.
// Task 2

class Person {
    constructor(age){
    // this.color=color,
    // this.model=model,
     this.age=age
    // this.behaviour=behaviour;
    }

    newage(my){
        this.age=my;
        console.log(`${this.age} is  year old`)
    }
}
    let ali=new Person('23')
ali.newage(22);

    // Task 3
    class Person{
        constructor(name){
            this.name=name
        }
    }
    class Student extends Person{
        constructor(name,studentId){
            super(name)
            this.studentId=studentId
           
        }
        getid(){
            return this.studentId;
        }
    }

    let Newstudent=new Student('ali','2')
console.log(Newstudent.name)
console.log(Newstudent.getid())



// Task 4
class Person{
    greeting(){
        return "hello";
    }
        }

class Student {
    constructor(studentId){
        this.studentId=studentId
       
    }
    greeting(){
return (`${this.studentId}`)
    }
}
let newstudent=new Student('ali')
console.log(newstudent.greeting())
// Task 6
class Person{
   static gengreeting(){
        return "hello";
    }
        }

class Student {
    constructor(studentId){
        this.studentId=studentId
       
    }
    greeting(){
return (`${this.studentId}`)
    }
}
console.log(Person.gengreeting());


// Task 7
  class Student {
    // Define the static property
    static numberOfStudents = 0;

    constructor(studentId) {
        this.studentId = studentId;
        
        // Increment the static property each time a new student is created
        Student.numberOfStudents++;

        // Log the total number of students
        console.log(`Total number of students: ${Student.numberOfStudents}`);
    }
}
const student1 = new Student(101);
const student2 = new Student(102);
const student3 = new Student(103);

// Task 7
class Person{
    constructor(firstName,lastName){
        this.firstName=firstName,
        this.lastName=lastName
    }
    get fullname(){
        return `${this.firstName} ${this.lastName}`;
    }
}

let newperson=new Person('ali','hamza')
console.log(newperson.fullname);


// Task 8
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Getter method to return the full name
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // Setter method to update the name properties
    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let newPerson = new Person('Ali', 'Hamza');
console.log(newPerson.fullName); // Output: Ali Hamza

// Updating the name using the setter
newPerson.fullName = 'Ahmed Khan';
console.log(newPerson.fullName); // Output: Ahmed Khan
