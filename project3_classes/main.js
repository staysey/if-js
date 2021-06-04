class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set _firstName(firstName) {
        this.firstName = firstName;
    }

    set _lastName(lastName) {
        this.lastName = lastName;
    }
}

class Student extends User {
    constructor(firstName, lastName, admissionYear, courseName) {
        super(firstName, lastName);
        this.admissionYear = admissionYear;
        this.courseName = courseName;
    }

    get course() {
        return 2021 - this.admissionYear;
    }
}

const studentsData = [
    {
        firstName: 'Василий',
        lastName: 'Петров',
        admissionYear: 2019,
        courseName: 'Java',
    },
    {
        firstName: 'Иван',
        lastName: 'Иванов',
        admissionYear: 2018,
        courseName: 'JavaScript',
    },
    {
        firstName: 'Александр',
        lastName: 'Федоров',
        admissionYear: 2017,
        courseName: 'Python',
    },
    {
        firstName: 'Николай',
        lastName: 'Петров',
        admissionYear: 2019,
        courseName: 'Android',
    }
];

class Students {
    constructor(students) {
        this.students = students;
    }

    getInfo() {
        let newArray = this.students.sort((a, b) => {
            return a.course > b.course ? 1 : -1;
        });
        let output = [];
        newArray.forEach(el => {
            output.push(`${el.fullName} - ${el.courseName}, ${el.course} курс`);
        })
        return output;
    }
}

let objArray = [];
studentsData.forEach(el => {
    objArray.push(new Student(el.firstName, el.lastName, el.admissionYear, el.courseName));
})


const students = new Students(objArray);
console.log(students.getInfo());
