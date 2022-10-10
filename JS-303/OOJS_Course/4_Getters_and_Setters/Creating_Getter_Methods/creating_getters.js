class Student {
  constructor(gpa, credits) {
    this.gpa = gpa;
    this.credits = credits;
  }

  stringGPA() {
    return this.gpa.toString();
  }

  get level() {
    const studCreds = this.credits;

    switch (true) {
      case studCreds > 90:
        return "Senior";
      case studCreds <= 90 && studCreds >= 61:
        return "Junior";
      case studCreds <= 60 && studCreds >= 31:
        return "Sophomore";
      case studCreds <= 30:
        return "Freshman";
    }
  }
}

const student = new Student(3.9);
