class Student {
    constructor(gpa){
        this.gpa = gpa;
    }
  
  stringGPA(){
    return this.gpa.toString();
  }
}

const student = new Student(3.9);