interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience: number;
    [propName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

function printTeacher(firstname:string, lastname:string): string{
    return `${firstname[0]}. ${lastname}`;
}

interface classInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

interface classConstructor {
    new (firstName: string, lastName: string): classInterface
}

class StudentClass implements classInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

/*const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  console.log(teacher3);
  
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  console.log(director1); */

  console.log(printTeacher('Teacher', 'Wanjiku'));

const studentClass: StudentClass = new StudentClass('sofia', 'cheung');
console.log(studentClass.displayName());
console.log(studentClass.workOnHomework());