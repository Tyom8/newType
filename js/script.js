// let js = "JS/React 2022-23 Group ITSpace Academy";
// console.log(js);

// function fnLike (playing,watching,organize) {
//     return {playing,
//     watching,
//     organize}
// };
// let like = fnLike("Football","Football","Football");

// function fnKarush(name,lastname,age,profession,like) {
//     return {
//         name,
//         lastname,
//         age,
//         profession,
//         like
//     }
// };

// function fninstructor(name,lastname,age,profession,) {
//     return {
//         name,
//         lastname,
//         age,
//         profession
//     }
// };
// let infoinstructor = fninstructor("Aghasi","Gyurdjoglyan","X","Programmer");
// let infostudents = [
//     fnKarush ("Karush","Melqonyan",23,"Beginner Programmer",like),
//     fninstructor ("David","Baxalbashyan","X","Beginner Programmer"),
//     fninstructor ("Gurgen","Harutyunyan","X","Beginner Programmer"),
//     fninstructor ("Hovo","Hovhannisyan","X","Beginner Programmer"),
//     fninstructor ("Mher","Xanoyan","X","Beginner Programmer"),
//     fninstructor ("Suren","Margaryan","X","Beginner Programmer"),
//     fninstructor ("Radik","Manasyan","X","Beginner Programmer"),
// ];

// function fnPeople (instructor,students) {
//     return {
//         instructor,
//         students
//     }
// };
// let peopleInTheGroup = fnPeople(infoinstructor,infostudents);

// function fnTableTools (name,compNumber,operationSystem,display,name2,model,quality,name3,worksWith) {
//     return [{
//         name,
//         compNumber,
//         operationSystem,
//         display
//     },
//     {
//         name2,
//         model,
//         quality,
//     },
//     {
//         name3,
//         worksWith
//     }]
// };
//  let tableTools = fnTableTools("Computer",25,"Windows 7","Full HD","Computer Mouse","Genius","Good","Video Proector","Lazer");

// function fnClassroomTools (internet,tables,chairs,tableTools) {
//     return {
//         internet,
//         tables,
//         chairs,
//         tableTools
//     }
// };

// let classroomTools = fnClassroomTools(true,10,50,tableTools);
// let classroom = fnClassroom("EPAM building",classroomTools,true,true);


// function fnClassroom (adress,classroomTools,coffeeMachinе,pingPong) {
//     return {
//         adress,
//         classroomTools,
//         coffeeMachinе,
//         pingPong
//     }
// };


// function fngroup (peopleInTheGroup,classroom) {
//     return {
//         peopleInTheGroup,
//         classroom
//     }
// };

// let jsGroup = fngroup(peopleInTheGroup,classroom);
// console.log(jsGroup);

function Instructor (name,lastname,age,profession,salaryEndMounth) {
    this.name = name,
    this.lastname = lastname,
    this.age = age,
    this.profession = profession,
    this.salaryStartMounth = 0,
    this.salaryEndMounth = salaryEndMounth
};
function Student (name,lastname,age,profession) {
    this.name = name,
    this.lastname = lastname,
    this.age = age,
    this.profession = profession,
    this.moneyStudentInStartMounth = "30000$",
    this.moneyStudentInEndMounts = 0
};
// name: 'Computer', compNumber: 25, operationSystem: 'Windows 7', display: 'Full HD'
function Computer (name,compNumber,operationSystem,display) {
    this.name = name,
    this.compNumber = compNumber,
    this.operationSystem = operationSystem,
    this.display = display
};
// name2: 'Computer Mouse', model: 'Genius', quality: 'Good'
function Mouse(name,model,quality) {
    this.name = name,
    this.model = model,
    this.quality = quality
};
// name3: 'Video Proector', worksWith: 'Lazer'
function Proector (name,worksWith) {
    this.name = name,
    this.worksWith = worksWith
};
function MyGroup(aName) {
    this.aName = aName,
    this.peopleInTheGroup = {
        instructor: [],
        students: []
    },
    this.classroom = {
        adress: "Epam Building",
        classRoomTools: {
            chair: 50,
            internet: true,
            table: 10,
            tableTools: []
        },
        coffeeMachine: true,
        pingPong: true
    },
    this.addInstructor = function (name,lastname,salaryEndMounth) {
        const instructor = new Instructor(name,lastname,"X","Programmer",salaryEndMounth);
        this.peopleInTheGroup.instructor[this.peopleInTheGroup.instructor.length] = instructor;
    },
    this.addStudents = function (name,lastname) {
        const students = new Student(name,lastname,"X","Beginner Programmer");
        this.peopleInTheGroup.students[this.peopleInTheGroup.students.length] = students;
    },
    this.addComp = function () {
        const computer = new Computer("Computer",25,"Windows 7","Full HD");
        this.classroom.classRoomTools.tableTools[this.classroom.classRoomTools.tableTools.length] = computer;
    },
    this.addMouse = function() {
        const mouse = new Mouse("Computer Mouse","Genius","Quality");
        this.classroom.classRoomTools.tableTools[this.classroom.classRoomTools.tableTools.length] = mouse;
    },
    this.addProector = function() {
        const proector = new Proector("Video Proector","Lazer");
        this.classroom.classRoomTools.tableTools[this.classroom.classRoomTools.tableTools.length] = proector;
    }
};    

let jsGroup = new MyGroup("JS/React 2022-23 Group ITSpace Academy");
jsGroup.addStudents("Karush","Melqonyan");
jsGroup.addStudents("Artyom","Aleqsanyan");
jsGroup.addStudents("Gurgen","Harutyunyan");
jsGroup.addStudents("Radik","Manasyan");
jsGroup.addStudents("Mher","Xanoyan");
jsGroup.addStudents("David","Baxalbashyan");
jsGroup.addStudents("Hovo","Hovhannisyan");
jsGroup.addInstructor("Aghasi","Gyurdjoglyan",jsGroup.peopleInTheGroup.students.length * 30000 + "$");
jsGroup.addComp();  
jsGroup.addMouse();
jsGroup.addProector();
console.log(jsGroup);
